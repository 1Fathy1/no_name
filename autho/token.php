<?PHP

  $response = [] ; 
  
  if(isset($_GET['submit'])){
        $token = "u1882jjd02k30ckj9" ; 
        $code = "1234" ;
        
        $userid = $_GET['userid'] ?? "" ; 
        $useremail = $_GET['email'] ?? "" ; 
        
        try{
            $query = " INSERT INTO Temp 
                    VALUES (:token , :id , :email) ; " ; 

            $stmt = $conn -> peraper($query) ; 
            $stmt = $conn -> bindParam(":token" , $token) ;
            $stmt = $conn -> bindParam(":id" , $id) ;
            $stmt = $conn -> bindParam(":email" , $email) ;

            $stmt-> execute();
            $response['status'] = "Done" ; 
            $response['message'] = "save token and code in data base"  ; 

        }catch(PDOExecption $e) {
            $response['status'] = "Field" ; 
            $response['message'] = "$e"  ; 


        }
    }

    echo 1 ;

?>