let boxOne = document.querySelector(".boxOne");
let boxTwo = document.querySelector(".boxTwo");

function move() {
  let marginLeft = 0;
  for (let i = 0; i < 10; i++) {
    marginLeft += i * 10;
    boxTwo.style.marginLeft = marginLeft + "px";
  }
}

move();
