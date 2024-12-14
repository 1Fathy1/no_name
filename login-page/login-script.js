var frm = document.querySelector(".frm") ;  
var ems = document.getElementById("par") ;  

frm.addEventListener('submit' , (e) => {
  e.preventDefault(); 

  // get form data . 
  const frmData = new FormData(frm) ; 

  // make url paramters 
  const queryString = new URLSearchParams(frmData) + "&submit=true";

  // make url 
  const url = "../autho/login.php?" + queryString ; 

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
      if(data['status'] === "successful"){
        window.location = "../display-destination/Home.html" ; 
      }else{
        ems.innerHTML = data['status'] ;
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 


}) ; 