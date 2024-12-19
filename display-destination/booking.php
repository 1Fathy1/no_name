<?php

    include("../autho/connectiondatabase.php");
        
    $response = [] ; 
    if(isset($_GET['submit'])){
        $sql = "INSERT INTO booking(arrival_date, hotel_id, user_id, trip_id, `Booking Name`, guests) 
                                VALUES(:arr,NULL,:user,:tri ,:bookname,:gust)";
        try{

            $statment = $PDO->prepare($sql);

            $statment->bindParam(':arr', $arrival_date);
            $statment->bindParam(':user', $user_id);
            $statment->bindParam(':tri', $trip_id);
            $statment->bindParam(':bookname', $bookname);
            $statment->bindParam(':gust', $guests);

            $arrival_date= $_GET['arrival_date'];
            $user_id= $_GET['user_id']; // Done
            $trip_id= $_GET['trip_id'];  // Done
            $bookname= $_GET['bookname']; // Done
            $guests= $_GET['guests']; // done
            
            $statment->execute();

            $response['status'] = "Success" ; 

        }catch(PDOException $e){
            $response['status'] = "Field" ;
            $response['masseag'] = $e -> getMessage();
        }

    }
    echo json_encode($response);
?>