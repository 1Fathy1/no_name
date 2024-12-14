<?php

    include("connectiondatabase.php");
        
    $response = [] ; 

    if(isset($_GET['submit'])){

           try{ 
                $sql = "insert into users (username,email,hash_password) values (:user,:em,:pass)";

                $statment = $PDO->prepare($sql);

                $statment->bindParam(':user', $username);
                $statment->bindParam(':em', $email);
                $statment->bindParam(':pass', $password);

                $username= $_GET['username'];
                $email= $_GET['email'];
                $password= $_GET['password'];

                $statment->execute();

                $response['status'] = "successfully" ; 
            }catch(PDOException $e){
                
                $response['status'] = "filed" ; 
                $response['message'] = $e; 
              
            }
            

    }

    echo json_encode($response);
?>