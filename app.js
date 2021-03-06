// # Interview Algorithm Questions in Javascript() {...}
// *A mostly reasonable collection of technical software development interview questions try to solve using Javascript*

// ## Table of Contents
// 1. [Array](#array)
// 1. [Strings](#strings)
// 1. [Stacks and Queues](#stacks-and-queues)
// 1. [Recursion](#recursion)
// 1. [Numbers](#numbers)
//--------------------------------------------------------------------------------------------------------------------------

// ## Array
// <a name="array--product"></a><a name="1.1"></a>
// - **[1.1](#array--product) Given an array of integers, find the largest product yielded from three of the integers**
//   ```javascript
var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

//   computeProduct(unsortedArray); // 21000

//   //Write your program here

function solution(A) {
    A = A.sort((a, b) => b - a);
    var product = A[0] * A[1] * A[2];
    var length = A.length;
    if (A[0] < 0) {
        console.log(product);
    }
    if (A[length - 1] * A[length - 2] * A[0] > product) {
        console.log(A[length - 1] * A[length - 2] * A[0]);
    }
    if (A[2] < 0 && length >= 5 && A[3] * A[4] < A[0] * A[1]) {
        console.log(A[2] * A[3] * A[4]);
    }
}

solution(unsortedArray);


//--------------------------------------------------------------------------------------------------------------------------


// <a name="array--consecutive--sum"></a><a name="1.2"></a>
// - **[1.2](#array--consecutive--sum) Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in `O(n)` time**
//   ```javascript
//   // The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

//   //Write your program here

function missingInUnsorted(arr, lb, ub) {
    // Iterate through array to find the sum of the numbers
    let sumOfIntegers = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfIntegers += arr[i];
    }

    upperLimitSum = ub * (ub + 1) / 2;
    lowerLimitSum = lb * (lb - 1) / 2;

    theoreticalSum = upperLimitSum - lowerLimitSum;

    console.log(theoreticalSum - sumOfIntegers);
}
missingInUnsorted(arrayOfIntegers, lowerBound, upperBound);


//--------------------------------------------------------------------------------------------------------------------------


// <a name="array--unique"></a><a name="1.3"></a>
// - **[1.3](#array--unique) Removing duplicates of an array and returning an array of only unique elements**
//   ```javascript
//   // ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

//    //Write your program here

function uniqeArray(a) {
    console.log(Array.from(new Set(a)));
}
uniqeArray(array);
//--------------------------------------------------------------------------------------------------------------------------


// <a name="array--largest-difference"></a><a name="1.4"></a>
// - **[1.4](#array--largest-difference) Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element**
//   ```javascript
var arrays = [7, 8, 4, 9, 9, 15, 3, 1, 10];

//   findLargestDifference(array);

//   //Write your program here

var maxsize = arrays[arrays.length - 1];
var difference = 0;
for (var i = arrays.length - 1; i >= 0; i--) {
    if (arrays[i] > maxsize)
        maxsize = arrays[i];
    else {
        difference = Math.max(difference, maxsize - arrays[i]);
    }
}
console.log(difference);

//--------------------------------------------------------------------------------------------------------------------------


// <a name="array--product-other-than-itself"></a><a name="1.5"></a>
// - **[1.5](#array--product-other-than-itself) Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)**
//   ```javascript
var fArray = [2, 2, 4, 1];
var sArray = [0, 0, 0, 2];
var tArray = [-2, -2, -3, 2];

//   //Write your program here


//--------------------------------------------------------------------------------------------------------------------------


// <a name="array--intersection"></a><a name="1.6"></a>
// - **[1.6](#array--intersection) Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!**
//   ```javascript
var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];


//Write your program here

function intersect(a, b) {
    console.log(a.filter(Set.prototype.has, new Set(b)));
}
intersect(firstArray, secondArray);


//--------------------------------------------------------------------------------------------------------------------------


// ## Strings
// <a name="string--reverse"></a><a name="2.1"></a>
// - **[2.1](#string--reverse) Given a string, reverse each word in the sentence**
//   `"Welcome to this Javascript Guide!"` should be become `"emocleW ot siht tpircsavaJ !ediuG"`
//   ```javascript
var string = "Welcome to this Javascript Guide!";

//Write your program here

var result = string.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(result);
//--------------------------------------------------------------------------------------------------------------------------


/* <a name="string--anagram"></a><a name="2.2"></a>
- **[2.2](#string--anagram) Given two strings, return true if they are anagrams of one another**
  `"Mary" is an anagram of "Army"`
  ```javascript */

var firstWord = "Mary";
var secondWord = "Army";

//Write your program here
var result1 = firstWord.toLowerCase().split("").sort().join("");
var result1 = secondWord.toLowerCase().split("").sort().join("");
console.log(result1 === result1);

//--------------------------------------------------------------------------------------------------------------------------


/* <a name="string--palindrome"></a><a name="2.3"></a>
- **[2.3](#string--palindrome) Check if a given string is a palindrome**
  `"racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account`
  ```javascript */
