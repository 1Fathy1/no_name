<?php

    include("connectiondatabase.php");    
    $response = [] ; 
    $response['login_status'] = "false" ;

    if(isset($_POST['submit'])){
        // check for code . 
        $code = $_POST['code'];
        $email = $_SESSION['email'];
        $response['email'] = isset($_SESSION['email']);

        try{
            // $email = $_POST['email'];
            $statment = $PDO->prepare("SELECT * FROM temp WHERE code = :code and user_email = :email");
            $statment->bindParam(':code', $code);
            $statment->bindParam(':email', $email);
            $statment->execute();
            $result = $statment->fetch(PDO::FETCH_OBJ);

            if($result){
                $response['codeStatus'] = "success";
                $response['codeMessage'] = "Verification code is valid";   
            }else{
                $response['codeStatus'] = "failed";
                $response['codeMessage'] = "Verification code is invalid";
                echo json_encode($response);
                exit();
            }

            if($result->username === "no_name"){
                $response['url'] = "../login-page/create-new-password.html";

                echo json_encode($response);
                exit();
            }else{
                $response['url'] = "../login-page/create-new-password.html";
            }
    
        }
        catch(PDOException $e){
                $response['status'] = "filed" ; 
                $response['message'] = $e; 
        }
         
        // insert user in database . 
        try{ 
            $selectQuery = "select * from temp where code = :code";
    
            $statment = $PDO->prepare($selectQuery);
            $statment->bindParam(':code', $code);
            $statment->execute();
            $data = $statment->fetch(PDO::FETCH_OBJ);

            
            $name = $data->username;
            $email = $data->user_email;
            $pass = $data->password;

            $insertQuery = "INSERT INTO users(username, email, hash_password , role) VALUES (:username, :email, :pass , user)" ; 
            $statment = $PDO->prepare($insertQuery);
            $statment->bindParam(':username', $name);
            $statment->bindParam(':email', $email);
            $statment->bindParam(':pass', $pass);
            $statment->execute();
            
            // delete temp data after successful insertion.
            $deleteQuery = "DELETE FROM temp WHERE code = :code" ; 
            $statment = $PDO->prepare($deleteQuery);
            $statment->bindParam(':code', $code);
            $statment->execute();

            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            $response['login_status'] = "true" ; 
    
            $response['addUserStatus'] = "successfully" ; 
            $response['addUserMessage'] = "Inserted successfully" ; 
        }catch(PDOException $e){
            
            $response['addUserStatus'] = "filed" ; 
            $response['addUserMessage'] = $e; 
          
        }
    }
    echo json_encode($response);
?>