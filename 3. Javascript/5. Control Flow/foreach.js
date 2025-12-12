// forEach Loop (very important for arrays)

let numbers = [10, 20, 30];

numbers.forEach(function (num, index) {
  console.log("forEach:", index, num);
});

// Arrow function 
numbers.forEach((num) => console.log("Value:", num));
