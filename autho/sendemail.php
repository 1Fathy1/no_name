<?PHP

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';
    include("connectiondatabase.php");
    
    $response = [] ;
    // $response['no Requset'] =['true'] ;
    function sedEmail($code , $email) {
          $name = $_POST['username'] ; 
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
        $bytes = random_bytes(20);
        $token = substr(bin2hex($bytes), 0, 20); 
        $code = rand(1000, 9999);
        try{
            $sql = "INSERT INTO  temp (token,code,user_email)  VALUES(:token,:code,:email);" ;
            $stmt = $PDO->prepare($sql);
            $stmt->bindParam(':token', $token);  
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':code', $code);

            $stmt->execute();

            if($stmt){
                if(true){
                    $response['SQLstatus'] = "success";
                    $response['SQLmessage'] = "Email sent successfully";
                    $response['Data'] = json_encode(array(
                        'code' => $code,
                        'token' => $token
                    )) ;
                } 
            }else{
                $response['SQLstatus'] = "Error";
                $response['SQLmessage'] = "Email sent successfully";
                $response['Data'] = json_encode(array(
                    'code' => $code,
                    'token' => $token
                )) ;
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