// TASK1
// let getSum  = function(){
//     let num = +prompt('Введите число');
//     let a =0;
//     for (let i=0; i<=num; i++){
//         a = a+i;
//     }
//     return a;
// }
// let result = getSum();
// console.log(result);


// TASK2
// let sum = 0;
// let year =0;
// let percent = 0;
// let month = 0;
// let getOverpayment = function (sum){
//     year = +prompt('Введите количество лет');
//     month = year * 12;
//     percent = +prompt('Введите процент');
//     sum = +prompt('Введите сумму кредита');
//     let payForMonth = sum*(percent/(12*100))/(1-(1+percent/(12*100))**(-month));
//         let overPay = Math.floor(payForMonth*month - sum);
//         return overPay
// }

//     let result = getOverpayment();
//     console.log(result);


// TASK3
// let newString = '';
// let trimString = function(string, at, to){
//     string = prompt('Введите строку');
//     at = +prompt('Напишите с какого числа обрезать');
//     to = +prompt('Напишите до какого числа обрезать');
//     newString = string.slice(at,to)
//     return newString
// }
//     let result = trimString();
//     console.log(result);



// TASK4
// let getSumNumbers = function (){
//     let a = prompt('Введите число');
//     let c = 0;
//     for (let i=0; i<a.length; i++){
//         c = c + +a[i];
//     }
//     return c;
// }
// let result = getSumNumbers();
// console.log (result);


// TASK5
// let a;
// let b;
// function getSum(a, b) {
//     a = +prompt('Введите число a');
//     b = +prompt('Введите число b');
//     let sum = 0;
//     if (a < b){
//     for(let i = a; i <=b; i++) {
//       sum += i;
//     }
//     } else if (a > b){
//         for(let i = b; i<=a; i++) {
//             sum += i;
//           }
//     } else if (a===b){
//         sum=a;
//     }
//     else{
//         console.log('Что-то пошло не по плану')
//     }
//     return sum;
//   }
//   let result = getSum();
//   console.log(result )


// TASK6
// let bool;
// function fooboo() {
//     bool = true;
//     function foo() {
//       console.log('foo');
//     };

//     function boo() {
//         console.log('boo');
//     };
//     if(bool){
//         return foo();
//     } else {
//         return boo()
//     };
//   }
//   let result = fooboo();
// console.log(result) 


// ADVANCED TASK1 ТОЛЬКО ПРМЯМОУГОЛЬНЫЙ
//     let a = +prompt('Введите длину одной стороны');
//     let b = +prompt ('Введите длину второй стороны');
//     let c = +prompt('ВВедите длину третьей стороны');
// let getBuild = function(tr){
    
   
//     if(c**2==a**2+b**2){
//         return true;
//        } else {
//         return false;
//        }
// }
// let result = getBuild()
// console.log(result)

// ЛЮБОЙ ТРЕУГОЛЬНИК
// let a;
// let b;
// let c;
// let triangle = function(a,b,c){
//     a = +prompt('Введите длину стороны a');
//     b = +prompt('Введите длину стороны b');
//     c = +prompt('Введите длину стороны c');
//     if(a+b>c && a+c>b && b+c>a){
//         return true
//     } else{
//         return false
//     }
// } 
// let result = triangle();
// console.log(result);


// TASK 2
// let n;
// let m;
// let chocolate = function (n, m){
//     n = +prompt('Введите длину плитки');
//     m = +prompt('Введите ширину плитки');
//     if (n<=0 || m<=0){
//         return 0
//     }
//     if(n>=1 && m>=1){
//         return n*m-1;
//     }
// }
// let result = chocolate();
// console.log(result)



// TASK3
// const tax = 0.1;
// const phonePrice = 99.9;
// const accessoryPrice = 9.99;
// let balance = +prompt('Введите ваш баланс на банковском счете')
// console.log (`Сумма на вашем банковском счете, составляет: $${balance}`)
// let sum = 0;
// let count = 0;
// function calculateTax(sum) {
// 	return sum * tax;
// }

// function writeCurrency(firstSum, sum) {
// 	return "$" + firstSum.toFixed( 2 ) || "$" + sum.toFixed( 2 );
// }
// sum = sum + (phonePrice+accessoryPrice);
// sum = sum + calculateTax(sum);
// let firstSum = sum;
// console.log(`Ваша первая покупка ${writeCurrency(firstSum)}`)
// while(sum<=balance){
// sum = sum+firstSum;
//     console.log(`Ваша следующая покупка ${sum.toFixed( 2 )}`)
// }
// if (sum > balance) {
// 	sum = sum - firstSum;
//     console.log(`Если не покупать лишний телефон с аксессуаром, то покупка вам  обойдется в ${sum.toFixed( 2 )} `)

// }
