"use strict"
// Part 1
// task 1 
{
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);
}
// 
    
// task 2 
{
let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;
let myAgeInSeconds = 22;
alert(seconds * minutes * hours * days * myAgeInSeconds);
}
// 
    
// task 3 
{
let count = 42;
let userName = '42';
count = '42'
userName = 42
alert(count , userName);
}
// 
    
// task 3 - another decision 
{
let count = 42;
let userName = '42';
count = String(count);
typeof(count);
userName = Number(userName);
typeof(userName);
}
// 
    
// task 4
{
let a = 1;
let b = 2;
let c = "белых медведей";
a = "1";
b = "2";
c = "белых медведей";
console.log(a + b + ' ' + c);
}
 // 
    
// task 5
{
let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";
let lengthWords;
lengthWords = (a + b + c + d + e);
lengthWords.length;
}
// 
    
// task 6
{
let favoriteColor = "lilac";
let herAge = 53;
let hisSchedule = null;
`Variable:favoriteColor have type:${typeof favoriteColor}`
`Variable:herAge have type:${typeof herAge}`
`Variable:hisSchedule have type:${typeof hisSchedule}`
}
// 
    
// task 7
{
let userName = prompt("Please enter your name");
console.log(userName);
let userAge = prompt("Please enter your age");
console.log(userAge);
 }
// 
    
// task 7 - another decision
{
let userInfo = ["userName", "userAge"];
prompt(userInfo[0] = "Please enter your name");
prompt(userInfo[1] = "Please enter your age");
}
// 
    
// task 8
{ 
let a = 4;
let b = 3;
console.log(a,b);
a = a^b;
b = a^b; 
a = a^b;
console.log(a,b);
}
// 
    
// task 9
{
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher;
cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log(cipher);
}
// 
    
// Part 2
// task 1
{
let nameFieldChecked = true;
typeof(nameFieldChecked);
let ageFieldChecked = false;
typeof(ageFieldChecked);
let hisAge = 17;
typeof(hisAge);
let yourName;
typeof(yourName);
let language = null;
typeof(language);
}
// 
    
// task 2
{
let height = 15;
let width = 20;
Math.max(height, width);
}
// 
    
// task 3
{
let a = 20;  
for (let x = 1; x <= a; x++) { 
    if (x % 3 === 0) { 
        console.log(x); 
    } 
}
}
// 
    
// task 4
{
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);
}
// 
   
// task 5 - first decision
{
function task(numb) {
    if (numb%5 === 0 && numb%3 === 0) {
        return "FizBuz";
    }
    else if (numb%5 === 0) {
    return "Fiz";
    }
    else if (numb%3 === 0) {
    return "Buz";
    }
}
task(5);
}
// 

//  task 5 - second decision 
{
function task(numb) {
    let buz = numb%3 === 0 ? "Buz" : " ";
    let fiz = numb%5 === 0 ? "Fiz" : " ";
    return fiz + buz;
}
let number = prompt("Пожалуйста,введите ваше число");
task(number);
}
// 
    
//  task 5 - third decision 
{
function task(numb) {
    if (numb%5 === 0 && numb%3 === 0) {
        return "FizBuz";
    }
    if (numb%5 === 0) {
        return "Fiz";
    }
    if (numb%3 === 0) {
        return "Buz";
    }
}
let number = prompt("Пожалуйста,введите ваше число");
console.log(task(number));
}   
// 
   
// task 6
{
let permittedAge = 18;
let userAge = prompt("Пожалуйста, введите ваш возраст");
    if (userAge < permittedAge) {
        alert("Пей колу");
    } 
    else if (userAge >= 16 && userAge <= permittedAge) {
        alert("Можешь выкурить сигаретку, только маме не говори");
    }
    else if (userAge >= permittedAge) {
        alert("Попей пивка");
    } 
}

//  task 6 - another decision
{
let userAge = prompt("Пожалуйста, введите ваш возраст");
let message = (userAge >= 18) ? "Попей пивка" : (userAge < 1) ? "Ошибка" : "Пей колу";
alert(message);
if(userAge >= 16 && userAge <= 18) {
    alert("Можешь выкурить сигаретку, только маме не говори");
}
}
 // 

