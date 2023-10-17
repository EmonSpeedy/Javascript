let n = Math.floor(Math.random() * 100);
while(true)
{
    let input = Number.parseInt(prompt("Guess a number between 1 and 100..."));
    if(input == n){
        console.log("Congratulations!! you guessed the correct number.");
        break;
    }
    else if(input > n){
        console.log("The number you have guessed it is greater than the number.");
    }
    else{
        console.log("The number you have guessed it is smaller than the number.");
    }
}