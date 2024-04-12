let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rs");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;    // first turn: O
let count = 0;       // to track draw game

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {       // to reset game
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        
        if(turnO){     // player O's turn
            box.innerHTML = "O";
            turnO = false;        //  switch to player X's turn
        } else{       //  player X's turn
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;   // make the box disable for clicking after once clicked
        count++;


        let isWinner = checkWinner();      // check whether there is a winner or not
        
        if(count === 9 && !isWinner){   // draw game
            gameDraw();
        }
    });
});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                winnerFound = true; // Update the flag
                return; // Exit the function once a winner is found
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
