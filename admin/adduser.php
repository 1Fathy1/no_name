<?PHP 
 
    include("../autho/connectiondatabase.php");  
    $response = [] ;  
     
   if(isset($_GET['submit'])) {
        $sql = "INSERT INTO users(username, email, hash_password) VALUES (:name , :email , :password)" ; 
        try{
            $stmt = $PDO->prepare($sql);
            $stmt->bindParam(':name', $username);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);

            $username = $_GET['username'];
            $email = $_GET['email'];
            $password = $_GET['password'];

            $stmt->execute();
            $response['status'] = "success";
            $response['message'] = "User has been registered successfully";

        }catch(PDOException $e){
            $response['status'] = "error";
            $response['message'] = $e->getMessage();
        }
        echo(json_encode($response));
    }


   
   
    if(isset($_GET['getuserdata'])){

        try{
            $sql = "SELECT id , username FROM users" ; 
            $stmt = $PDO->prepare($sql);
        
            $stmt->execute();
            $user = $stmt->fetchAll(PDO::FETCH_OBJ);
            $response['status'] = "success";
            $response['data'] = $user;


        }catch(PDOException $e){
            $response['status'] = "error";
            $response['message'] = $e->getMessage();
        }

        echo(json_encode($response));
 
   }




?>