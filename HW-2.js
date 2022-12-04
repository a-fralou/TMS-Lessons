console.log('Task 1')

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let f = null;

console.log('Ответ: ' + typeof a);
console.log('Ответ: ' + typeof b)
console.log('Ответ: ' + typeof c)
console.log('Ответ: ' + typeof d)
console.log('Ответ: ' + typeof f)

console.log('Task 2')

let height = 15;
let width = 20;

if (height > width) {
    console.log('Ответ: ' + height);
} else {
    console.log('Ответ: ' + width);
}

console.log('Task 3')

for (let index = 1; index <= 20; index++) {
    if (index % 3 === 0) {
        console.log('Ответ: ' + index);
    }  
}

console.log('Task 4')

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = false;

if (key && documents && pen && (apple || orange)) {
    shouldGoToWork = true;
    console.log('Ответ: ' + 'shouldGoToWork' + ` ${shouldGoToWork}`)
} else {
    shouldGoToWork = false;
    console.log('Ответ: ' + 'shouldGoToWork' + ` ${shouldGoToWork}`)
}

console.log('Task 5')

// let num = +prompt('введите число');
let num = 15;

if (num % 3 == 0 && num % 5 == 0) {
    console.log('Ответ: ' + 'FizBuz');
}
else {
    if (num % 3 == 0) {
        console.log('Ответ: ' + 'Buz');
    }

    if (num % 5 == 0) {
        console.log('Ответ: ' + 'Fiz');
    }
}

console.log('Task 6')

// let age = +prompt('введите ваш возраст');
let age = 17;
if (age > 18) {
    // alert('Попей пивка');
    console.log('Попей пивка');
}
else {
    // alert('Пей колу');
    console.log('Пей колу');
  if (age >= 16 && age <= 18) {
    // alert('Можешь выкурить сигаретку, только маме не говори');
    console.log('Можешь выкурить сигаретку, только маме не говори');
  }
}

console.log('Task 7')

// let sideOfEarth = prompt('введите направление');
let sideOfEarth = 'юг';

switch (sideOfEarth) {
  case 'юг':
    console.log( `${sideOfEarth} на юг пойдешь счастье найдешь` );
    break;
  case 'север':
    console.log( `${sideOfEarth} на север пойдешь много денег найдешь` );
    break;
  case 'запад':
    console.log( `${sideOfEarth} на запад пойдешь верного друга найдешь` );
    break;
  case 'восток':
    console.log( `${sideOfEarth} на восток пойдешь разработчиком станешь` );
    break;
  default:
    console.log( `Попробуйте еще раз` );
}

console.log('ADVANCED level')
console.log('Task 1')

let userName = 'пОлИнА нАбЕрЕжНаЯ';

userName = userName.toLowerCase();

let splits = userName.split(' ');

userName = '';

for (let index = 0; index < splits.length; index++) {
    userName += splits[index].charAt(0).toUpperCase() + splits[index].slice(1);
    if (splits[index + 1]) {
        userName += ' ';
    }   
}

console.log(userName);

console.log('Task 2')

// let amount = +prompt('введите число');
let amount = 12;
let expression = '';
let currentNum = null;
let total = null;
for (let index = 0; index < 4; index++) {
  if (index === 0) {
    // currentNum = +prompt('сколько отнять?');
    currentNum = 10;
    total = amount - currentNum;
    expression = `(${amount} - ${currentNum})`;
  }
  if (index === 1) {
    // currentNum = +prompt('сколько прибавить?');
    currentNum = 2;
    total += currentNum;
    expression = `(${expression} + ${currentNum})`;
  }
  if (index === 2) {
    // currentNum = +prompt('на сколько умножить?');
    currentNum = 3;
    total *= currentNum;
    expression = `(${expression} * ${currentNum})`;
  }
  if (index === 3) {
    // currentNum = +prompt('на сколько разделить?');
    currentNum = 3;
    total /= currentNum;
    expression = `(${expression} / ${currentNum} = ${total})`;
    // alert(expression);
    console.log(expression);
  }
}

console.log('Task 3')

let lattice = '#';

for (let index = 0; index < 10; index++) {
    if (index === 0) {
      console.log(lattice);
    }
    else {
      console.log(lattice += '#');
    }
}
