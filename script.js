console.log("This is a rock,paper and scissors game");
console.log("Play five rounds to see who the winner is , YOU or the AI hehe");

function playround(humaninput,aiip){
    if(humaninput==aiip){
        return "Tie";
    }
    else if((humaninput=="ROCK"&&aiip=="SCISSORS")||(humaninput=="PAPER"&&aiip=="ROCK")||(humaninput=="SCISSORS"&&aiip=="PAPER")){
        return "h";
    }
    else{
        return "a";
    }
}
function playgame(){
    let hscore=0;
    let aiscore=0;
    let tier=0;
    let n=5;
    while(n--){
        const humanip=humaninput();
        const aiip=aiinput();
        const result =playround(humanip,aiip);
        if(result=="h"){
            hscore++;
            console.log("congo you have won this round");
        }
        else if(result=="a"){
            aiscore++;
            console.log("AI won this round");
        }
        else{
            tier++;
            console.log("THIS round was a tie");
        }
        
    }
    if(hscore>aiscore){
        console.log("congrats human you have won the game");
    }
    else if(aiscore>hscore){
        console.log("AI has won the game ");
    }
    else{
        console.log("Most rounds were a tie so I declare this game as a tie");
    }
}
function humaninput(){
    let input=prompt("Enter either ROCK , PAPER or SCISSORS and goodluck").toUpperCase();
    while(input!="ROCK"&&input!="PAPER"&&input!="SCISSORS"){
        console.log("INVALID INPUT, PLEASE ENTER A VALID INPUT");
        let input=prompt("Enter either ROCK , PAPER or SCISSORS and goodluck").toUpperCase();
    }
    return input;
    
}
function aiinput(){
    let val= Math.floor(Math.random()*3);
    if(val==0){
        return "ROCK";
    }
    else if(val==1){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

playgame()