// console.log('Prblem 1');
// // A
// let num = 100
// while (num >=1) {
//     console.log(num)
//     num -=1
// }

// // B
// for (num = 100; num>0; num-=1){
//     console.log(num)
// }

// console.log('Prblem 2');

// // A

// let max = 10

// while (max < 20) {
//     if (max % 2 === 0) {
//     console.log("This number is Even " + max)
// } else {
//     console.log("This number is odd " + max)
// }
// max++; 
// }

// // B

// for (max = 0; max <= 20; max++) {
//     if(max % 2 === 0) {
//     console.log("The number is Even " + max)
// }   else {
//     console.log("This number is odd " + max)
// }
// }

// console.log('Prblem 3');
// //a

// let x = 0

// while (x<=10) {
//     console.log(x + " * 9 = "+ x *9);
//     x++;
// }

// // b
// for (x = 0; x <= 10; x++){
//     console.log(x + " * 9 = "+ x *9);
// }

// console.log('Prblem 4');

// for (let y = 1; y <= 100; y ++){
//     if (y % 5 ===0 && y % 10 !==0){
//     console.log(y)
//     }
// }

// console.log('Problem 5');

// console.log("This code will run forever. There is no limit for this loop, no break in the Loop")

// console.log('Problem 6');

// let numFB = 1

// for (let numFB = 1; numFB <=16; numFB++) {
//   if (numFB % 5 === 0) {
//     console.log("Buzz"); 
//   } else if (numFB % 3 === 0) {
//     console.log("Fizz")
//   } else {
//     console.log(numFB)
//   }
// }

// console.log('Problem 7');

// //
// let numFnB = 1

// for (let numFnB = 1; numFnB <=31; numFnB++) {
//   if (numFnB % 3===0 && numFnB %5===0){
//       console.log("FizzBuzz")
// }   else if (numFnB % 5 === 0) {
//     console.log("Buzz"); 
//   } else if (numFnB % 3 === 0) {
//     console.log("Fizz")
//   } else {
//     console.log(numFnB)
//   }
// }

console.log("Problem 8")

// let bottles = 5;

for (let bottles = 5; bottles >=0; bottles--) {
    if (bottles === 1) {
        console.log(bottles + " bottle of beer on the wall," + bottles + " bottle of beer.")
        console.log("Take one down, pass it around, No more bottle of beer on the wall."); console.log("test 1")
    } else if (bottles === 2) {
        console.log(bottles + " bottles of beer on the wall," + bottles + " bottles of beer.")
        console.log("Take one down, pass it around," + bottles + "bottle of beer on the wall."); console.log("test 2")
    } else (bottles <= 6 && bottles > 2) 
        console.log(bottles + " bottles of beer on the wall," + bottles + " bottles of beer.")
        console.log("Take one down, pass it around," + (bottles -= 1) + "bottles of beer on the wall.");
    }

    