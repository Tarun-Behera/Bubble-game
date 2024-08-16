//# bubble creation
let makeBubble = (totalBubbles) => {
  let bubbles = "";
  for (i = 1; i <= totalBubbles; i++) {
    bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector(".gm-pannel").innerHTML = bubbles;
};
makeBubble(112);

//# run the timer
let startTimer = (timer) => {
  var time = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector(".gm-pannel").innerHTML = `<h1>Game Over</h1> <button> Reload </button>`;
    }
  }, 1000);
};

//# each time the page is refreshed the the hit gets a new value
let getNewHit = () => {
  let hitValue = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitValue;
};

//# increase the core by 10
var score = 0;
let increaseScore = () => {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
};

//# bubble clickleable and match with the hit value
document.querySelectorAll(".bubble").forEach((bubble) => {
  bubble.addEventListener("click", () => {
    startTimer(document.querySelector("#timerVal").textContent);
    if (bubble.textContent == document.querySelector("#hitVal").textContent) {
      console.log(`${bubble.textContent} got hit`);
      increaseScore();
      getNewHit()
    } else {
      console.log("wrong hit");
    }
  });
});

getNewHit();
