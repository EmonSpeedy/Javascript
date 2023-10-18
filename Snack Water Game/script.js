let Loop = true

let winner = ((user, comp)=>{
    if(user == "S" && comp == "W"){
        return true
    }
    else if(user == "G" && comp == "S"){
        return true
    }
    else if(user == "W" && comp == "G"){
        return true
    }
    return false
})

while(Loop)
{
    let user_input = prompt("Choose one among S,W,G")
    let options = ["S", "W", "G"]
    let index = Math.floor(Math.random() * options.length)
    let comp_input = options[index]
    if(winner(user_input, comp_input)){
        alert("You have won!")
    }
    else{
        alert("You loose!")
    }
    Loop = confirm("You want to play again?")
}