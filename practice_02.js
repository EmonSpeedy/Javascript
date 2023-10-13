let marks = {
    Emon : 100,
    Nahid : 20,
    Sakib : 60
}
for (let key in marks){
    console.log(key + " got marks "+ marks[key])
}

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
// }

let a, b, c, d, e;
a = 10;
b = 20;
c = 15;
d = 23;
e = 5;

const Mean = (l, s, d, f, g)=>{
    return (l+s+d+f+g)/5;
}

console.log(Mean(a, b, c, d, e));
