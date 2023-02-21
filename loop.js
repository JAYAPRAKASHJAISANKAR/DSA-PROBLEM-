// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   {
//     for (let k = 1; k <= i; k++) row += i + " ";
//     {
//     }

//     console.log(row);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   {
//     for (let k = 1; k <= i; k++) row += i + " ";
//     {
//     }

//     console.log(row);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// let n = 15;

// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 == 0) {
//     console.log("Superstar");
//   } else if (i % 5 == 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }
// let n = 4;
// let output = "";
// for (let i = 1; i <= n; i++) {
//   output += i + " ";
//   console.log(output);
// }
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let output = "";
//   for (let j = 1; j <= i; j++) {
//     output += j + "  ";
//   }
//   console.log(output);
// }
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   let global = "    ";
//   for (let j = 1; j <= i; j++) {
//     global += i + "   ";
//   }
//   console.log("sachin");
// }

// let n = 7;

// for (let i = 1; i <= n - 1; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }
// let n = 10;
// let global = " ";
// for (let i = n; i >= 0; i--) {
//   global += i + " ";
// }
// console.log(global);

// let n = 5;
// let global = " ";
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= n; j++) {
//     global += i + "  ";
//   }
// }

// console.log(global);

// let n = 3;
// for (let i = n - 1; i >= 1; i--) {
//   let global = " ";
//   for (let j = 1; j <= n - i; j++) {
//     for (let k = 1; k <= i; k++) {
//       global += i - k + 1 + " ";
//     }
//     console.log(global);
//   }
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += "   ";
//   }

//   for (let k = 1; k <= i; k++) {
//     run += i - k + "  ";
//   }
//   console.log(run);
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = " ";
//   for (let j = 1; j <= n; j++) {
//     for (let k = 1; k <= n - i; k++) {
//       run += i - k + 1 + "   ";
//     }
//   }
//   console.log(run);
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     run += k + " ";
//   }
//   console.log(run);
// }

// let n = 2;
// for (let i = 1; i <= n; i++) {
//   console.log("1");
// }
// for (let i = 1; i <= n; i++) {
//   let global = "";
//   for (let j = 1; j <= 2 + n - i + 2; j++) {
//     global += i + " ";
//   }
//   console.log(global);
// }

// for (let i = 1; i <= n; i++) {
//   console.log("1");
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 3;
// // Repeat n times
// for (let i = 1; i <= n; i++) {
//   //spaces + sequence of numbers
//   console.log(getSpaces(n) + getNumSequence(i));
// }

// //console.log( getSpaces(3) + getNumSequence(1));

// //console.log( getSpaces(2) + getNumSequence(2));

// //console.log( getSpaces(1) + getNumSequence(3));

// function getSpaces(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str = str + " ";
//   }
//   return str;
// }

// function getNumSequence(n) {
//   let numseq_str = "";
//   for (let i = 1; i <= n; i++) {
//     numseq_str = numseq_str + i + " ";
//   }
//   return numseq_str;
// }

//Reverse half diamond
//Repeat 2 times
// spaces + sequence in reverse of numbers

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += "   ";
//   }

//   for (let k = 1; k <= i; k++) {
//     run += i - k + "  ";
//   }
//   console.log(run);
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let run = " ";
//   for (let j = 1; j <= n; j++) {
//     run += i + " ";
//   }

//   console.log(run);
// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let run = " ";
//   for (let j = 1; j <= i; j++) {
//     run += j + " ";
//   }

//   console.log(run);
// }

// for (let i = 1; i <= n - 1; i++) {
//   let row = "  ";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = i; k >= 1; k--) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n - 1; i++) {
//   let row = "          ";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// let n = 4;

// function num(n) {
//   let run = " ";
//   for (let i = 1; i <= n; i++) {
//     console.log(run + i);
//     run += "   ";
//   }
// }

// function seq(n) {
//   let row = " ";
//   for (let i = n - 1; i >= 1; i--) {
//     console.log(row + i);

//     row += "  ";
//   }
// }
//let n = 6;
// let run = "";
// for (let i = n; i >= 0; i--) {
//   run += i + " ";
// }

// console.log(run);

// for (let i = 1; i <= 7; i++) {
//   let stair = "  ";
//   for (let j = 1; j <= 8; j++) {
//     if (j >= i && j <= 8 - i) {
//       stair += i;
//     } else {
//       stair += " ";
//     }
//   }
//   console.log(stair);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(
//     tot(i) + numSpaces(n - i + 1) + numSpaces(n - i) + rightSpaces(i)
//   );
// }
// for (let i = n - 1; i < n; i++) {
//   console.log(leftnumber(i + 1) + rightnumber(i));
// }
// // function methods
// // spaces
// function numSpaces(n) {
//   let run = "";
//   for (let i = 1; i <= n; i++) {
//     run += "  ";
//   }
//   return run;
// }
// // left staircase
// function tot(n) {
//   let run = "";
//   for (let i = 1; i < n; i++) {
//     run += i + " ";
//   }
//   return run;
// }
// function rightSpaces(n) {
//   let run = "";
//   for (let i = n - 1; i >= 1; i--) {
//     run += i + " ";
//   }
//   return run;
// }
// function leftnumber(n) {
//   let run = "";
//   for (let i = 1; i <= n; i++) {
//     run += i + " ";
//   }
//   return run;
// }
// function rightnumber(n) {
//   let run = "";
//   for (let i = n; i >= 1; i--) {
//     run += i + " ";
//   }
//   return run;
// }

// let n = 4;
// let run = " ";
// for (let i = n; i >= 1; i--) {
//   run = "";
//   for (let j = i; j >= 1; j--) {
//     run += j + " ";
//   }
//   console.log(run);
// }

// let n = 4;
// for (let i = 1; i <= n; ) {
//   let run = " ";
//   for (let j = 1; j <= n; ) {
//     run += j + " ";
//   }
//   console.log(run);
// }

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += i + " ";
//   {
//     console.log(run);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += i + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 10;
// for (let i = 1; i <= n - 1; i++) {
//   let run = " ";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += i + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) {
//       run += i;
//     } else {
//       run += " ";
//     }
//   }
//   console.log(run);
// }
//for (let i = n - 1; i >= 1; i--) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) {
//       run += i;
//     } else {
//       run += " ";
//     }
//   }
//   console.log(run);
// }

// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= n - i; k++) {}
// }
// let n = 3;
// let output = 1;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     run += output++;
//   }
//   console.log(run);
// }

// let n = 4;

// let row = " ";
// for (let i = 1; i <= n; i++) {
//   row += i + " ";
// }
// console.log(row);

// let out = " ";
// for (let i = n - 2; i <= n - 1; i++) {
//   out += i + "     ";
// }
// console.log(out);

// let rev = " ";
// for (let i = n - 1; i >= n - 2; i--) {
//   rev += i + "     ";
// }
// console.log(rev);
// let run = " ";
// for (let i = n; i >= 1; i--) {
//   run += i + " ";
// }
// console.log(run);
// JSON represention
// For students database
// name, age,stipend marks for 3 subjects, maths, physics and chemistry.
// 0. Given a name find it in the array of students.
// 1. a. Find the eldest student, it should print the name of the student,
//	b. find the student who earns the least stipend

// let a = [
//   {
//     name: "Kishore",
//     age: 19,
//     stipend: 1000,
//     marks: { maths: 50, physics: 79, chemistry: 80 },
//   },
//   {
//     name: "Razzak",
//     age: 18,
//     stipend: 10000,
//     marks: { maths: 80, physics: 75, chemistry: 70 },
//   },
//   {
//     name: "Ajmal",
//     age: 18,
//     stipend: 10000,
//     marks: { maths: 35, physics: 45, chemistry: 50 },
//   },
//   {
//     name: "Aishwarya",
//     age: 21,
//     stipend: 10000,
//     marks: { maths: 65, physics: 80, chemistry: 85 },
//   },
// ];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i].name);
// }

// let x = a[0].age;
// for (let i = 0; i < a.length; i++) {
//   if (x < a[i].age) {
//     x = a[i].age;
//     console.log(a[i].name);
//   }
// }

// let y = a[0].stipend;
// for (let i = 0; i < a.length; i++) {
//   if (y >= a[i].stipend) {
//     y = a[i].stipend;
//     console.log(a[i].name);
//   }
// }

// let s = a[0].physics;
// for (let i = 0; i < a.length; i++) {
//   if (s < a[i].physics) {
//     s = a[i].physics;
//     console.log(a[i].physics);
//   }
// }

// let a = [4, 5, 10, 11, 1];
// let k = 3;

// let sum = 0;
// for (let i = 0; i < k; i++) {
//   sum += a[i];
// }

// let maxSum = sum;
// for (let i = k; i < a.length; i++) {
//   sum = sum - a[i - k] + a[i];
//   if (sum > maxSum) {
//     maxSum = sum;
//   }
// }

// console.log(maxSum); // output: 26

// console.log(sum); // output: 14

// const studentsWithPhysicsGreaterThan70 = a.filter((student) => {
//   return student.marks.physics > 70;
// });

// console.log(studentsWithPhysicsGreaterThan70);

// return x;

// let i = 2;
// console.log(students_db_array[i].name === "Razzak");

//3. Given an array, print the sum of all even numbers in the array
// let a = [4, 3, 17, 10, 11];
// // it should print 14
// let x = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     x += a[i];
//   }
// }
// console.log(x);

// Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.

// let a = [4, 5, 10, 11, 1];
// let k = 3;
// // // The maximum is 26.

// let x = 19;
// // let y = x;
// // for (let i = 0; i < k; i++) {
// //   x += a[i];
// // }
// // console.log(x);
// let y = x;
// for (let i = k; i < a.length; i++) {
//   x = x - a[i - k] + a[i];
//   // console.log(x);=
//   if (x > y) {
//     y = x;
//   }
// }
// console.log(y);

// let a = [4, 5, 10, 11, 1, 100, 67];
// let k = 5;
// let x = 0;

// for (let i = 0; i <= a.length - k; i++) {
//   let y = 0;
//   for (let j = i; j < i + k; j++) {
//     y += a[j];
//   }
//   if (y > x) {
//     x = y;
//   }
// }

// console.log(x);

// Given the length and breadth , let l = 10; let b = 5; your code should print "Area of the rectangle is 50".

// let l = 10;
// let b = 5;

// let area = "Area of the rectangle is" + l * b;
// console.log(area);

// Given 2 numbers it should print if they are equal or not equal,
// let a = 10;
// let b = 20;
// // It should either a is equal to b or a is NOT equal to b

// if ((a = b)) {
//   console.log(a & b);
// } else {
//   console.log("It should either a is equal to b or a is NOT equal to b");
// }
