const block = document.querySelector(".block");

let leftPosition = 0;
let topPosition = 0;

const move = () => {
  if (leftPosition <= 460 && topPosition == 0) {
    leftPosition += 16;
    block.style.left = `${leftPosition}px`;
    setTimeout(move, 100);
  } else if (leftPosition >= 460 && topPosition <= 460) {
    topPosition += 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 100);
  } else if (leftPosition > 0 && topPosition >= 460) {
    leftPosition -= 16;
    block.style.left = `${leftPosition}px`;
    setTimeout(move, 100);
  } else if (leftPosition == 0 && topPosition >= 0) {
    topPosition -= 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 100);
  }
};
move();

let count = 0;

setInterval(() => {
  count += 1;
  console.log(count + " Seconds");
}, 1000);