// isPalindrome("racecar"); // true
// isPalindrome("race Car"); // true

//Write your program here


//SOLUTION-1
var string1 = "racecar";
var string2 = "race Car"

var regexp = /[\W]/g;
var reversed1 = string1.toLowerCase().replace(regexp, "");
var reversed2 = string2.toLowerCase().replace(regexp, "");

var result1 = reversed1.split("").reverse().join("");
var result2 = reversed2.split("").reverse().join("");
console.log(result1 == reversed1);
console.log(result2 == reversed2);

//SOLUTION-2

function palindrome(string) {
    var regexp = /[\W]/g;
    var substring = string.toLowerCase().replace(regexp, "");
    var output = substring.split("").reverse().join("");
    console.log(output === substring);
}
palindrome("race Car");


//--------------------------------------------------------------------------------------------------------------------------


/* <a name="string--isIsomorphic"></a><a name="2.3"></a>
- **[2.4](#string--palindrome) Check if a given string is a isomorphic**

  ```
    For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
    to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
    string A to every char of string B.

    `paper` and `title` would return true.
    `egg` and `sad` would return false.
    `dgg` and `add` would return true. */


// javascript
// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false

//Write your program here

function isIsomorphic(string1, string2) {
    if (string1.length != string2.length) {
        console.log("false");
    }

    var map1 = {};
    var map2 = {};
    for (var i = 0; i < string1.length; i++) {
        var char1 = string1.charAt(i);
        var char2 = string2.charAt(i);
        if (map1[char1] !== map2[char2]) {
            console.log("false");
        }
        map1[char1] = i + 1;
        map2[char2] = i + 1;
    }

};

isIsomorphic("paper", "title")


//--------------------------------------------------------------------------------------------------------------------------


// **[⬆ back to top](#table-of-contents)**

// ## Stacks and Queues

// <a name="stack-queue--stack-as-queue"></a><a name="3.1"></a>
// - **[3.1](#stack-queue--stack-as-queue) Implement enqueue and dequeue using only two stacks**
//   ```javascript
var inputStack = []; // First stack
var outputStack = []; // Second stack

//   //Write your program here
//   ```

//--------------------------------------------------------------------------------------------------------------------------


// <a name="stack-queue--parentheses-balancing"></a><a name="3.2"></a>
// - **[3.2](#stack-queue--parentheses-balancing) Create a function that will evaluate if a given expression has balanced parentheses -- Using stacks**
//   In this example, we will only consider "{}" as valid parentheses
//   `{}{}` would be considered balancing. `{{{}}` is not balanced
//   ```javascript

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

//   isBalanced(expression); // true
//   isBalanced(expressionFalse); // false
//   isBalanced(""); // true

//   //Write your program here



//--------------------------------------------------------------------------------------------------------------------------


// **[⬆ back to top](#table-of-contents)**

// ## Recursion
// <a name="recursion--decimal-to-binary"></a><a name="4.1"></a>
// - **[4.1](#recursion--decimal-to-binary) Write a recursive function that returns the binary string of a given decimal number**
//   Given `4` as the decimal input, the function should return `100`

//   ```javascript
//   decimalToBinary(3); // 11
//   decimalToBinary(8); // 1000
//   decimalToBinary(1000); // 1111101000

//   //Write your program here

////SOLUTION-1
function decimalToBinary(number) {
    var converted = [];
    if (number > 1)
        decimalToBinary(number >> 1);
    converted.push(number & 1);
    console.log(converted.join(""));
}
decimalToBinary(1000);


//SOLUTION-2
function decimalToBinary(number) {
    var converted = [],
        i;
    for (i = number; i > 0; i = parseInt(i / 2)) {
        converted.push(i % 2);
    }
    console.log(converted.reverse().join(""));
}
decimalToBinary(8);

//--------------------------------------------------------------------------------------------------------------------------


// <a name="recursion--binary-search"></a><a name="4.2"></a>
// - **[4.2](#recursion--binary-search) Write a recursive function that performs a binary search**

//   ```javascript

function recursiveBinarySearch(array, value, leftPosition, rightPosition) {

}



//--------------------------------------------------------------------------------------------------------------------------


// **[⬆ back to top](#table-of-contents)**

// ## Numbers
// <a name="numbers--power-of-two"></a><a name="5.1"></a>
// - **[5.1](#numbers--power-of-two) Given an integer, determine if it is a power of 2. If so,
//   return that number, else return -1. (0 is not a power of two)**
//   ```javascript
//   isPowerOfTwo(4); // true
//   isPowerOfTwo(64); // true
//   isPowerOfTwo(1); // true
//   isPowerOfTwo(0); // false
//   isPowerOfTwo(-1); // false

//Write your program here:

function isPowerOfTwo(n) {
    if (typeof n !== 'number')
        console.log('Not a number');
    else if (n === 0) {
        console.log(false);
    } else {
        console.log(n && (n & (n - 1)) === 0);
    }
}
isPowerOfTwo(64);

// **[⬆ back to top](#table-of-contents)**