var frmDestination = document.querySelector('._frmDestination') ;

// API For Add User 
frmDestination.addEventListener('submit' , (e) => {
    e.preventDefault(); 
  
    // get form data . 
    const frmData = new FormData(frmDestination) ;
    frmData.append("submit", "true");
  
    // make url paramters 
    const queryString = new URLSearchParams(frmData) ;
    console.log(queryString);
  
    // make url 
    const url = "../admin/adddestination.php" ; 
  
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
    })
  
    prom.catch((reject) => {
      console.log(reject) ;
    }); 
}) ;


// API For Get All Users
(() => {

    const url = "../admin/adddestination.php?getdestinationdata=true" ; 
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
      console.log(data['data'][0]) ;
    //   console.log(data['trip'][0]['hotel']) ;
      if(data['status'] === "success"){
        console.log("Done");
        for(let i = 0 ; i < data['data'].length ; i++){
             addRow(data['data'][i]['id'], data['data'][i]['location'], "destination") ;
        }
      }else{
        console.log(data['message']);  // error message.
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 
})();
