console.log("Task 1");

let obj = {
    name: 'Andrew',
    age: 29
}

delete obj.name;
delete obj.age;

console.log(obj);

console.log("Task 2");

let obj2 = {
    name: 'Andrew',
    age: 29
}
console.log(obj2.hasOwnProperty('age'));

console.log("Task 3");

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (const key in student) {
    console.log(key);
}

for (const key in student) {
    console.log(student[key]);
}

console.log("Task 4");

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

console.log("Task 5");

let salaries = {
    alex: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

const averageSalary = function (obj) {
    let count = 0;
    let tempSum = 0;
    for (let key in obj) {
        tempSum += obj[key];
        count++;
    }
    let result = tempSum / count;
    return result;
}

console.log(averageSalary(salaries));

console.log("Task 6");

// const login = prompt("Введите логин...");
// const password = prompt("Введите пароль...");
const login = 'andrey';
const password = '12345677';

let loginObj = {};

loginObj.login = login;
loginObj.password = password;

// const againLogin = prompt("Повторите логин...");
// const againPassword = prompt("Повторите пароль...");
const againLogin = 'andrey';
const againPassword = '12345678';

if (loginObj.login === againLogin && loginObj.password === againPassword) {
    console.log('Добро пожаловать')
} else {
    console.log('Попробуйте еще раз')
}

console.log("ADVANCED level");
console.log("Task 1");

const num = {
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять'
}

const matchScore = '9:5';

function scoreConverter(score) {
    let result = '';
    for (let index = 0; index < score.length; index++) {
        if (num.hasOwnProperty(score.charAt(index))) {
            result += num[score.charAt(index)]
        } else {
            result += score.charAt(index);
        }
    }
    return result;
}

console.log(scoreConverter(matchScore));

console.log("Task 2");

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2));

console.log("Task 3");

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

//  console.log(animals.bird.name);

 console.log(animals?.bird?.name);