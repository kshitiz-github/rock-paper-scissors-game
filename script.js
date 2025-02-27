console.log("This is a rock,paper and scissors game");
console.log("Play five rounds to see who the winner is , YOU or the AI hehe");
function playround(humaninput,aiip){
    let hscore=0;
    let aiscore=0;
    while(5--){
        if(humaninput==aiip){
            hscore++;
        }
        else{
            aiscore++;
        }
    }
    if(hscore>=aiscore){
        console.log("yay human you won wohoooo");
    }
    else{
        console.log("BETTER LUCK NEXT TIME LOL");
    }
}
function humaninput(){
    let input=prompt("Enter either ROCK , PAPER or SCISSORS and goodluck");
    input.toUpperCase;
    while(input!="ROCK"||input!="PAPER"||input!="SCISSORS"){
        console.log("INVALID INPUT, PLEASE ENTER A VALID INPUT");
    }
    else{
        return input;
    }
}
function aiinput(){
    int val= Math.floor(Math.random()*3);
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
const humanip=humaninput();
const aiip=aiinput();
playround(humanip,aiip);