let h5=document.querySelector("h5");
let btn=document.querySelector("#Add");
let body=document.querySelector("body");
let check=0;
btn.addEventListener("click",function(){
    if(check==0){
    h5.innerHTML = "Friends";
    h5.style.color ="green";
    body.style.backgroundColor="green";
    
    btn.innerHTML="Remove Freind";
    check=1;
}
else{
    h5.innerHTML = "Stranger";
    h5.style.color ="red";
    body.style.backgroundColor="red";
        btn.innerHTML="Add Freind"
        check=0;

    }
});