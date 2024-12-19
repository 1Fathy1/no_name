<?PHP

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';
    include("connectiondatabase.php");
    
    $response = [] ;
    // $response['no Requset'] =['true'] ;
    function sedEmail($code , $email) {
          $name = $_POST['username'] ?? "New Password" ; 
        try{
            $mail = new PHPMailer();
     
             $mail->isSMTP();                                     
             $mail->Host       = 'smtp.gmail.com';                 
             $mail->SMTPAuth   = true;   
             $mail->SMTPDebug  = 0 ;                          
             $mail->Username   = 'nor09812399@gmail.com';          
             $mail->Password   = 'pgqh cplm yayv wpqq';           
             $mail->SMTPSecure = 'ssl';     
             $mail->Port       = 465; 
     
             $mail->From       = 'nor09812399@gmail.com' ; 
             $mail->FromName   = 'Fathy Moamen' ; 
             $mail-> addReplyTo('nor09812399@gmail.com' , 'Fathy') ; 
             $mail-> addAddress($email , $name) ; 
           
             $mail->isHTML(true) ; 
             $mail->Subject  = "Your Code" ; 
             $mail->Body     = "<h3>Use this code to register in web site</h3> <h1>Your Code is $code </h1>" ;
             $mail->AltBody  = 'This is the plain text version of the email body.' ;
     
             if($mail->send()){
                 $response['MAILERstatus'] = "success" ;
                 $response['MAILERmessage'] = "Email sent successfully" ;
                 return true ; 
             }else{
                $response['MAILERstatus'] = "Error" ;
                return false ; 
             }
         }catch(Exception $e){
            $response['MAILERmessage']  = 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
            return false ; 
         }
    }  

    
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $_SESSION['email'] = $email ; 
        $code = rand(1000, 9999);
        $response['code'] = $code ;

        try{
            $fl = false ; 
            do{
                $sql =  "select * from temp where code = :code" ; 
                $stmt = $PDO->prepare($sql); 
                $stmt->bindParam(':code', $code);
    
                $stmt->execute();
                if($stmt->rowCount()){
                    $fl = true;
                }else{
                    $fl = false;
                }
            }while($fl);

            $sql =  "select * from temp where user_email = :email" ; 
            $stmt = $PDO->prepare($sql); 
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            if($stmt->rowCount() > 0){
               
                $deleteQuery = "DELETE FROM temp WHERE user_email = :email" ; 
                $statment = $PDO->prepare($deleteQuery);
                $statment->bindParam(':email', $email);
                $statment->execute();
            }

            //  "INSERT INTO  temp (token,code,user_email)  VALUES(:token,:code,:email);" ;
            $sql =  "INSERT INTO temp(password, code, user_email, username)
                              VALUES (:pass ,:code , :email , :name_)" ; 
            $stmt = $PDO->prepare($sql);
            $pass = $_POST['password'] ?? 'no_password';
            $name = $_POST['username'] ?? 'no_name';
            $email = $_POST['email'];

            $stmt->bindParam(':pass', $pass);  
            $stmt->bindParam(':code', $code);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':name_', $name);
            
          

            $stmt->execute();

            if($stmt){
                if(sedEmail($code , $email)){
                    $response['SQLstatus'] = "success";
                    $response['SQLmessage'] = "Email sent successfully";
                    $response['Data'] = json_encode(array(
                        'code' => $code
                    )) ;
                    // header("Location: ../register-page/con-emil.html") ; 
                } 
            }

            }catch (PDOException $e){
                $response['SQLstatus'] = "error";
                $response['SQLmessage'] = $e->getMessage();
                echo json_encode($response);
                exit;
            }
       
    }



    echo json_encode($response);

?>