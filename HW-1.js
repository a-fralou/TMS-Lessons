console.log('Task 1 Создайте переменные, затем сложите их и выведите результат в консоль разработчика. let x = 20, let y = 58, let z = 42');

let x = 20;
let y = 58;
let z = 42;

console.log('Ответ: ' + x + y + z);

console.log('Task 2 Создайте переменные: количество секунд в минуте, количество минут в часу, количество часов в сутках, количество суток в году');
console.log('Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds');

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;
let myAgeInYears = 29;
let myAgeInSeconds = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log('Ответ: ' + myAgeInSeconds);

console.log('Task 3 Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число.');
console.log('Попробуйте реализовать задачу двумя разными способами.');

let count = 42;
let userName = '42';

let countToString = '' + count;
let userNameToNumber = +userName;

console.log('Ответ: ' + typeof countToString + ' ' + countToString);
console.log('Ответ: ' + typeof userNameToNumber + ' ' + userNameToNumber);

let countToString2 = String(count);
let userNameToNumber2 = Number(userName);

console.log('Ответ: ' + typeof countToString2 + ' ' + countToString2);
console.log('Ответ: ' + typeof userNameToNumber2 + ' ' + userNameToNumber2);

console.log('Task 4 Имеется три переменные: let a = 1, let b = 2, let c = "белых медведей"');
console.log('Сложите переменные так, чтобы в результате получилось выражение: `12 белых медведей` и результат выведите в консоль.');

let a = 1;
let b = 2;
let c = "белых медведей";

let result = a + '' + b + ' ' + c;

console.log('Ответ: ' + result);

console.log('Task 5 Создайте переменные и поместите в них нижеприведенные слова.');
console.log('Затем создайте еще одну переменную `lengthWords` и посчитайте в ней длину всех слов из списка:');
console.log('доступ, морпех, наледь, попрек, рубило');

let k = 'доступ';
let l = 'морпех';
let m = 'наледь';
let d = 'попрек';
let g = 'рубило';

let lengthWords = k.length + l.length + m.length + d.length + g.length;

console.log('Ответ: ' + lengthWords);

console.log('Task 6 Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:');
console.log(`Variable: %variable name% have type: %type variable%`);

let firstVar = null;
let secondVar = 12;
let thirdVar = 'Hi!';

console.log('Ответ: ' + `Variable: firstVar have type: ${typeof firstVar}`);
console.log('Ответ: ' + `Variable: secondVar have type: ${typeof secondVar}`);
console.log('Ответ: ' + `Variable: thirdVar have type: ${typeof thirdVar}`);

console.log('Task 7 Запросить у пользователя имя и возраст и вывести их в консоль.');

let nameUser = prompt("Введите ваше имя:")
let age = prompt("Введите ваш возраст:")

console.log('Ответ: ' + `Имя: ${nameUser}, возраст: ${age}`)

console.log('Advanced level');
console.log('Task 1 Поменяйте значение переменных местами не создавая дополнительной переменной:');

let aVar = 4;
let bVar = 3;

[aVar, bVar] = [bVar, aVar];

console.log('Ответ: ' + aVar)
console.log('Ответ: ' + bVar)

console.log('Task 2 В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!');
console.log('Создайте переменную `cipher` и поместите туда необходимые символы')

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);

console.log('Ответ: ' + cipher);

