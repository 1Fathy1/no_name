(() => {
    // get id from url 
    let params = new URLSearchParams(window.location.search) ; 
    let id = params.get('id') ;

    // make url 
    const url = "dis-server.php?getdata=true&id="+id  ; // url = "../" ;
  
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

        if(data['dataStatus'] === 'success' && data['imageStatus'] === 'success' ){
            let distinationName = data['data'][0]['location'] ; 
            let images = data['images'] ;  

            document.getElementById('_des-id').textContent = distinationName ;   // set distination name to page title
            let _imgs = document.getElementsByClassName('_images');

            const cssText = 
              ` --img1: url("${images[0]['image_path']}") ; 
                --img2: url("${images[1]['image_path']}") ; 
                --img3: url("${images[2]['image_path']}") ; 
                --img4: url("${images[3]['image_path']}") ; 
                --img5: url("${images[4]['image_path']}") ; ` ;  

            styleSheet['cssRules'][2]['style']['cssText'] = cssText ; 
             console.log(styleSheet['cssRules'][2]['style']['cssText']);
            
            for(let i = 0 ; i < _imgs.length ; i++){
                _imgs[i].src = images[i]['image_path'];
            }

        }else{
            console.log("Error in fetch data");
        }
        
      
    })
  
    prom.catch((reject) => {
      console.log(reject) ;
    }); 
  
  })() ; 

  const styleSheet = document.styleSheets[0];



  







  const keyframes = `
        @keyframes customAnimation {
          0% { background-color: red; transform: rotate(0deg); }
          50% { background-color: green; transform: rotate(180deg); }
          100% { background-color: red; transform: rotate(360deg); }
        }
      `;
      // أضف القاعدة إلى ورقة الأنماط
// console.log(styleSheet.insertRule(keyframes, styleSheet.cssRules.length));