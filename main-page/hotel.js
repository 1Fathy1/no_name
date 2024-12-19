// view the page of hotels information (more hotels)
function view(params) {
  var p = document.getElementById("para1");
  var section = document.getElementById("section7");
  if (section.style.display === "none") section.style.display = "block";
  else section.style.display = "none";
}

// submit the review
let currentp = 0;

function submit(params) {
  

 
  var inputText = document.getElementById("comments").value;
  const p = [
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3"),
    document.getElementById("p4"),
    document.getElementById("p5"),
  ]
  const div = [
    document.getElementById("divcom1"),
    document.getElementById("divcom2"),
    document.getElementById("divcom3"),
    document.getElementById("divcom4"),
    document.getElementById("divcom5"),
  ]


  if (inputText.trim() === '') {
    alert('من فضلك أدخل نصًا قبل الضغط على الزر.');
    return;
}
 if(currentp < p.length){
  p[currentp].textContent = inputText;
  div[currentp].style.visibility = "visible";
  document.getElementById("comments").value='';
  currentp++;
 }
 

}

  // p.innerText = txt.value;
  // div.style.visibility = "visible";
  // count++;
  

// else if(count == 2){
    
//      var p = document.getElementById("p2");
//      var txt = document.getElementById("comments");
//      var div = document.getElementById("divcom2");
//      p.innerText = txt.value;
//      div.style.visibility = "visible";
//      count++;
   
    
//    }
//   else  if(count == 3){
    
//      var p = document.getElementById("p3");
//      var txt = document.getElementById("comments");
//      var div = document.getElementById("divcom3");
//      p.innerText = txt.value;
//      div.style.visibility = "visible";
//      count++;
   
    
//    }
//    else if(count == 4){
    
//      var p = document.getElementById("p4");
//      var txt = document.getElementById("comments");
//      var div = document.getElementById("divcom4");
//      p.innerText = txt.value;
//      div.style.visibility = "visible";
//      count++;
   
    
//    }
//    else if(count == 5){
    
//      var p = document.getElementById("p5");
//      var txt = document.getElementById("comments");
//      var div = document.getElementById("divcom5");
//      p.innerText = txt.value;
//      div.style.visibility = "visible";
//      count = 1;
   
    
//    }
  
 
