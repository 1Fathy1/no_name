var frmHotel = document.querySelector('._frmHotel') ;
// console.log(frmHotel);

// API For Add Hotels 
frmHotel.addEventListener('submit' , (e) => {
    e.preventDefault(); 
  
    // get form data . 
    const frmData = new FormData(frmHotel) ; 
  
    // make url paramters 
    frmData.append("submit", "true");
    const queryString = new URLSearchParams(frmData) ;
  
    // make url 
    const url = "../admin/addhotel.php" ; 
  
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


// API For Get All Hotel
(() => {

    const url = "../admin/addhotel.php?gethoteldata=true" ; 
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
    //   console.log(data['hotel'][0]) ;
      if(data['status'] === "success"){
         for(let i = 0 ; i < data['hotel'].length ; i++){
             addRow(data['hotel'][i]['id'], data['hotel'][i]['name'], "hotel") ;
         }
      }else{
        console.log(data['message']);  // error message.
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 
})();