//  task 6 - another decision
{
let userAge = prompt("Пожалуйста, введите ваш возраст");
if(userAge >= 18) {
    alert("Попей пивка");
} else {
    if (userAge < 1) {
        alert("Error");
    } else {   
        alert("Пей колу");
    }
} 
if(userAge >= 16 && userAge <= 18) {
    alert("Можешь выкурить сигаретку, только маме не говори");
}
}
// 
    
// task 7
{
let userQuestion = prompt("В какую сторону света вы направитесь?");
switch (userQuestion) {
    case "south":
        alert("на юг пойдешь счастье найдешь");
        break;
    case "north":
        alert("на север пойдешь много денег найдешь");
        break;
    case "west":
        alert("на запад пойдешь верного друга найдешь");
        break;
    case "east":
        alert("на восток пойдешь разработчиком станешь");
        break;
    default:
        alert("Попробуйте еще раз");
}
}
// 
    
// task 8
{
const wrongSentence = "пОлИнА нАбЕрЕжНаЯ";
let lowerString = wrongSentence.toLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let secondCharacter = lowerString[7];
let secondCharacterUpper = secondCharacter.toUpperCase();
let anotherCharacters = firstCharacterUpper + lowerString.slice(1,7) + secondCharacterUpper + lowerString.slice(8);
let welcome = "Привет, " + anotherCharacters + "!";
alert(welcome);
}
// 

// task 8 - another decision
{
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
{
const wrongSentence = "пОлИнА нАбЕрЕжНаЯ";
let tempString = wrongSentence.toLowerCase().split(' ');
let result = "";
for ( let i = 0; i < tempString.length; i++ ) {
    result += capitalize(tempString[i]) + (i < tempString.length - 1 ? " " : "")
}
console.log("Привет, " + result + "!");
}
// 

}
// task 9
{
let userNumber = +prompt("Пожалуйста,введите ваше число");
let subtraction = +prompt("Сколько отнять от предыдущего числа?");
let addition = +prompt("Cколько прибавить к числу?");
let multiplication = +prompt("На сколько умножить число?");
let division = +prompt("На сколько разделить число?");
let getSum = ((((userNumber - subtraction) + addition) * multiplication) / division);
let sum = ((((userNumber +  "-" + subtraction) + "+" + addition) + "*" + multiplication) + "/" + division);
let result = alert(sum + "=" + getSum);
}
//  

//  task 10
{
for(let i = 0; i < 7; i++){
    for(let j = 0; j< i; j++){
        document.write("#");
    }
document.write("<br/>");
}
}
// 

// Part 3 - Functions
// task 1
{
function getSum(n) {
    let Sum = 0;
    for (let i = 1; i <= n; i++) {
        Sum += i;
        }
    return Sum;
    }
    alert( getSum(50) );   
}
//   
    
 // task 2 !!!!!!!
// {    в месяц 16.6p => 24.85p. 24.85 за 60 мес = 149.1p
{  
    function calcLoan(sum, percent, months) {
        let sum = 1000;
        let percent = 17;
        let months = 60;
    console.log()    
    }
    calcLoan()
}
    
{
    let payForMonth = sum*(percent/(12*100))/(1-(1+percent/(12*100))**(-month)); 
//         let overPay = Math.floor(payForMonth*month - sum);

{
function calcLoan(sum, percent, month) {
    // let sum = 1000;
    // let percent = 17;
    // let months = 60;
    let payForMonth = sum*(percent/(12*100))/(1-(1+percent/(12*100))**(-month)); 
console.log(payForMonth)    
}
calcLoan(1000, 17, 60)

}
}



  {
    {
        function calcLoan(sum, percent, month) {
            // let sum = 1000;
            // let percent = 17;
            // let months = 60;
            let payForMonth = sum * percent/(1-(1+percent/(12*100))**(-month)); 
        console.log(payForMonth)    
        }
        calcLoan(1000, 17, 60)
        let overPay = Math.floor(payForMonth*month - sum);
        }
  }


// 
    
// task 3
{
let question = "      What's up?        ";
console.log(question);
console.log(question.trim());
}


