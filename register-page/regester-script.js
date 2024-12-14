var frm = document.querySelector(".signup-form") ;  
var ems = document.getElementById("ems") ;  

frm.addEventListener('submit' , (e) => {
  e.preventDefault(); 

  // get form data . 
  const frmData = new FormData(frm) ; 

  // make url paramters 
  const queryString = new URLSearchParams(frmData) + "&submit=true";
  console.log(queryString);

  // make url 
  const url = "../autho/register.php?" + queryString ; 

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

       // sent request
        xhr.send();
        
  }) ;

  prom.then( (response) => {
      let data = JSON.parse(response) ; 
    //   console.log(data);

      if(data['status'] === "successfully"){
        window.location = "../display-destination/Home.html" ; 

      }else{
        ems.innerHTML = data['message']['errorInfo'][2] ;
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 


}) ; 