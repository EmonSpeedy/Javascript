let marks = [1, 2, 3, 6, 4, 2, null, true, "Absent"];
console.log(marks);

console.log(marks[3]);
console.log(marks[2]);
console.log(marks[0]);

console.log("Previous length is ", marks.length);
marks[9] = 43;
console.log("After adding new value", marks.length);
console.log(marks);
// console.log(marks[6]);
console.log(typeof marks);
