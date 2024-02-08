let boxlength = document.querySelectorAll(".btn").length;
let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let para = document.querySelector(".demo");
let winner = document.querySelector(".Winner");
let main = document.querySelector(".game");

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let btn = document.querySelectorAll(".btn");
let turn0 = true;

for (let i = 0; i < boxlength; i++) {
  let box = btn[i];

  box.addEventListener("click", function () {
    if (turn0) {
      box.innerHTML = "X";
      turn0 = false;
    } else {
      box.innerHTML = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
}

function checkWinner() {
  for (let value of arr) {
    let ele1 = boxes[value[0]];
    let ele2 = boxes[value[1]];
    let ele3 = boxes[value[2]];

    let pos1 = boxes[value[0]].innerHTML;
    let pos2 = boxes[value[1]].innerHTML;
    let pos3 = boxes[value[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner " + pos1);
        for (const boxvalue of boxes) {
          boxvalue.disabled = true;
          para.innerHTML = `Congratulation, Player with The selection of "${pos1}" Is a Winner🎉🎊`;

          ele1.style.backgroundColor = "rgb(64, 224, 62)";
          ele2.style.backgroundColor = "rgb(64, 224, 62)";
          ele3.style.backgroundColor = "rgb(64, 224, 62)";

          main.style.filter = "blur(2px)";

          setInterval(() => {
            winner.style.transition = "2s";
            winner.style.display = "block";
          }, 1000);
        }
      }
    }
  }
}
