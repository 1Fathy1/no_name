var frm = document.querySelector(".signup-form") ;  
var ems = document.getElementById("ems") ;  

frm.addEventListener('submit' , (e) => {
  e.preventDefault(); 

  // get form data . 
  const frmData = new FormData(frm) ; 
  frmData.append("submit" , "true") ; 

  // make url paramters 
  const queryString = new URLSearchParams(frmData);

  // make url 
  const url = "../autho/sendemail.php"; 

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

       // sent request
        xhr.send(queryString);
        
  }) ;

  prom.then( (response) => {
      let data = JSON.parse(response) ; 
      if(data['SQLstatus'] === "success"){
        window.location.href = "con-emil.html?token=" + data['SQLtoken'] ;
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 


}) ; 