// function getCheckboxValue() {  

// var l1 = document.getElementById("checkbox1");  
// var l2 = document.getElementById("checkbox2");  
// var l3 = document.getElementById("checkbox3");  
// var l4 = document.getElementById("checkbox4");  
// var l5 = document.getElementById("checkbox5");  
// var l6 = document.getElementById("checkbox6");  
 
// var result=" ";   
// if (l1.checked == true){  
// var pl1 = document.getElementById("checkbox1").value;  
// result = pl1 + ",";   
// }   
// else if (l2.checked == true){  
// var pl2 = document.getElementById("checkbox2").value;  
// res = res + pl2 + ",";   
// }  
// else if (l3.checked == true){  
// document.write(res);  
// var pl3 = document.getElementById("checkbox3").value;  
// res = res + pl3 + ",";   
// }  
// else if (l4.checked == true){  
// var pl4 = document.getElementById("checkbox4").value;  
// res = res + pl4 + ",";   
// }  
// else if (l5.checked == true){  
// var pl5 = document.getElementById("checkbox5").value;  
// res = res + pl5 + ",";   
// }  
// else if (l6.checked == true){  
// var pl6 = document.getElementById("checkbox6").value;  
// res = res + pl6;   
// } else {  
//     alert("Niste izabrali nijedan događaj!") 
//   }
//   alert("Prijavili ste: " + res + " događaje.");
// }  


//return alert("Niste niste izabrali nijedan događaj!");  
//}  
//return alert("Prijavili ste: " + res + " događaje.");  
//}  

function getCheckboxValue() {
  var op1= document.getElementById("option1");
  var op2= document.getElementById("option2");
  var op3= document.getElementById("option3");
  var op4= document.getElementById("option4");
  var op5= document.getElementById("option5");
  var op6= document.getElementById("option6");

  var result= " ";
  if (op1.checked == true){
    var opcija1 = document.getElementById("option1").value;
    result= opcija1 + " ";
  }
  else if (op2.checked == true){
    var opcija2 = document.getElementById("option2").value;
    result= result + opcija2 + " ";
  }
  else if(op3.checked == true){
    var opcija3 = document.getElementById("option3").value;
    result= result + opcija3 + " ";
  }
  else if(op4.checked == true){
    var opcija4 = document.getElementById("option4").value;
    result= result + opcija4 + " ";
  }
  else if(op5.checked == true){
    var opcija5 = document.getElementById("option5").value;
    result= result + opcija5 + " ";
  }
  else if (op6.checked == true){
    document.write(result);
    var opcija6= document.getElementById("option3").value;
    result= result + opcija6 ;
  }

   else {
  return result= "Izaberite bar jedan!";
  }
  return result= "Izabrali ste: " + result;
}

let izbor = getCheckboxValue();

var ime = document.getElementById("ime");
var dugme = document.getElementById("dugmeSubmit");

dugme.addEventListener("click", function(e) {
    e.preventDefault();
    alert(ime.value + ", uspešno ste se prijavili. " + izbor +  ". Vidimo se!");
})

