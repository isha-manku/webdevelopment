let boxes = document.querySelectorAll(".box");
let resetgamebtn = document.querySelector("#resetgamebtn");
let newgamebtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else{
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
};
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for(let pattern of winpatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log("winner", p1 );
                showWinner(p1);
            } 
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetgamebtn.addEventListener("click",resetgame);
