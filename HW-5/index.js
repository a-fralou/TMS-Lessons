// тут делаем дз

console.log('Task 1');

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

console.log('Task 2');

const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length - 1]);

console.log('Task 3');

const numbers = [5, 43, 63, 23, 90];
const numbers1 = [5, 43, 63, 23, 90];

console.log('Method 1');

function deleteNum(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        arr.pop();
    }
    return arr;
}

deleteNum(numbers);
console.log(numbers);

console.log('Method 2');

numbers1.splice(0, numbers1.length);

console.log(numbers1);

console.log('Task 4');

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();

students.push('Borya');

students.shift();

students.unshift('Andrey');

console.log(students);

console.log('Task 5');

const cats = ['Gachito', 'Tom', 'Batman'];

for (let index = 0; index < cats.length; index++) {
    console.log(cats[index]); 
}

for (const cat of cats) {
    console.log(cat); 
}

console.log('Task 6');

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers);

console.log(allNumbers.indexOf(8));

console.log('Task 7');

const binary = [0, 0, 0, 0];

const stringBinary = binary.join('1');

deleteNum(binary);

function createBinary(str, arr) {
    for (let index = 0; index < str.length; index++) {
        arr.unshift(+str[index]);
    }
    return arr;
}

console.log(createBinary(stringBinary, binary));

console.log('Advanced level');

console.log('Task 1');

let word = 'манекенам';

function palyndrome(word) {
    for (let index = 0; index <= Math.round(word.length / 2); index++) {
        if (word[index] !== word[word.length - 1 - index]) {
            return false;
        }
        
    }
    return true;
}

console.log(palyndrome(word));

console.log('Task 2');

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]


function average (arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let t = 0; t < matrix[i].length; t++) {
            sum += matrix[i][t];
            count++;
        }
    }
    let result = sum / count;
    return result;
}

console.log(average(matrix));

console.log('Task 3');

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

const posNums = [];
const negNums = [];

for (const num of mixedNumbers) {
    if (num <= 0) {
        negNums.push(num);
    }
    else {
        posNums.push(num);
    }
}

console.log(posNums);
console.log(negNums);

console.log('Task 4');

const arr = new Array(5);

for (let index = 0; index < arr.length; index++) {
    arr[index] = Math.round(Math.random() * 100);
}

console.log(arr);

const newArr = arr.map((el) => Math.pow(el, 3))

console.log(newArr);
