var num = 5 ;
var gnum = Number(prompt("What's your Guess?"));
if(Number(num) === gnum){
    alert("Hey Correct Guess, You Won!!");
}
else if(gnum<5){
    alert("Hey Guessed number is too low, Try Again");
}
else if(gnum>5){
    alert("Hey Guessed number is too High, Try Again");
}