// !!!!!!!!!!!!! - посмотреть
{
    function trimString(str, from, to) {
        const result = str.slice(from, to);
        return result;
    }
    console.log(trimString("Большое предложение много слов пятое десятой", 4 ,15))



{
    function trimString(str, fromStr) {
        console.log(str.lastIndexOf(fromStr))
        return str.slice(str.lastIndexOf(fromStr) + fromString.length).trim();
        }
    }
    console.log(trimString("Большое предложение много слов пятое десятой","много"))
}



// 

//  task 4 
{
function getSumNumbers(num) {
        let sum = 0, tmp;
        while (num) {
            tmp = num % 10;
            num = (num - tmp) / 10;
            sum += tmp;
        }
        return sum;
    }
    alert(getSumNumbers(2021));
}
// 

// task 5 
{
function getSum(a,b) { 
    let sum = 0;
    for (let i = a; i <= b; i ++) {
        sum += i;
    }  
    return sum; 
    }
    console.log(getSum(4,7));
}
{
function getSum(a,b) { 
    let sum = 0;
    for (let i = b; i <= a; i ++) {
        sum += i;
    }  
    return sum; 
    }
    console.log(getSum(2,1));
}

// сделать с помощью одного цикла


// 

// task 6
{
function fooboo () {
    let a = prompt("введи слово");
    if (a == "foo") {
    alert("foo")
    } else if (a == "boo") {
        // console.log("boo");
        alert("boo");
    }
}
fooboo()
}

// task 6 - another decision
{
function fooboo () {
    let a = prompt("Пожалуйста, введите слово");
    if (a == "foo") {
        return a;
    } else if (a == "boo") {
        return a;
    }
}
fooboo()
}
// 

// task 7
{
let arr = new Array(3);
for( let i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
}
function triangle(arr){
// alert ( arr[0] == Number.isInteger  &&  arr[1] == Number.isInteger && arr[3] == Number.isInteger ||  arr[0] !== Number.isInteger &&  arr[0] !== Number.isInteger && arr[0] !== Number.isInteger)
if (Number.isInteger(arr[0]) && Number.isInteger(arr[1]) && Number.isInteger(arr[2])) {
return "true";
}
return "false";
}
triangle(arr);
}
// 
 
// task 7 - another decision;
{
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
}
function triangle(arr){
    if ( Number.isInteger(arr[0]) &&  Number.isInteger(arr[0]) && Number.isInteger(arr[0])) {
        alert("true");
}
if ( !Number.isInteger(arr[0]) &&  !Number.isInteger(arr[0]) && !Number.isInteger(arr[0])) {
    alert("false");
}
    }
triangle(arr);
}
// 

// task 7 - не работает
// ?????
{ 
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
    }
function triangle(arr){
    arr[0] = (Number.isInteger(10/5)) ? true: false;
    arr[1] = (Number.isInteger(10/5)) ? true: false;
    arr[2] = (Number.isInteger(10/5)) ? true: false;
// alert(Boolean(arr[0])(arr[1])(arr[2]));
alert( Boolean(arr) );
}
triangle(arr);
}
// 

// task 8
{

}
// 

// task 9
{

}
// 


// Part 4 - Objects
// task 1
{
let corgi = {
    name : "Patrick",
    theBestInTheWorld : true
}
delete corgi.name;
'name' in corgi
delete corgi.theBestInTheWorld;
'theBestInTheWorld' in corgi
}
// 

// task 2 
{
let movies = {
    name : "Harry Potter",
    amount : 8
};
console.log("name" in movies);
console.log("amount" in movies);
}
// 

// task 3 
{
const student = {
    name: 'John',
    age: 19,
    isHappy: true
    };
for (let key in student) {
    console.log(key);
    console.log(student[key])
}
}
// 

// task 4 
{
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };
    function findColor() {
        console.log($this.red);
    }
    colors['ru pum pu ru rum'].red;
    
}

{
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    findColor() {
        console.log(this.red);
    }
    };
    colors['ru pum pu ru rum'].red;
}

{
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
function findColor() {
    return ("${this.red}");
}
colors['ru pum pu ru rum'].red;
}


{
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
findColor() {
    console.log(this.red);
}
};
colors.red();
}
// 

// task 5
{
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    zhenya: 664,
    alexandra: 199
    };
    let sum = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
    let averageSalary = 0;
    let guys = 5;
    for (let key in salaries) {
        averageSalary = sum / guys;
      } 
    alert(averageSalary);
}
// 

