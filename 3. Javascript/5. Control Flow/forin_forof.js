// for-in (object properties)

let student = { name: "Amit", age: 20 };

for (let key in student) {
  console.log("for-in:", key, student[key]);
}

// for-of (array values)

let nums = [10, 20, 30];

for (let value of nums) {
  console.log("for-of:", value);
}
