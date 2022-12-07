let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart")
let msgRef = document.getElementById("message")
//Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
]
//Player "X" plays first
let xTurn = true;
let count = 0;

//display X/0 on click
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn = false;
            //display X
            element.innerText = "X";
            element.disabled = true;
        }else{
            xTurn = true;
            //Display Y
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if(count === 9){
            drawFunction();
        }
        winChecker()
    });
});


//Disabele all Button
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide")
}

//Enable all button (For New Game and Restart)
const enableButtons = () =>{
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    })
    popupRef.classList.add("hide")
}
//this function is executed when a player wins
const winFunction = (letter) =>{
    disableButtons();
    if(letter == "X"){
        msgRef.innerHTML = "&#x1F389; <br> 'X' foi o Vencedor"
    }else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' foi o Vencedor"
    }
}
//Function for draw
const drawFunction = () =>{
    disableButtons()
    msgRef.innerHTML = "&#x1F60E; <br> Empatou"
}
//New Game
newgameBtn.addEventListener("click", () =>{
    count = 0;
    enableButtons()
});
restartBtn.addEventListener("click", () =>{
   count = 0;
   enableButtons()
})
//Win logic
const winChecker = () =>{
    //Loop through all win patterns
    for(let i of winningPattern){
        let[element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,  ];
//check if element are filled
//If 3 emplty element are same and would give win as wold
    if(element1 != "" && (element2 != "") &(element3 != "")){
        if(element1 == element2 && element2 == element3){
            //if all 3 button same values then pass the value to winFunction
            winFunction(element1)
            }

        }
    }
}

window.onload = enableButtons;