// task 6
{
let userName = prompt("Please enter your login");
let userPassword = prompt("Please enter your password");
let userData = {
    userName: "Expecto Patronum",
    userPassword: "Avada Kedavra"
}
if (userName == "Expecto Patronum" && userPassword == "Avada Kedavra") {
        alert ("Добро пожаловать");
    }
}
// 

// task 6 - another decision
{
let userName = prompt("Please enter your login");
if (userName == "Expecto Patronum") {
    let userPassword = prompt("Please enter your password");
    if (userPassword == "Avada Kedavra") {
        alert ("Добро пожаловать");
    }
}
}
// 

// task 6 another decision
{
let userData = {
    login: "Expecto Patronum",
    password: "Avada Kedavra"
    }
let login = prompt("Please enter your login");
if (login == "Expecto Patronum") {
    let password = prompt("Please enter your password");
    if (password == "Avada Kedavra") {
        alert ("Добро пожаловать");
    }
}
}
// 

// task 7- правильно ли поняла?
{
let goalCount = 9;
let count = "2:5";
let i = 0;
if (i > 9) {
    i++;
}
console.log(count);
console.log(typeof(+count));
}
// 

//  task 8
{
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2));
}
// 

//  task 9
{
const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}
console.log(Object.hasOwn(animals, 'bird'));
}
// 

// task 9 - another decision
{
 const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}
console.log(animals, 'bird'); 
}
// 

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
    // console.log(animals[animals.length - 1]); - another decision
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
const addNum = binary.map(x => x + '1');
console.log(addNum.toString());
}
// 

// task 7 - second decision
{
const binary = [0, 0, 0, 0]
const addNum = binary.join('1');
console.log(addNum);
}
// 

//  task 8 - first decision
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
checkPalindrom('racecar');
}
// 

// task 8 - second decision
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
checkPalindrome('racecar');
}
// 

// task 9 (6272.6625)
{
 const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
const FIRST_SUM = matrix[0][0] + matrix[0][1] + matrix[0][2] + matrix[0][3] + matrix[0][4];
const FIRST_AVERAGE_NUM = FIRST_SUM / matrix[0].length;
const SECOND_SUM = matrix[1][0] + matrix[1][1] + matrix[1][2] + matrix[1][3] + matrix[1][4];
const SECOND_AVERAGE_NUM = SECOND_SUM / matrix[1].length;
const THIRD_SUM = matrix[2][0] + matrix[2][1] + matrix[2][2] + matrix[2][3];
const THIRD_AVERAGE_SUM = THIRD_SUM / matrix[2].length;
const FOURTH_SUM = matrix[3][0] + matrix[3][1] + matrix[3][2] + matrix[3][3];
const FOURTH_AVERAGE_SUM = FOURTH_SUM / matrix[3].length;
const AVERAGE_NUM = (FIRST_AVERAGE_NUM + SECOND_AVERAGE_NUM + THIRD_AVERAGE_SUM + FOURTH_AVERAGE_SUM) / matrix.length;
console.log(AVERAGE_NUM);
}
// 

// task 9 - another decision (5582)
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
console.log(sum);
console.log(newMatrix);
console.log(AVERAGE_NUM);
}
// 

//  task 10 
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

//  task 11 
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

// task 11
let a = []
let limitCount = 10

function createRandom(limit) {
    for (let i = 0; i < limit; i++) {
        let randomCount = Math.round(Math.random() * 10)
        a.push(randomCount)
        // if (a.find(el => el === randomCount)) { // если randomCount есть в массиве собрать новое число
        //     console.log(Math.round(Math.random() * 10))
        //     // a.push(randomCount)
        // } else {
        //     a.push(randomCount)
        // }
    }
console.log(a)
    let newArr = Array.from(new Set(a))
    a = newArr
    if (a.length === limitCount) {
        console.log(newArr)
        return newArr
    } else {
        createRandom(limitCount - newArr.length)
    }
}
createRandom(limitCount)
// 

// Part 6 - Functions (2)
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
    const Student = {
        salary: 3000,
        rate: 'A',
        name: Kate,
    }
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
}

// task 2
{
let disemvowel = (str) => str.replace(/[aeiou]/gi, '')
console.log(disemvowel('This website is for losers LOL!»'));
}
// 

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