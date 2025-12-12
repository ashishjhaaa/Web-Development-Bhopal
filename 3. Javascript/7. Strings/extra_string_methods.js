// 1. charAt - gets character at a position
let s1 = "JavaScript";
console.log(s1.charAt(0));

// 2. charCodeAt - returns ASCII/Unicode of a character
console.log(s1.charCodeAt(0));

// 3. replace - replaces first matched value
let s2 = "Hello World";
console.log(s2.replace("World", "JS"));

// 4. replaceAll - replaces all matched values
let s3 = "aa bb aa bb";
console.log(s3.replaceAll("aa", "xx"));

// 5. startsWith - checks if string starts with specific text
let s4 = "Programming";
console.log(s4.startsWith("Pro"));

// 6. endsWith - checks if string ends with specific text
console.log(s4.endsWith("ming"));

// 7. repeat - repeats the string multiple times
let s5 = "Hi ";
console.log(s5.repeat(3));

// 8. substring - extracts part of string (similar to slice)
let s6 = "HelloWorld";
console.log(s6.substring(0, 5));

// 9. concat - joins multiple strings
let s7 = "Good";
let s8 = "Morning";
console.log(s7.concat(" ", s8));

// 10. indexOf - finds first index of a substring
let s9 = "banana";
console.log(s9.indexOf("a"));

// 11. lastIndexOf - finds last index of a substring
console.log(s9.lastIndexOf("a"));

// 12. toString - converts non-string to string
let value = 123;
console.log(value.toString());

// 13. trim - removes spaces from start and end only
let spaced = "   JS      ";
console.log(spaced.trim());