

// Create a function that finds the longest word in a string

function findLongestWord() {
  let stringWords = prompt("Enter your text");
  let words = stringWords.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

const longestWord = findLongestWord();

if (longestWord.length > 0) {
  alert("The longest word is: " + longestWord);
} else {
  alert("No valid words found in the input.");
}


// Create a calculator 

const calculator = {
  num1: 0,
  num2: 0,

  add: function () {
    return this.num1 + this.num2;
  },

  subtract: function () {
    return this.num1 - this.num2;
  },

  multiply: function () {
    return this.num1 * this.num2;
  },

  divide: function () {
    if (this.num2 !== 0) {
      return this.num1 / this.num2;
    } else {
      return "Cannot divide by zero!";
    }
  },
};

calculator.num1 = 25;
calculator.num2 = 5;

console.log("Sum:", calculator.add());
console.log("Difference:", calculator.subtract());
console.log("Product:", calculator.multiply());
console.log("Quotient:", calculator.divide());


// function hosting 

fullName("Nka", "Koiava");

function fullName(a, b) {
  let sum = a + b;
  console.log(`Hello my full name is  ${sum}`);
}