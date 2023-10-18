alert("Enter the value of a:")
let a = prompt("Enter a here:")
// document.write(a)
a = Number.parseInt(a)
// alert("Your input type is "+ (typeof a))
let d = confirm("Do you want to write on the page?")
if(d){
    document.write(a)
}
else{
    document.write("Please allow me to write.")
}