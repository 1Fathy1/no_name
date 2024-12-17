<?PHP 

    include("../autho/connectiondatabase.php");
    $response = [] ; 
    if(isset($_POST['deleted'])){
        $id = $_POST['id'];
        $sql = "DELETE FROM hotel WHERE id = :id";
        try{

            $stmt = $PDO->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();

            $response['status'] = "success";
            $response['message'] = "Deleted Successfully";

        }catch(PDOException $e){
            $response['status'] = "error";
            $response['message'] = $e->getMessage();
        }
        echo json_encode($response);
 
    }

   