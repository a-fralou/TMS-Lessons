// NORMAL level
// #1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// arrow function

fibonacci.forEach(el => console.log(el));

// function declaration

fibonacci.forEach(getFibonacci);

function getFibonacci(el) {
	console.log(el);
};

// #2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// arrow function

let arrInTask2 = users.map((el, i) => `member ${++i}: ${el}`);

console.log(arrInTask2);

// function declaration

let arrInTask2_1 = users.map(getUsers);

function getUsers(el, i) {
	let str = `member ${++i}: ${el}`;
	return str;
}

console.log(arrInTask2_1);

// #3

const numbers = [7, -4, 32, -90, 54, 32, -21];

// arrow function

let newNumInTask3 = numbers.filter(el => el > 0);

console.log(newNumInTask3)

// function declaration

let newNumInTask3_2 = numbers.filter(getNum);

function getNum(el) {

	if (el > 0) {
		return el
	}

}

console.log(newNumInTask3_2)

// #4

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// arrow function

let arrInTask4 = fibonacci.reduce((accum, el) => accum + el);

console.log(arrInTask4);

// function declaration

let arrInTask4_2 = fibonacci.reduce(getFibonacciInTask4);

function getFibonacciInTask4(accum, el) {
	let sum = accum + el;
	return sum;
};

console.log(arrInTask4_2);

// #5 

// arrow function

const numbersInTask5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let newNumInTask5 = numbersInTask5.find(el => el % 2 <= 0);
// не уверена насчет "<=", но просто "=" подсвечивалось красным

console.log(newNumInTask5)

// function declaration

let newNumInTask5_2 = numbersInTask5.find(getNum)

function getNum(el) {

	if (el % 2 <= 0) {
		return el
	}
}

console.log(newNumInTask5_2)

// ADVANCED level

// #1

function Students(person) {
	this.student = person;
	let credit = []

	for (let i = 0; i < this.student.length; i++) {
		let newArr = credit.push(countRate(this.student[i].rate, this.student[i].salary))
		// console.log(countRate(this.student[i].rate, this.student[i].salary))
	}

	this.allCredits = () => credit.reduce((accum, el) => accum + el)
}

function countRate(rate, salary) {
	let maxCredit;

	if (rate == 'A') {
		maxCredit = salary * 12;
	} else if (rate == 'B') {
		maxCredit = salary * 9;
	} else if (rate == 'C') {
		maxCredit = salary * 6;
	} else if (rate == 'D') {
		maxCredit = 0;
	}

	return maxCredit
}

let stud = new Students([{
	salary: 1500,
	rate: 'C',
	name: 'Lena'
},
{
	salary: 1500,
	rate: 'A',
	name: 'Lesha',
},
{
	salary: 1000,
	rate: 'D',
	name: 'Kostya',
},
{
	salary: 1200,
	rate: 'C',
	name: 'Dasha',
},
{
	salary: 1500,
	rate: 'B',
	name: 'Andrew',
},
])

console.log(stud.allCredits())


// #2

// вариант из гугла:

// let str = 'This website is for losers LOL!';
// let removeVowels = (el) => el.replace(/[euioa]/gi, '')
// console.log(removeVowels(str));

let str = 'This website is for losers LOL!';

let deliteVowels = (str) => {
	let newStr = str.split('')

	for (let i = 0; i < newStr.length; i++) {

		if (newStr[i] == 'a' || newStr[i] == 'e' || newStr[i] == 'u' || newStr[i] == 'i' || newStr[i] == 'o') {
			newStr[i] = ''
		}

	}

	let string = newStr.join('')
	return string
}

console.log(deliteVowels(str))

// #3

// вариант из гугла:

// const accum = str => str
//   .split('')
//   .map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1))
//   .join('-');

// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"

let string = 'abcd'

let toStrangeString = str => {
	str = str.toLowerCase().split('')
	let newStr = str.map((el, i) => el.charAt(0).toUpperCase() + el.repeat(i + 1).toLowerCase().slice(1))
	let finalStr = newStr.join('-')

	return finalStr
}

console.log(toStrangeString(string))

// #4

let stringWithNumbers = "1 9 3 4 -5"

let getMaxAndMinNums = str => {
	str = str.split(' ')
	let maxNum = Math.max(...str)
	let minNum = Math.min(...str)
	let numbers = `${maxNum} ${minNum}`
	return numbers
}

console.log(getMaxAndMinNums(stringWithNumbers))

// #5

// вариант из гугла:

// const Isogram = word => {
// 	word = word.toLowerCase().split('')
// 	const result = word.reduce((accum, el) => {

// 		if (!accum.includes(el)) {
// 			accum.push(el)
// 		}

// 	  return accum;
// 	}, []);

// 	return result.length === word.length;
// }

//  console.log(Isogram("Dermatoglyphics"))
//  console.log(Isogram("aba"))
//  console.log(Isogram("moOse"))

// мой вариант

let isIsogram = "Dermatoglyphics"
let isNotIsogram = "aba"
let isNotIsogram2 = "moOse"

let checkIsogram = str => {
	let arr = str.toLowerCase().split('')
	let newArr = (checkRepeat(arr))
	let result
	let a = newArr.find(el => el == 0)

	if (a == undefined) {
		result = "is isogram"
	} else {
		result = "isn't isogram"
	}

	return result
} 

function checkRepeat(arr) {
	let result = []

	for (let i = 0; i < arr.length; i++) {
		let el = arr[i]

		if (arr.indexOf(el) == arr.lastIndexOf(el)) {
			result.push(1)
		} else {
			result.push(0)
		}
		
	}

	return result
}

console.log(checkIsogram(isIsogram))
console.log(checkIsogram(isNotIsogram))
console.log(checkIsogram(isNotIsogram2))

// #6

const strInTask6 = 'ABC';

let getDifference = str => {
	let letters = Array.from(str)
	let total1 = letters.map(el => el.charCodeAt(0));
	total1 = total1.join(''); 
	let total2 = total1.replace(7, 1).split('');
	total1 = total1.split('');
	return difference(sumOfNums(total2), sumOfNums(total1));
}

let difference = (el1, el2) => el1 > el2 ? el1 - el2 : el2 - el1;
let sumOfNums = el => el = el.reduce((accum, el) => accum + +el, 0);

console.log(getDifference(strInTask6))

// #7

let strInTask7 = "(( @";
let strInTask7_2 = "din";

let changeStr = el => {
	el = el.toLowerCase().split('')
	let newArr = el.map(changeSymbol).join('')
	return newArr
}

let changeSymbol = (el, i, arr) => arr.indexOf(el) == arr.lastIndexOf(el) ? '(' : ')' 

console.log(changeStr(strInTask7))
console.log(changeStr(strInTask7_2))