<?php

    include("../autho/connectiondatabase.php");
        
    $response = [] ; 
    $response['status'] = "no request" ;

    if(isset($_GET['getdata'])){
           $response['status'] = "successful" ;
           
          
           $hotel_id = $_GET['hotelid'] ?? "1"; 
           // i must return [hotel data, image path, srvices]


            // Get Hotel Data . 
           try{ 
                $sql = "SELECT * FROM hotel WHERE id = :id";

                $statment = $PDO->prepare($sql);

                $statment->bindParam(':id', $hotel_id );

                $statment->execute();

                $result = $statment->fetch(PDO::FETCH_OBJ);

                $response['hotel data'] =[
                    "message" => "Fetch hotel data successfully" , 
                    "data" => $result
                ] ; 


            }catch(PDOException $e){
                
                $response['status'] = "filed" ; 
                $response['message'] = "Can't fetch hotel data"; 
                $response['SQL Error'] = $e; 
              
            }

            // Get Image Path . 
            try{

                $sql = "SELECT * FROM image WHERE hotel_id = :id";

                $statment = $PDO->prepare($sql);

                $statment->bindParam(':id', $hotel_id );

                $statment->execute();

                $result = $statment->fetchAll(PDO::FETCH_OBJ);

                $response['hotel images'] =[

                    "message" => "Fetch hotel image successfully" , 
                    
                    "images" => array_map(
                    
                        function($e) {
                            return $e-> image_path ;
                        } , $result
                    
                    )
                
                ] ;  
                
                // echo json_encode($response) ; 

            }catch(PDOException $e){

                $response['status'] = "filed" ; 
                $response['message'] = "Can't fetch images for hotel"; 
                $response['SQL Error'] = $e; 

            }
            
            // Get Hotel Services . 
            try{

                $sql = "SELECT * FROM services WHERE hotel_id = :id";

                $statment = $PDO->prepare($sql);

                $statment->bindParam(':id', $hotel_id );

                $statment->execute();

                $result = $statment->fetchAll(PDO::FETCH_OBJ);

                $response['hotel services'] =[

                    "message" => "Fetch hotel image successfully" , 
                    
                    "services" => $result
                
                ] ;  
                
                // echo json_encode($response) ; 

            }catch(PDOException $e){

                $response['status'] = "filed" ; 
                $response['message'] = "Can't fetch images for hotel"; 
                $response['SQL Error'] = $e; 
            }
            

    
    }

    echo json_encode($response);
?>