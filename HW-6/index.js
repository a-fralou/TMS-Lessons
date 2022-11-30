// Task1
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// let show=(item) => console.log (item)//1 вариант
// fibonacci.forEach(show)

// 2 вариант
// function show(item){ 
//   console.log (item)
// }


//Task2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// 1 вариант - не идет перечисления
// let result = users.map (function (item){
//     for (let i = 1; i<=users.length;i++)
//     return `member ${i}: ` + item
// })
// console.log (result)

// 2 вариант - начинается с 0
// let result = (item,i) => console.log ( `member ${i}: ` + item)
// users.map(result)


//Task 3
// 1 вариант
// const numbers = [7, -4, 32, -90, 54, 32, -21]
// const positive = numbers.filter(number => number > 0);
// console.log(positive);

// 2 вариант - явно не так
// function positNumber(result){
//   result = [];
//   const numbers = [7, -4, 32, -90, 54, 32, -21]
//     for (number of numbers){
//       if (number >0){
//         result.push(number)
//       }
//     }
//   return result
// }

// console.log (positNumber())


// Task4
//1 вариант
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// const sum = fibonacci.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);

// 2 вариант
// let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// let sum = fibonacci.reduce(function(accumulator, currentValue){
//   return accumulator + currentValue}, 0 )
// console.log (sum)


// Task5
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// 1 вариант
// function chetn (i) {
//   return i % 2 == 0;
// }
// console.log(numbers.find(chetn));

// 2 вариант
// chetn = numbers.find((i)=> i % 2 == 0)
// console.log (chetn)
