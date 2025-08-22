console.log("WelCome to TicTacToe")

isGameOver=false

let turn = "X";
const changeTurn =()=>{
    return turn === "X"?"O":"X"
}

const checkWin =()=>{
    let text = document.getElementsByClassName("boxText");
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e=>{
        if ((text[e[0]].innerText === text[e[1]].innerText)
            &&(text[e[2]].innerText === text[e[1]].innerText)&&(text[e[0]].innerText !== "")){
            document.querySelector(".getTurn").innerText=text[e[0]].innerText + " WON 🎉"
            isGameOver=true
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("getTurn")[0].innerText="Turn for " + turn;
            }  
        }
    })
})

btn.addEventListener('click',()=>{
    let boxTexts= document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText='';
    })
    turn='X';
    isGameOver=false;
    document.getElementsByClassName("getTurn")[0].innerText="Turn for "+ turn
})

