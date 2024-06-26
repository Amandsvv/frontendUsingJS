let total = 0;
const space = document.querySelector(".rand-num"); // Assuming 'rand-num' is a class

function rollDice() {

  while (space.firstChild) {
    space.removeChild(space.firstChild);
  }

  let vid = document.createElement("video");
  vid.controls = false;
  vid.autoplay = true;
  vid.height = 150;
  vid.width= 150;

  let randomValue = Math.random();
  let diceRoll;
  if (randomValue >= 0 && randomValue < 1 / 6) {
    diceRoll = 1;
  } else if (randomValue >= 1 / 6 && randomValue < 2 / 6) {
    diceRoll = 2;
  } else if (randomValue >= 2 / 6 && randomValue < 3 / 6) {
    diceRoll = 3;
  } else if (randomValue >= 3 / 6 && randomValue < 4 / 6) {
    diceRoll = 4;
  } else if (randomValue >= 4 / 6 && randomValue < 5 / 6) {
    diceRoll = 5;
  } else if (randomValue >= 5 / 6 && randomValue <= 1) {
    diceRoll = 6;
  }
  
  switch (diceRoll) {
    case 1:
      vid.src = "mp4/1.mp4";
      break;
    case 2:
      vid.src = "mp4/2.mp4";
      break;
    case 3:
      vid.src = "mp4/3.mp4";
      break;
    case 4:
      vid.src = "mp4/4.mp4";
      break;
    case 5:
      vid.src = "mp4/5.mp4";
      break;
    case 6:
      vid.src = "mp4/6.mp4";
      break;
  }
  
  space.appendChild(vid);
  

  vid.addEventListener('ended', function() {
    if (diceRoll != 6) {
      total += diceRoll;
      if (total == 20) {
        setTimeout(()=>{
          document.querySelector(".result").innerHTML = "You Win";
        },1000);
      } else if (total > 20) {
        total -= diceRoll;
      }
    } else {
      setTimeout(()=>{
        document.querySelector(".result").innerHTML = "Please Restart";
      },1000);
      total = 0;
    }
    document.querySelector(".result").innerHTML = `Result: ${total}`;
  });

  document.querySelector(".result").innerHTML = `Result: ${total}`;
}
