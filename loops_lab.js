console.log('Prblem 1');
// A
let num = 100
while (num >=1) {
    console.log(num)
    num -=1
}

// B
for (num = 100; num>0; num-=1){
    console.log(num)
}

console.log('Prblem 2');

// A

let max = 10

while (max < 20) {
    if (max % 2 === 0) {
    console.log("This number is Even " + max)
} else {
    console.log("This number is odd " + max)
}
max++; 
}

// B

for (max = 0; max <= 20; max++) {
    if(max % 2 === 0) {
    console.log("The number is Even " + max)
}   else {
    console.log("This number is odd " + max)
}
}

console.log('Prblem 3');
//a

let x = 0

while (x<=10) {
    console.log(x + " * 9 = "+ x *9);
    x++;
}

// b
for (x = 0; x <= 10; x++){
    console.log(x + " * 9 = "+ x *9);
}

console.log('Prblem 4');

for (let y = 1; y <= 100; y ++){
    if (y % 5 ===0 && y % 10 !==0){
    console.log(y)
    }
}

console.log('Problem 5');

console.log("This code will run forever. There is no limit for this loop)

console.log('Problem 6');

let num = 1

for (let num = 1; num <=100; num++) {
  if (num % 5 === 0) {
    console.log("Buzz")
  } else if (num % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(num)
  }
}

console.log('Problem 7');

//
