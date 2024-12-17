<?php

    include("connectiondatabase.php");
        
    $response = [] ; 
 
 function insertUser(){
    try{ 
        $sql = "insert into users (username,email,hash_password) values (:user,:em,:pass)";

        $statment = $PDO->prepare($sql);

        $statment->bindParam(':user', $username);
        $statment->bindParam(':em', $email);
        $statment->bindParam(':pass', $password);

        $username= $_POST['username'];
        $email= $_POST['email'];
        $password= $_POST['password'];

        $statment->execute();

        $response['status'] = "successfully" ; 
    }catch(PDOException $e){
        
        $response['status'] = "filed" ; 
        $response['message'] = $e; 
      
    }
 }  
 
 function checkCode() {
    try{
        $code = $_POST['code'];
        $statment = $PDO->prepare("SELECT * FROM verification_codes WHERE code = :code");
        $statment->bindParam(':code', $code);
        $statment->execute();
 }
 catch(PDOException $e){
        $response['status'] = "filed" ; 
        $response['message'] = $e; 
    }
}

    if(isset($_POST['submit'])){
    }

    echo json_encode($response);
?>