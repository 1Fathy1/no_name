<?PHP
    include("../autho/connectiondatabase.php");  
    $response = [] ; 
    $response['login_status'] = "false" ;


    if(isset($_GET['getdata'])){
        $sql = "select id , location , description  from destination " ; 
        try{
            $stmt = $PDO->prepare($sql);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_OBJ);

            $response['status'] = "success";
            $response['data'] = $data;
            if(isset($_SESSION['email']) ){
                $response['login_status'] = "true";
                $response['session'] = array(
                    'name' => $_SESSION['name'] ,
                    'email' => $_SESSION['email']
                );
            }
        
        }catch(PDOException $e){
            $response['status'] = "error";
            $response['message'] = $e->getMessage();
        }

        
    }


  echo json_encode($response);
?>