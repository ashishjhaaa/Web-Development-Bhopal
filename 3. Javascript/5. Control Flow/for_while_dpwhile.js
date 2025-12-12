// for loop
for (let i = 1; i <= 3; i++) {
  console.log("for loop:", i);
}

// while loop
let j = 1;
while (j <= 3) {
  console.log("while loop:", j);
  j++;
}

// do-while loop
let k = 1;
do {
  console.log("do-while loop:", k);
  k++;
} while (k <= 3);

// Infinite loop prevention example
let counter = 0;

while (true) {
  console.log("Loop running:", counter);
  counter++;

  if (counter === 3) {
    break;
  }
}
