
let timer = 60;
let hitrn = 0;
let score = 0;

function makeBubble(){
 let char = " ";
 for (let i = 1; i <= 230; i++) {
     rn = Math.floor(Math.random() * 10);
     char += `<div class="bubble">${rn}</div>`;
 }
document.querySelector(".panel-bottom").innerHTML = char;
}

function runTimer() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector(".panel-bottom").innerHTML = `<h1>EndGame</h1>`;
        }
    }, 1000);
}

function getNewHit(){
     hitrn=Math.floor(Math.random() * 10);
    document.querySelector("#HitVal").textContent=hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector(".panel-bottom").addEventListener("click",function(a){
    let clickednum=(Number(a.target.textContent));
    if (clickednum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

runTimer();
getNewHit();
makeBubble();

