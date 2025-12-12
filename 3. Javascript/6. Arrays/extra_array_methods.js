// 1. includes - checks whether an element exists in the array
let arr1 = [10, 20, 30];
console.log(arr1.includes(20));

// 2. indexOf - finds the first index of a value
let arr2 = ["a", "b", "c"];
console.log(arr2.indexOf("b"));

// 3. lastIndexOf - finds the last index of a value
let arr3 = ["a", "b", "c", "b"];
console.log(arr3.lastIndexOf("b"));

// 4. find - returns first element that satisfies a condition
let arr4 = [5, 12, 8, 130];
console.log(arr4.find((num) => num > 10));

// 5. findIndex - returns index of first element satisfying condition
console.log(arr4.findIndex((num) => num > 10));

// 6. filter - returns all elements that satisfy a condition
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.filter((num) => num % 2 === 0));

// 7. map - transforms each element and returns new array
console.log(arr5.map((num) => num * 2));

// 8. reduce - reduces array to a single value
console.log(arr5.reduce((acc, val) => acc + val, 0));

// 9. some - checks if at least one element satisfies a condition
console.log(arr5.some((num) => num > 3));

// 10. every - checks if all elements satisfy a condition
console.log(arr5.every((num) => num > 0));

// 11. sort - sorts array
let arr6 = [30, 4, 20, 1];
console.log(arr6.sort((a, b) => a - b));

// 12. reverse - reverses the array
console.log(arr6.reverse());

// 13. join - joins all elements with a separator
let arr7 = ["Hello", "World"];
console.log(arr7.join(" "));

// 14. concat - merges two arrays
let arr8 = [1, 2];
let arr9 = [3, 4];
console.log(arr8.concat(arr9));

// 15. at - gets element using positive or negative index
let arr10 = [10, 20, 30];
console.log(arr10.at(-1));
