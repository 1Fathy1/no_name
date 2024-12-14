var btn = document.querySelector('.header') ; 
var btnReg = document.querySelector('.reg')
var text = document.querySelector('.par');
var divText = document.querySelector('.info');

var fl = false ; 

btn.addEventListener("click" , function() {
   if(!fl){
      divText.style.height = '150px';
      // display: inline-block;
      // opacity: 1;

      text.style.opacity = 1 ; 
      btnReg.style.transform = 'rotate(90deg)' ; 


      fl = true ; 
   }else{
      divText.style.height = '60px';
      text.style.opacity = 0 ;
      btnReg.style.transform = 'rotate(0deg)' ; 

      fl = false;
   }

}) ; 