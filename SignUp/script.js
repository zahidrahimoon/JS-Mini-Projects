let SignIn=document.getElementById("SignIn");
let SignUp=document.getElementById("SignUp");
let title=document.getElementById("title");
let nameFeild=document.getElementById("nameFeild");

SignIn.onclick=function(){
    nameFeild.style.maxHeight="0";
    title.innerHTML='Sign In';
    SignUp.classList.add("disable");
    SignIn.classList.remove("disable");
}

SignUp.onclick=function(){
    nameFeild.style.maxHeight="60px";
    title.innerHTML='Sign Up';
    SignUp.classList.remove("disable");
    SignIn.classList.add("disable");
}


var icon=document.getElementById("icon");

icon.onclick=function(){
document.body.classList.toggle("dark-theme");

if(document.body.classList.contains("dark-theme")){
  icon.src="images/moon.png";
}
else{
  icon.src="images/sun.png";
} 
}