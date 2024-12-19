<?PHP 

    include("../autho/connectiondatabase.php");  
    $response = [] ;  
    if(isset($_POST['submit']) ){
      $sql = "INSERT INTO trip(destination_id, number_memer, hotel, date, duration, price) VALUES (:des_id , :num , :hotel , :date , :duration  , :price);" ; 
      try{
            $stms = $PDO->prepare($sql);
            $stms->bindParam(':des_id', $des_id);
            $stms->bindParam(':num', $num);
            $stms->bindParam(':hotel', $hotel);
            $stms->bindParam(':date', $date);
            $stms->bindParam(':duration', $duration);
            $stms->bindParam(':price', $price);

            $des_id = $_POST['destination_id'];
            $num = $_POST['number_memer'];
            $hotel = $_POST['hotel'];
            $date = $_POST['date'];
            $duration = $_POST['duration'];
            $price = $_POST['price'];

            $stms->execute();
            $response['status'] = "success";
            $response['message'] = "New trip has been added successfully";
   
      }catch(PDOException $e){
        $response['status'] = "error";
        $response['message'] = $e->getMessage(); 
      }
    }

    if(isset($_GET['gettripdata'])){
        $sql = "select id , hotel  from trip ; " ; 
       try{

        $stmt = $PDO->prepare($sql);
        $stmt->execute();
        $trip = $stmt->fetchAll(PDO::FETCH_OBJ);
        $response['status'] = "success";
        $response['trip'] = $trip;
        
       }catch(PDOException $e){
         $response['status'] = "error";
         $response['message'] = $e->getMessage();
       }
    }


      echo json_encode($response);

 
?>