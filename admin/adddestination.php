<?PHP 

include("../autho/connectiondatabase.php");   
$response = [] ;

    if(isset($_POST['submit'])){
        $sql = "INSERT INTO destination(location, description, opening_hourd) VALUES (:location, :description, :opening_hourd)" ; 
        try{
            $stmt = $PDO->prepare($sql);
            $stmt->bindParam(':location', $location);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':opening_hourd', $opening_hourd);
            
            $location = $_POST['location'];
            $description = $_POST['description'];
            $opening_hourd = $_POST['opening_hour'];

            $stmt->execute(); 
            $response['status'] = "success";
            $response['message'] = "New record created successfully";
    
        }catch(PDOException $e){
            $response['status'] = "error";
            $response['message'] = $e->getMessage();
        }
    }

    if(isset($_GET['getdestinationdata'])){
        $sql = "select * From destination" ; 
        try{
            $stmt = $PDO->prepare($sql);
            $stmt->execute(); 
            $destination = $stmt->fetchAll(PDO::FETCH_OBJ);
            
            $response['data'] = $destination ; 
            $response['status'] = "success";
            $response['message'] = "Fetch All Data Successfully";
    
        }catch(PDOException $e){
            $response['status'] = "error";
            $response['message'] = $e->getMessage();
        }
    }
echo json_encode($response);

?>