// PRACTICE 1
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmiResult = weight/(height*height)
  if (bmiResult <= 18.5) {
    return "Underweight"
  }
  if (bmiResult <= 25.0) {
    return "Normal"
  }
  if (bmiResult <= 30.0) {
    return "Overweight"
  }  
  if (bmiResult > 30) {
    return "Obese"
  }
}

//PRACTICE 2
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
function removeChar(str){
  return str.slice(1, str.length-1);
};

//PRACTICE 3
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
function booleanToString(b){
  return b.toString();
}

//PRACTICE 4
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(sheep) {
  let count = 0;  
  for (she of sheep) {
    if (she === true) {
      count += 1;
    }
  }
  return count
}

//PRACTICE 5
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
  let words = s.split(" ");
  
  let sortedWords = words.sort((a,b) => a.length-b.length);
  
  return sortedWords[0].length;
}

//PRACTICE 6
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  
  if (input === null) {
    return [];
  }
  
  if (input.length === 0) {
    return [];
  }
  
  input.forEach((num) =>{
    if (num > 0){
      count++;
    } else if (num <0){
      sum += num;
    }
  })
  
  return [count, sum];
}

//PRACTICE 7
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)
function hero(bullets, dragons){
  if (bullets >= dragons*2){
    return true
  } else {
    return false
  }
}

//PRACTICE 8
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// a can contain numbers or strings. x can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
  let filteredArray = a.filter(number => number === x);
  
  if (filteredArray.length >= 1){
    return true
  } else {
    return false
  }
}

//PRACTICE 9
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  let answer = ""
  for (let i=0; i<n; i++){
    answer += s
  }
  return answer;
}

//PRACTICE 10
// Very simple, given a number, find its opposite (additive inverse).
function opposite(number) {
  //your code here
  return number*(-1)
}

//PRACTICE 11
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
  //#Happy Coding! ^_^
  
  let seconds = s*1000
  let minutes = m*60000
  let hours = h*3600000
  
  return seconds + minutes + hours
}