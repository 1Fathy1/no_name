// const deal1 = {
//     title: "Patagonia Wilderness Trek", // name of destitnation
//     description: "7 days from $1,299", //  description
//     imageUrl: "https://storage.googleapis.com/a1aa/image/ZYJTDqdmPHaXPZe4EA1yRRwmrBJOfdGX0PRGhKDK2pIyHw5TA.jpg", // image url
//     link: "#" // destitnation url 
// };

(() => {

  // make url 
  const url = "main-server.php?getdata=true"  ; // url = "../" ;

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
      console.log(data) ;

      for(let i = 0 ; i < data['data'].length ; i++){
          const newDeal = {
            title: data['data'][i]['location'], // name of destitnation
            description:  data['data'][i]['description'], //  description
            imageUrl: "https://storage.googleapis.com/a1aa/image/ZYJTDqdmPHaXPZe4EA1yRRwmrBJOfdGX0PRGhKDK2pIyHw5TA.jpg", // image url
            link:  "../task2/display-destination.html?id="+data['data'][i]['id'] // destitnation url 
          }; createDeal(newDeal , 'Places');
      }

      if(data['login_status'] === 'true' ){
          var btnLog = document.querySelector("#log-status") ;
          btnLog.href = "../autho/logout.php" ;   
          btnLog.textContent = "Log out" ;
      }
  });

  prom.catch((reject) => {
    console.log(reject) ;
  }); 


})() ; 