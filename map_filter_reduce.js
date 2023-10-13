// map function
let nums = [3, 2, 6, 5, 78, 4, 77];
// console.log(nums);
let a = nums.map((val, idx, ara)=>{
    // console.log(val, idx, ara);
    // return val + 2;
})
// console.log(a);

// Filter function
let val = nums.filter((a)=>{
    return a < 10;
})
// console.log(val);

// Reduce method 
let vals = [3, 2, 6, 5, 7, 4, 7];
let newAra = vals.reduce((a1, a2)=>{
    return a1 + a2;
})
console.log(newAra);