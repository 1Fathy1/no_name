<?php

    include("connectiondatabase.php");
    
    $response = [] ; 

    if(isset($_GET['submit'])){

        $username = $_GET['username'] ?? "";
        $password = $_GET['password'] ?? "";

        //prepare the sql query
        $query = "select * from users where username =:name";
        $q_prepare = $PDO->prepare($query);

        //Bind the parametar
        $q_prepare -> bindParam(":name" , $n);
        $n = $username;

        //execute the query
        $q_prepare -> execute();

        //verify the validity of the data
        $userFound = false;
        foreach($q_prepare as $row){
            if ($password == $row['hash_password']) {

                $response['status'] = "successful" ; 
                $response['message'] = "Login successful!" ; 
                
                setcookie("userId" , $row['id'] , 60 * 60 , '/' ) ;
                $userFound = true;
                break;
            }
        }

        if (!$userFound) {
                $response['status'] = "Field" ; 
                $response['message'] = "username or password is not valid " ;    
        }
    }
    

    echo json_encode($response) ; 



?>