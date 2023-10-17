// Problem number 1
let ara = [1, 2, 44, 32, 65, 2];
let a = Number.parseInt(prompt("Enter a number"));
ara.push(a);
console.log(ara);

// Problem number 2
let arr = [];
while(true)
{
    let n = Number.parseInt(prompt("Enter a number"));
    if(n == 0){
        break;
    }
    arr.push(n);
}
console.log(arr);

// Problem number 3
let ar = [10, 30, 100, 2, 54, 38, 98, 7, 40];
let newAra = ar.filter((x) =>{
    return x % 10 == 0;
});
console.log(newAra);

// problem number 4
let Ara = [1, 2, 44, 32, 65, 2];
let newARA = Ara.map((s) => {
    return s * s;
});
console.log(newARA);

// Problem number 5
let fac = [1, 2, 3, 4, 5];
let ans = fac.reduce((a1, a2)=>{
    return a1 * a2;
})
console.log(ans);
