console.log('Task 1');

function getSum(max) {
    let result = 0;
    for (let index = 0; index <= max; index++) {
        result += index;  
    }
    return result;
}

console.log('Ответ: ' + getSum(100));

console.log('Task 2');

function overPayment(creditAmount) {
    const perInYear = 0.17;
    const years = 5;
    let result = Math.round(creditAmount * perInYear * 5);
    return result;
}

console.log('Ответ: ' + overPayment(10000));

console.log('Task 3');

function trimString(str, start, end) {
    let result = '';
    for (let index = start; index < end; index++) {
        result += str[index]; 
    }
    return result;
}

console.log('Ответ: ' + trimString('Hello World!', 0, 8));

console.log('Task 4');

function getSumNumbers(num) {
    num += '';
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += +num[index];
    }
    return sum;
}

console.log('Ответ: ' + getSumNumbers(195690));

console.log('Task 5');

function getSumSecond(a, b) {
    let min = null;
    let max = null;
    let sum = 0;
    if (a > b) {
        max = a;
        min = b;
    } else if (a < b) {
        min = a;
        max = b;
    } else {
        return a;
    }
    for (let index = min; index <= max; index++) {
        sum += index;
    }
    return sum;
}

console.log('Ответ: ' + getSumSecond(-1, 3));

console.log('Task 6');

function foo() {
    console.log(foo.name)
}

function boo() {
    console.log(boo.name)
}

function fooboo(bool, funcOne, funcTwo) {
    if (bool) {
        funcOne();
    } else {
        funcTwo();
    }
}

fooboo(false, foo, boo);

console.log('ADVANCED level');
console.log('Task 1');

function createTriangle(a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    let middle = a + b + c - min - max;

    if (min + middle > max) {
        console.log('Треугольник построить можно');
        return true;
    } else {
        console.log('Треугольник построить нельзя');
        return false;
    }
}

console.log('Ответ: ' + createTriangle(14, 12, 28));

console.log('Task 2');

function breakChoco(a, b) {
    let result = (a - 1) + ((b - 1) * a);
    return result;
}

console.log('Ответ: ' + breakChoco(4, 4));

console.log('Task 3');

const phonePrice = 399;
const accPrice = 99;
const tax = 0.2;
let bankAccount = 5000;

function sumPrice() {
    let result = 0;
    let priceAll = 0;
    while (result < bankAccount) {
        let price = 0;
        price = phonePrice + accPrice;
        result = price + taxAmount(price);
        priceAll += result;
        console.log(formatPrice(result))
        if (result < bankAccount) {
            bankAccount -= result;
        } else {
            break; 
        }
    }
    console.log('Вы потратили: ' + formatPrice(priceAll));
    console.log('Остаток на счету: ' + formatPrice(bankAccount));
}

function taxAmount(price) {
    let priceWithTax = price * 0.2;
    return priceWithTax;
}

function formatPrice(price) {
    price = `${price.toFixed(2)} руб.`;
    return price;
}

sumPrice();
