<?PHP

   if(isset($_POST['submit'])){
    try{
        $sql =  "UPDATE users SET hash_password = :pass WHERE email = :email" ; 

        $stmt = $PDO->prepare($sql);
        $pass = $_POST['password'] ;
        $email = $_SESSION['email'];

        $stmt->bindParam(':pass', $pass); 
        $stmt->bindParam(':email', $email);

        $stmt->execute();

        if($stmt){
           $response['status'] = 'success';
        }

        }catch (PDOException $e){
            $response['status'] = 'field';
            $response['SQLstatus'] = "error";
            $response['SQLmessage'] = $e->getMessage();
            echo json_encode($response);
            exit() ; 
        }



        // set session . 
        try{
            $sql =  "SELECT username from users WHERE email = :email" ; 
    
            $stmt = $PDO->prepare($sql);
            $email = $_SESSION['email'];
    
            $stmt->bindParam(':email', $email);
    
            $stmt->execute();
    
            if($stmt){
               $response['status'] = 'success';
               $response['message'] = 'fetch username is done';
            }
    
            }catch (PDOException $e){
                $response['status'] = 'field';
                $response['SQLstatus'] = "error";
                $response['SQLmessage'] = $e->getMessage();
                echo json_encode($response);
                exit() ; 
            }

   }
   echo json_encode($response);
?>