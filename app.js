let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorepara=document.querySelector("#use-score");
const compScorepara=document.querySelector("#com-score");
const shoWinner=(userWin)=>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText="you win ! " ;
    msg.style.backgroundColor="green";
}else{ compScore++;
      compScorepara.innerText=compScore;
       msg.innerText="you lose!";
       msg.style.backgroundColor="red";
     }
}

const drawGame=(userchoice)=>{
    msg.innerText="match draw play again"
    msg.style.backgroundColor="#081b31";
}
const genComChoice=()=>{
  const option =["rock","paper","scissors"];
//math is a class in this we have random method it genrate values btw 0 to 1
//now we need to incres its rangr so multily by 3 so that it will print in the range of 0 to 2
//here we will use that random no. as an index
// to remove al decimal values in it we write math .floor
const randIdx=Math.floor(Math.random()*3);
return option[randIdx];
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //genrate computer choice-> modular way
    const compChoice = genComChoice();
    console.log("computer  choice=",compChoice);
    if(userchoice===compChoice){
        //dreaw 
        drawGame();
    }else{let userWin=true;
        if(userchoice==="rock"){
            //scisssor, paper
            userWin=compChoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
           userWin =compChoice==="rock"?false:true;
        }
        shoWinner(userWin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id")
        console.log("choices was click",userchoice);
        playgame(userchoice);
   })
})