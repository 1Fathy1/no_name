function setImages(obj) {
    /*
     image --> 
        1 - disply  ----> database : background     1
        2 - rooms   ----> database : (array) room   3
        3 - form    ----> database : (array) form   3
    */ 
    document.querySelector('.display').style.backgroundImage = `url(${obj[1]})` ; 
    var images =  document.querySelectorAll('img') ; 
    

    // console.log(images);
     var i = 1 ; 
     images.forEach(img => {
        
         img.src = obj[i] ;
         i++;
       }
     ) ; 
}

function setData(obj){
    // set hotal name . 
    document.querySelector('._hotel_name p').textContent = obj['name'] ; 
    document.querySelector('#hotel-name-in-par').textContent = obj['name'] ; 

    // set address 
    document.querySelector('#location').textContent = obj['address'] ;

    // set destination 
    document.querySelector('#destination').textContent = obj['destination_id'] ; 

    // set phone number 
    document.querySelector('#phone-number').textContent = obj['phone'] ; 

    // set email 
    document.querySelector('#email-hotel').textContent = obj['email'] ;  
    
    // console.log(obj['address']) ; 
    // console.log(obj['phone']) ; 
    // console.log(obj['email']) ; 
    // console.log(obj['destination_id']) ; 

}

function services(obj){

    obj.forEach( e => {
        console.log(e['service'] + "\n" + e['description']) ; 
    });
}

function upload() {

    // // make url paramters 
    const queryString = "hotelid=1&getdata=true";
  
    // make url 
    const url = "../servers/hotel.php?" + queryString ; 
  
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

            const hoteldata = data['hotel data']['data'] ;             // is object
            const hotelimages = data['hotel images']['images'] ;       // is array 
            const hotelservices = data['hotel services']['services'] ; // is array 

            // console.log(hoteldata);
            // console.log(hotelimages); //   ---> Done
            // console.log(hotelservices);
            
            setImages(hotelimages);

            setData(hoteldata) ;
            
            services(hotelservices);
     
        }else{
          
        }
    })
  
    prom.catch((reject) => {
      console.log(reject) ;
    }); 
  
};
upload(); 