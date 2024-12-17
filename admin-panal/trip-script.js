var frmTrip = document.querySelector('._frmTrip') ;

// API For Add User 
frmTrip.addEventListener('submit' , (e) => {
    e.preventDefault(); 
  
    // get form data . 
    const frmData = new FormData(frmTrip) ;
    frmData.append("submit", "true");
  
    // make url paramters 
    const queryString = new URLSearchParams(frmData) ;
    console.log(queryString);
  
    // make url 
    const url = "../admin/addtrip.php" ; 
  
    // make promise 
    const prom = new Promise(  (resolve , reject) => {
          // make xmlhttprequest  . 
          const xhr = new XMLHttpRequest() ; 
           
           // xhr url 
          xhr.open('POST' , url , true) ; 
  
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
  
  
          xhr.send(queryString);
          
    }) ;
  
    prom.then( (response) => {
        let data = JSON.parse(response) ; 
        console.log(data);
        if(data['status'] === "success"){
            window.location.reload() ;
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
(() => {

    const url = "../admin/addtrip.php?gettripdata=true" ; 
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
      console.log(data['trip'][0]['id']) ;
      console.log(data['trip'][0]['hotel']) ;
      if(data['status'] === "success"){
        console.log("Done");
        for(let i = 0 ; i < data['trip'].length ; i++){
             addRow(data['trip'][i]['id'], data['trip'][i]['hotel'], "trip") ;
        }
      }else{
        console.log(data['message']);  // error message.
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 
})();
