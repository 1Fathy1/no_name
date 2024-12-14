<?PHP

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    // try{
       $mail = new PHPMailer();

        $mail->isSMTP();                                     
        $mail->Host       = 'smtp.gmail.com';                 
        $mail->SMTPAuth   = true;   
        $mail->SMTPDebug  = 2 ;                          
        $mail->Username   = 'nor09812399@gmail.com';          
        $mail->Password   = 'password';           
        $mail->SMTPSecure = 'ssl';     
        $mail->Port       = 465; 

        $mail->From       = 'nor09812399@gmail.com' ; 
        $mail->FormName   = 'Fathy Moamen' ; 
        $mail-> addReplyTo('nor09812399@gmail.com' , 'Fathy') ; 
        $mail-> addAddress('fmoamen83@gmail.com' , 'Mohamed') ; 
      
        $mail->isHTML(true) ; 
        $mail->Subject  = "Tsts Email from PHPEmail" ; 
        $mail->body     = '<b>This is a test email</b> sent using PHPMailer' ;
        $mail->AltBody  = 'This is the plain text version of the email body.' ;

        if($mail->send()){
            echo "Done" ;
        }else{
            echo "field";
        }



    // }catch(Exception $e){
    //    echo "Message could not be sent. <br>" ; 
    //    echo "Mailer Error " . $e ; 
    // }

?>