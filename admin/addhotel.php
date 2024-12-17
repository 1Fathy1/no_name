<?php
 
    include("../autho/connectiondatabase.php");   
   
    
    
    if(isset($_POST['submit'])){
        $response = []; 
        $response['find?'] = isset($_POST['des']);
       
        $sql = "insert into hotel (name,address,phone,email,destination_id) 
                values            (:na ,    :ad,  :ph,  :em,:id);"    ;

        // First submit basic data . 
        try{
            $statment = $PDO->prepare($sql);
            $statment->bindParam(':na', $name);
            $statment->bindParam(':ad', $address);
            $statment->bindParam(':ph', $phone);
            $statment->bindParam(':em', $email);
            $statment->bindParam(':id', $destination_id);

            $name          = $_POST['name'];
            $address       = $_POST['address'];
            $phone         = $_POST['phone'];
            $email         = $_POST['hotel-email'];
            $destination_id= $_POST['des'] ;

            $statment->execute();

            if($statment){
                $response['status'] = "success" ; 
            }else{
                $response['status'] = "Field" ; 
                $response['message'] = "Find error in database pleas try again" ; 
            } 


        }catch(PDOException $e){
            $response['status'] = "Field" ; 
            $response['message'] = "can't save data for hotsle" ; 
            $response['SQL Error'] = $e ; 
        }

        // Second submit image path . 
        //                          //
        // Second submit image path . 

        // Finally Submit services 
        // $sql = "INSERT INTO services (service, description, hotel_id) VALUES  (:ser   , :desc      , :hotel);" ;
        // try{
        //     $statmet = $PDO->prepare($sql);
        //     $statment->bindParam(':ser', $ser);
        //     $statment->bindParam(':desc', $desc);
        //     $statment->bindParam(':hotel', $id);

        //     $ser          = $_GET['service'];
        //     $desc         = $_GET['description'];
        //     $id           = $_GET['hotelid'];

        //     $statment->execute();
        //     $response['status'] = "Done" ;

        // }catch(PDOException $e){
        //     $response['status'] = "Field" ; 
        //     $response['message'] = "Can;t save service in database" ; 
        //     $response['SQL Error'] = $e ; 
        // }

        echo json_encode($response);
    }

    if(isset($_GET['gethoteldata'])){
        $response = []; 
        $sql = "SELECT id , name FROM hotel " ;
        try{
           $stmt = $PDO->prepare($sql);
            $stmt->execute();
            $hotel = $stmt->fetchAll(PDO::FETCH_OBJ);

            $response['status'] = "success";
            $response['hotel'] = $hotel;

        }catch(PDOException $e){
            $response['status'] = "filed" ; 
            $response['message'] = "Can't fetch data from hotel"; 
            $response['SQL Error'] = $e;
        }

        echo(json_encode($response)) ; 
    }

    
?>