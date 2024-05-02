var timer = 60;
var score = 0;
var ran; 
function getNewHit(){
    ran = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = ran;
}
function makeBubble() {
  var clutter =  " ";
  for (var i = 1; i <= 100; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }
  document.querySelector("#buttom-panel").innerHTML = clutter;
}

function runTime() {
  var timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
        clearInterval(timerinterval);
        document.querySelector("#buttom-panel").innerHTML =`<h1> Game Over </h1>`;
    }
  }, 1000);
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent  = score;

}
document.querySelector("#buttom-panel").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === ran){
        increaseScore();
        makeBubble();
        getNewHit();
    }

    
});
runTime();
makeBubble();
getNewHit();
increaseScore();
