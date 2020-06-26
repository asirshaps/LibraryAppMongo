var username = document.getElementById("use");
var password = document.getElementById("pwd1"); 

function validate(){
     if(use.value.trim()==""|| pwd1.value.trim()==""){
       alert("fill the requirements");
        return false;
     }
     else{
         return true; 
         alert("correct validation");
     }
    
}