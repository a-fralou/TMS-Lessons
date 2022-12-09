'use strict'
// Functions (2)
// task 1 (arrow function)
{
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(element => console.log(element));
}
// 
    
// task 1 (function declaration)
{
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(function(item) {
    console.log( item );
});
}
    
// task 2 (arrow function)
{
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
const arr = users.map((x,y) => 'member ' + (y + 1) + ": "  + x);
console.log(arr);
}
    
// task 2 (function declaration)
{
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'] 
users.map(function(x,y) {
    const arr = 'member ' + (y + 1) + ": "  + x;
    return arr;
});
}
    
// task 2 (function declaration)
{
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'] 
function getString (x,y) {
    console.log(x,y)
}
function getNewString (elem1, elem2) {
    const arr = 'member ' + (elem2 + 1) + ": "  + elem1;
    return arr;
};
arr;
}
// 
    
// task 3 arrow function
{
const numbers = [7, -4, 32, -90, 54, 32, -21]
const result = numbers.filter(number => number > 0);
console.log(result)
}
// 
    
// task 3 function declaration 
{
function getPositiveNumber (value) {
return value > 0;
    }
const numbers = [7, -4, 32, -90, 54, 32, -21].filter(getPositiveNumber);
console.log(numbers);
}
    
//  task 4 (arrow function)
{
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
const getSum = fibonacci.reduce(
    (accumulator, currentValue) => accumulator + currentValue
        );
        console.log(getSum);
}
    
//  task 4 (function declaration)
{
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
let result = fibonacci.reduce(function(sum, elem) {
    return sum + elem;
});
console.log(result);
}
    
// task 4 another decision
{
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
function reducer(accumulator, currentValue, index) {
const returns = accumulator + currentValue;
return returns;
}
fibonacci.reduce(reducer);
}
// 
    
// task 5
// arrow function
{
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const GET_EVEN_NUMBER = numbers.find(element => element % 2 == 0);
console.log(GET_EVEN_NUMBER)
}
// 
    
// task 5 function declaration
{
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
function getNumber () {
    let evenNumber = numbers.find(element => element % 2 == 0);
    return evenNumber
}
console.log(getNumber(evenNumber))
}
    
// task 1 (Advanced level)
{
function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.receive = () => {
        switch (this.rate) {
            case 'A':
                return this.salary * 12;
                break;
            case 'B':
                return this.salary * 9;
                break;
            case 'C':
                return this.salary * 6;
                break;
            case 'D':
                return 0;
                break;
        }
    }
} 
let kate = new Student(3000, 'A', 'Kate');
let bella = new Student(2000, 'B', 'Bella');
let leo = new Student(1700, 'B', 'Leo');
let james = new Student(1900, 'B', 'James');
let lily = new Student(3100, 'A', 'Lily');
const studentsArr = [kate, bella, leo, james, lily];
const totalReceive = studentsArr.reduce ((sum, elem) => {
return sum + elem.receive();
}, 0);
console.log(totalReceive);
}
    
// task 2
{
let disemvowel = (str) => str.replace(/[aeiou]/gi, '')
console.log(disemvowel('This website is for losers LOL!»'));
}
// 
    
// task 3
{
const accum = str => str
.split('')
.map((x, i) => (x = x.toLowerCase().repeat(i + 1)) && x.charAt(0).toUpperCase() + x.slice(1))
.join('-')
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
}
    
// task 4 
{
let str = '1 2 3 4 5';
const arr = str.split(' ');
console.log(`Max: ${Math.max(...arr)} Min: ${Math.min(...arr)}, `)
}
    
// task 4
{
highAndLow('1 2 3 4 5');
function highAndLow (numbers) {
numbers = numbers.split (' ');
let arr = [];
numbers.forEach(function(elem) {
    arr.push(Number(elem))
})
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
return max + ' ' + min
}
}
    
// task 4 (function declaration)
{
highAndLow('1 2 3 4 5');
function highAndLow (numbers) {
numbers = numbers.split (' ');
let arr = numbers.map(function(elem) {
    return Number(elem)
})
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
return max + ' ' + min
}
}
    
// task 4 (arrow function)
{
highAndLow('1 2 3 4 5');
function highAndLow (numbers) {
    numbers = numbers.split (' ');
    let arr = numbers.map(elem => Number(elem))
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return max + ' ' + min
    }
}
    
// task 4 (arrow function)
{
highAndLow('1 2 3 4 5');
function highAndLow (numbers) {
    numbers = numbers.split (' ');
    let arr = numbers.map(elem => Number(elem))
    let max = arr[0];
    let min = arr[0];
    arr.forEach(elem => {
        if (max < elem) {
            max = elem
        } if (min > elem) {
            min = elem
        }
    }
        )
    return max + ' ' + min
    }
}
// 
    
// task 5 (function declaration)
{
function isIsogram (str) {
    return str.length == new Set(str.toLowerCase()).size;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
}
    
// task 5 (регулярное выражение)
{
function isIsogram (str) {
    return !/(\w).*\1/i.test(str);
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
}
// 
    
//  task 6 
{
let firstA = 'A';
let firstB = 'B';
let firstC = 'C';
let new_A = firstA.charCodeAt(0);
new_A = new_A.toString();
let new_B = firstB.charCodeAt(0);
new_B = new_B.toString();
let new_C = firstC.charCodeAt(0);
new_C = new_C.toString();
let total1 = new_A + new_B + new_C;
typeof total1;
console.log(total1);
let total2 = total1.replace(/7/, '1');
    function getDifference (total1, total2){
        return Math.abs(total1 - total2);
      }
console.log(getDifference(total1,total2))
}
    
// task 6 - another decision
{
let firstA = 'A';
let firstB = 'B';
let firstC = 'C';
let new_A = firstA.replace(/A/i, '65');
let new_B = firstB.replace(/B/i, '66');
let new_C = firstC.replace(/C/i, '67');
let total1 = new_A + new_B + new_C;
console.log(total1);
let total2 = total1.replace(/7/, '1');
console.log(total2);
function getDifference (total1, total2){
    return Math.abs(total1 - total2);
}
console.log(getDifference(total1,total2))
}
    
// task 7
{
let str = "din";
function findDublicate (word) {
    word = word.toLowerCase().split("");
    let key = {}, result = "";
    for (let i = 0; i < word.length; i++) {
        if (key[word[i]] == undefined) key[word[i]] = 1;
        else key[word[i]]++
}
for (let k = 0; k < word.length; k++) {
    if (key[word[k]] == 1) result += "(";
    else result += ")";
}
return result
}
findDublicate("din");
findDublicate("recede");
findDublicate("Success");
findDublicate("(( @");
}   
// 
    
// task 7 - another decision
{
function findDuplicate(word) {
    return word
    .toLowerCase()
    .split('')
    .map (function (a, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}
findDublicate("Success");
}