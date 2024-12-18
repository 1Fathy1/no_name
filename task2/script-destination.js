var btn = document.querySelector('.header') ; 
var btnReg = document.querySelector('.reg');
var text = document.querySelector('.par');
var divText = document.querySelector('.info');

var fl = false; 

btn.addEventListener("click" , function() {
   if(!fl){
      divText.style.height = '150px';
      // display: inline-block;
      // opacity: 1;
      text.style.opacity = 1 ; 
      btnReg.style.transform = 'rotate(90deg)'; 


      fl = true ; 
   }else{
      divText.style.height = '60px';
      text.style.opacity = 0;
      btnReg.style.transform = 'rotate(0deg)'; 

      fl = false;
   }

}) ; 
var btnv = document.querySelector('.vt') ; 
var btnReg2 = document.querySelector('.reg2');
var divt = document.querySelector('#virtualtour');
var fl2 = false;
btnv.addEventListener("click" , function() {
   if(!fl2){
      divt.style.height = '500px';
      // display: inline-block;
      // opacity: 1;
      divt.style.opacity = 1 ; 
      btnReg2.style.transform = 'rotate(90deg)'; 


      fl2 = true ; 
   }else{
      divt.style.height = '10px';
      divt.style.opacity = 0;
      btnReg2.style.transform = 'rotate(0deg)'; 

      fl2 = false;
   }

}) ; 
