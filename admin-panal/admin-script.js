var frmUser = document.querySelector('._frmUser') ;

// API For Add User 
frmUser.addEventListener('submit' , (e) => {
    e.preventDefault(); 
  
    // get form data . 
    const frmData = new FormData(frmUser) ; 
  
    // make url paramters 
    const queryString = new URLSearchParams(frmData) + "&submit=true";
    console.log(queryString);
  
    // make url 
    const url = "../admin/adduser.php?" + queryString ; 
  
    // make promise 
    const prom = new Promise(  (resolve , reject) => {
          // make xmlhttprequest  . 
          const xhr = new XMLHttpRequest() ; 
           
           // xhr url 
          xhr.open('GET' , url , true) ; 
  
          // xhr onload 
          xhr.onload =  () => {
              if(xhr.readyState === 4 && xhr.status === 200){
                  resolve(xhr.responseText) ; 
              }else{
                  reject("Error") ; 
              }
          } ; 
  
          xhr.onerror = () => {
              reject("Error in Network") ; 
          };
  
  
          xhr.send();
          
    }) ;
  
    prom.then( (response) => {
        let data = JSON.parse(response) ; 
        if(data['status'] === "success"){
            window.location.reload(); 
        }else{
          // Duplicate entry
          console.log(data['message']);  // error message.
        }
    })
  
    prom.catch((reject) => {
      console.log(reject) ;
    }); 
}) ;


// API For Get All Users
