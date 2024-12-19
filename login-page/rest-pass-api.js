const frmPass = document.querySelector(".rest-pass");

frmPass.addEventListener("submit", (e) => {
        e.preventDefault();
        const frmData = new FormData(frmPass);
        frmData.append("submit" , "true");

        const queryString = new URLSearchParams(frmData);
        console.log(queryString.toString());

        const url = "../autho/sendemail.php" ; 

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
      if(data['SQLstatus'] === 'success'){
        window.location.href = '../register-page/con-emil.html';
      }
      
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 


});