(() => {
    const url = "../admin/adduser.php?getuserdata=true" ; 
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
      if(data['status'] === "success"){

        for(let i = 0 ; i < data['data'].length ; i++){
            addRow(data['data'][i]['id'], data['data'][i]['username'], "user") ;  
        }

      }else{
        console.log(data['message']);  // error message.
      }
  })

  prom.catch((reject) => {
    console.log(reject) ;
  }); 
})();

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none'); // إخفاء جميع الأقسام
    document.getElementById(sectionId).style.display = 'block'; // إظهار القسم المطلوب
}    


document.addEventListener('DOMContentLoaded', () => {
  showSection('user');
});

function addRow(id, name, selector) {
  var userDiv = document.getElementById(selector);
  
  var table = userDiv.querySelector("table");
  
  var row = document.createElement("tr");
  row.id = id;

  var cell1 = document.createElement("th");
  cell1.textContent = id;

  var cell2 = document.createElement("th");
  cell2.textContent = name;

  var cell3 = document.createElement("th");
  var button = document.createElement("button");

  button.textContent = "Delete";
  // button.setAttribute("onclick", `${del(id , selector)}`);
  cell3.appendChild(button);

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);

  table.appendChild(row);
}

// function del(id , table) {

//   const url = "../admin/add"+ table +".php?deleted=true" ; 
//   const prom = new Promise(  (resolve , reject) => {
//       // make xmlhttprequest  . 
//       const xhr = new XMLHttpRequest() ; 
//       const query = new URLSearchParams("userid=" + id) ;
       
//        // xhr url 
//       xhr.open('POST' , url , true) ; 

//       // xhr onload 
//       xhr.onload =  () => {
//           if(xhr.readyState === 4 && xhr.status === 200){
//               resolve(xhr.responseText) ; 
//           }else{
//               reject("Error") ; 
//           }
//       } ; 

//       xhr.onerror = () => {
//           reject("Error in Network") ; 
//       };
//       xhr.send(query);
//   });

//   prom.then( (response) => {

//     let data = JSON.parse(response) ; 
//     if(data['status'] === "success"){
//        window.location.reload() ;
//     }else{
//       console.log(data['message']);  
//     }
//   })

//   prom.catch((reject) => {
//     console.log(reject) ;
//   }); 

// }
              