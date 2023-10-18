// Question 1

let age = prompt("Enter your age");
age = Number.parseInt(age);
let canDrive = (age) => {
    return age >= 18 ? true : false;
};
if (canDrive(age)) {
    alert("Yes! you can drive.");
} else {
    alert("No, you cannot drive");
}


// Question 2

let runagain = true;

while (runagain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if (canDrive(age)) {
        alert("Yes! you can drive.");
    } else {
        alert("No, you cannot drive");
    }
    runagain = confirm("You want to see the prompt again?")
}

// Question 3

let age1 = prompt("Enter your age");
age1 = Number.parseInt(age);

if (age1 < 0) {
    console.error("PLease enter a valid age.")
} 
else if(canDrive(age1)){
    alert("Yes! you can drive");
}
else {
    alert("No! you cannot drive.");
}


// QUestion 4

let number = prompt("Enter a number")
number = Number.parseInt(number)
if(number > 4){
    location.href = "https://google.com"
}


// Question 5
let input = prompt("Give us your choice")
document.body.style.background = input


