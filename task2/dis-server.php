<?PHP
    include("../autho/connectiondatabase.php");  
    $response = [] ;  

    if(isset($_GET['getdata'])){
        // select destination data.
        $sql = "select location from destination where id = :id " ; 
        try{
            $stmt = $PDO->prepare($sql);
            $stmt->bindParam(":id",$id); 
            $id = $_GET['id'] ; 
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_OBJ);


            $response['dataStatus'] = "success";
            $response['data'] = $data;
        
        }catch(PDOException $e){
            $response['imageStatus'] = "error can't fetch destination data";
            $response['imageMessage'] = $e->getMessage();
        }

        // select destination image.
        $sql = "select image_path from image where des_id = :id and type = 'destination' " ; 
        try{
            $stmt = $PDO->prepare($sql);
            $stmt->bindParam(":id",$id); 
            $id = $_GET['id'] ; 
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_OBJ);

            $response['imageStatus'] = "success";
            $response['images'] = $data;
        
        }catch(PDOException $e){
            $response['imageStatus'] = "error can't fetch destination image";
            $response['imageMessage'] = $e->getMessage();
        }


    }


  echo json_encode($response);
?>