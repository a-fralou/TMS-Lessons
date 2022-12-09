"use strict"
// Part 5 - Arrays
// task 1
{
const colors = ['red', 'green', 'blue']
console.log(colors.length);
}
// 

// task 2
{
const animals = ['monkey', 'dog', 'cat']   
let lastEl = animals.pop();
console.log(lastEl);
// console.log(animals[2]); - another decision

// console.log(animals.slice(2)); - another decision
}
//  

//  task 3
{
const numbers = [5, 43, 63, 23, 90]
let numDelete = numbers.splice(0);
console.log(numbers);

// for (i = 0;i < numbers.length; i++)numbers.splice(i) - another decision
// console.log (numbers);

// numbers.length = 0; - another decision
// console.log (numbers);
}
// 

//  task 4
{
const students = ['Polina', 'Dasha', 'Masha'];
const remove = students.splice(2, 1, 'Borya');
const exchange = students.splice(0, 1, 'Andrey');
console.log(students);
}
//  

//  task 4 - another decision
{
const students = ['Polina', 'Dasha', 'Masha'];
const deleteEl = students.pop();
const firstEl = students.push('Borya'); 
const  clearEl = students.shift();
const reversed = students.reverse();
const secondEl = students.push('Andrey');
const reversedEl = students.reverse();
console.log(students);
}
// 

// task 5 - with for
{
const cats = ['Gachito', 'Tom', 'Batman'] 
for (let i = 0; i < cats.length; i++) {
    console.log(cats.join(','));
}
console.log(cats);
}

//task 5 - second decision with for of
{
const cats = ['Gachito', 'Tom', 'Batman'] 
for (const value of cats) {
    console.log(value);
  }
}
// 

// task 5 - another decision 
{
const cats = ['Gachito', 'Tom', 'Batman']
for (let i = 0; i < cats.length; i++) {
    cats.forEach(element => console.log(element));
    break;
}
console.log(cats);
}
// 

// task 6 
{
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const newArr = evenNumbers.concat(oddNumbers);
console.log(newArr.indexOf(8));
}
// 

// task 7 - first decision
{
const binary = [0, 0, 0, 0]
const addNum = binary.join('1');
console.log(addNum);
}
// 

//  ADVANCED level
// task 1 - first decision
{
function checkPalindrom(palindrome) {
    for (let i = palindrome.length; i > 0; i-- ) {
        if ( palindrome[i] = palindrome.charAt(palindrome.length)-1 ) {
            console.log('the word is palindrome.');
        } else {
            console.log('the word is not palindrome!');
        }
    }
}
checkPalindrom('bob');
}
// 

// task 1 - second decision
{
function checkPalindrome(string) {
    const len = string.length;
        for (let i = 0; i < len / 2; i++) {
            if (string[i] !== string[len - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
checkPalindrome('bob');
}
// 

// task 2 
{
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let newMatrix = matrix[0].concat(matrix[1], matrix[2], matrix[3]);
  let sum = 0;
  for (let i = 0; i < newMatrix.length; i++) {
       sum += newMatrix[i];
  }
let AVERAGE_NUM = sum / newMatrix.length;
console.log(AVERAGE_NUM);
}
// 

//  task 3
{
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
function isBigEnough(value) {
    return value >= 0;
  }
let filtered = mixedNumbers.filter(isBigEnough);
let positiveNumbers = filtered;
function isNotBigEnough(value) {
    return value < 0;
  }
let filteredNum = mixedNumbers.filter(isNotBigEnough);
let negativeNumbers = filteredNum;
console.log(positiveNumbers);
console.log(negativeNumbers);
}
// 

//  task 4
{
let randomNumbers = [getRandomInt(7), getRandomInt(6), getRandomInt(5), getRandomInt(4), getRandomInt(3), getRandomInt(2), getRandomInt(1)];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
let firstNumber = Math.pow(randomNumbers[0], 3);
let secondNumber = Math.pow(randomNumbers[1], 3);
let thirdNumber = Math.pow(randomNumbers[2], 3);
let fourthNumber = Math.pow(randomNumbers[3], 3);
let fifthNumber = Math.pow(randomNumbers[4], 3);
let sixthNumber = Math.pow(randomNumbers[5], 3);
let seventhNumber = Math.pow(randomNumbers[6], 3);
let nextArray = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber, seventhNumber];
console.log(randomNumbers);
console.log(nextArray);
}

// task 4 (не возводит массив чисел в куб)
{
let a = []
let limitCount = 10

function createRandom(limit) {
    for (let i = 0; i < limit; i++) {
        let randomCount = Math.round(Math.random() * 10)
        a.push(randomCount)
        // if (a.find(el => el === randomCount)) { 
        //     console.log(Math.round(Math.random() * 10))
        //     // a.push(randomCount)
        // } else {
        //     a.push(randomCount)
        // }
    }
// console.log(a)
    let newArr = Array.from(new Set(a))
    a = newArr
    if (a.length === limitCount) {
        console.log(newArr)
        return newArr
    } else {
        createRandom(limitCount - newArr.length)
    }
}
createRandom(limitCount);
let cubes = function getCube() {
for (i in cubes) {
    cubes[i] = Math.pow(createRandom(limitCount)[i], 3)
}
getCube(cubes);
}
}
// 