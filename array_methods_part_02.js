let nums1 = [3, 2, 6, 5, 78, 4, 77];
let nums2 = [22, 6, 44, 1];
let nums3 = [44,5,2, 443,12];
// console.log(nums);
// delete nums[3];
// console.log(nums.length);

// console.log(nums1+nums2);
let newArr = nums1.concat(nums2, nums3);
console.log(newArr);

//sort method
// nums1.sort();
// console.log(nums1);
//sort method 2
let compare = (a, b)=>{
    return b - a;
}

nums1.sort(compare);
nums1.reverse()
console.log(nums1);

let del_vals = nums3.splice(1, 2, 123, 554, 43);
console.log(del_vals);

let val = [3, 2, 6, 5, 78, 4, 77];

let newARA = val.slice(2, 4);
console.log(newARA);
