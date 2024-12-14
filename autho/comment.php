<?php

    include("connectiondatabase.php");
        
    $response = [] ; 

    if(isset($_GET['submit'])){

        try{
            $sql = "insert into comment (user_id,comment_text) 
                    values (:user_id,:comment_text)";

            $statmet = $conn->prepare($sql);

            $statment->bindParam(':user_id', $user_id);
            $statment->bindParam(':comment_text', $comment_text);

            $user_id = $_GET['userid'];
            $comment_text = $_GET['text'];

            $statment->execute();
            $response['status'] = "Comment upload successfully"; 



        }catch(PDOException $e){
            $response['status'] = "fiald upload commant"; 
            $response["message"] = "SQL ERROR $e" ; 
        }

    }
?>