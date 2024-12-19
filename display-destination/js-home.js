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

function addOption(text , id){
    var option = document.createElement('option') ; 
    option.text = text ;
    option.value = id ;
    document.querySelector('#room-type').appendChild(option) ;
}

function services(obj){
    // console.log(obj[0]['service']) ;
    // console.log(obj[0]['description']) ;
    var h3Service = document.querySelectorAll('h3');
    var pService = document.querySelectorAll('.service p');
    // console.log(pService) ; 
    let id = 0 ; 
    for(let i = 0 ; i < 4 ; i++){
        h3Service[i].textContent = obj[i]['service'] ;
        pService[i].textContent = obj[i]['description'] ;
        id++;
    }
    
    
}

function desName(obj){
    for(i in obj){
        addOption(obj[i]['location'] , obj[i]['id']) ; 
    }
}

(() => {

    let params = new URLSearchParams(window.location.search) ; 
    let id = params.get('id') ;
    var queryString = "" ; 
    if(!isNaN(id) && id.trim() !== ""){
         queryString = `hotelid=${id}&getdata=true`;
    }else{
        return;
    }
  
    // make url 
    const url = "hotel.php?" + queryString ; 
  
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
        // console.log(data['hotel services']['services'][0]['service']);
        // console.log(data['hotel services']['services'][0]['description']);

        if(data['status'] === "successful"){

            const hoteldata = data['hotel data']['data'] ;             // is object
            const hotelimages = data['hotel images']['images'] ;       // is array 
            const hotelservices = data['hotel services']['services'] ; // is array 
            const location = data['destination name']['des-name'] ;
            // console.log(location)
            // console.log(hoteldata);
            // console.log(hotelimages); //   ---> Done
            // console.log(hotelservices);
            
            setImages(hotelimages);

            setData(hoteldata) ;
            
            services(hotelservices);

            desName(location);
     
        }else{
          
        }
    })
  
    prom.catch((reject) => {
      console.log(reject) ;
    }); 
  
})();
