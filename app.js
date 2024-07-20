let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#Reset-btn")
let newGamebtn = document.querySelector("#New-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turno = true //playerX , playerY

const winpatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6], 
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
]    

const resetgame = () =>{
    turno = true
    enableBoxes()
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("box was clicked")
        if(turno === true){
            box.innerText = "o"
            box.style.color = "white"
            turno = false
        }
        else{
            box.innerText = "x"
            box.style.color = "red"
            turno = true
        }
      box.disabled = true
      
      checkWinner()
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
       box.innerText = ""
    }
}

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations , Winner is ${Winner}`
    msgcontainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () =>{
    for(let pattern of winpatterns){
           let pos1val = boxes[pattern[0]].innerText
           let pos2val = boxes[pattern[1]].innerText
           let pos3val = boxes[pattern[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner" , pos1val)
                showWinner(pos1val)
            }
        }  
    }
}

newGamebtn.addEventListener("click" , resetgame)
resetbtn.addEventListener("click" , resetgame)