var frm = document.querySelector("._frmbooking") ;  
// console.log(frm);

try{
  frm.addEventListener('submit' , (e) => {
    e.preventDefault(); 
  
    // get form data . 
    const frmData = new FormData(frm) ; 
    frmData.append("submit" , "true") ; 
    frmData.append("user_id" , "1") ; 
    frmData.append("hotel_id" , "1") ; 
  
    // make url paramters 
    const queryString = new URLSearchParams(frmData);
    console.log(queryString.toString());  // for debug purpose  // remove this line  //
  
    // make url 
    const url = "booking.php"; 
  
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
        console.log(data);
        
    })
  
    prom.catch((reject) => {
      console.log(reject) ;
    }); 
  
  
  }) ; 
}catch(e){
  console.error(e);  // error handling  here.  for example, you can log it to a server or to a file.  this will help in debugging.  It's a good practice to handle errors in this way.  In a real-world application, you might want to display a friendly error message to the user.  In this example, we just log the error to the console.  You can replace console.log with a more robust error handling mechanism like logging to a server or sending an email to the administrator.  The important thing is that you handle errors gracefully and do not crash your application.  For example, you can display a friendly error message to the user and try to recover gracefully.  If you can't recover, you can display a message to the user that they've encountered a problem and that they should try again later.  This is a good practice to avoid user data loss and to provide a better user experience.
}
