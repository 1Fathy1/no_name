<?php
     // set Header 
     header('Content-Type: application/json'); 

     header('Cache-Control: no-cache, must-revalidate');
 
     header('Authorization: Bearer token=fathymoamenfathyali');
 
     header('User-Agent: MyCustomClient/1.0');
 
     // Connection to  data base 
     $statusConectionDataBase = [] ; 
     try{

        // Server=db11184.public.databaseasp.net; Database=db11184; Uid=db11184; Pwd=Ks3@?Aj8z!7C; SslMode=Preferred;
         $dsn = "mysql:host=db11184.public.databaseasp.net;dbname=db11184" ; 
         $name = 'db11184' ; 
         $pass = 'Ks3@?Aj8z!7C' ; 
     
         $PDO = new PDO($dsn , $name , $pass ) ;
         $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //  $statusConectionDataBase['Success Connect'] = "Connection is Done" ; 

     }catch(PDOException $e){
         $statusConectionDataBase['Error Connect'] = $e ; 
         echo(json_encode($statusConectionDataBase)) ; 
         die();
     } 


?>