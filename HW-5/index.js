//МАССИВЫ

// let arr = [];
// for (let i = 1; i<=100; i++)
// arr.push(i)

// console.log (arr)
// let ind = arr.indexOf(50);
// console.log(ind);
// let numbers = arr.slice(ind);
// console.log (numbers)

// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// console.log (sum)


//Task1

// const colors = ['red', 'green', 'blue']
// console.log (colors.length)


//Task2

// const animals = ['monkey', 'dog', 'cat']

// console.log (animals.at(-1));
// console.log (animals.length -1 )


//Task3

// const numbers = [5, 43, 63, 23, 90]
// delete numbers[0];
// delete numbers[1];// и тд??

// numbers.splice(0);// вариант 2

// console.log (numbers)


//Task4
// const students = ['Polina', 'Dasha', 'Masha']
// students.pop(students.at(-1))
// students.push ('Borya');
// students.shift (0);
// students.unshift('Andrey')

// console.log (students)


//Task5
// const cats = ['Gachito', 'Tom', 'Batman']

// for (let i = 0; i<cats.length; i++){
//     console.log(cats[i])
// }

// for (let cat of cats){
  // console.log(cat)   
// }


//Task6
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const allNumbers = evenNumbers.concat(oddNumbers); 
//or
// const allNumbers = ([...evenNumbers,...oddNumbers])
// console.log (allNumbers.indexOf(8));

// console.log(allNumbers);


//Task7
// const binary = [0, 0, 0, 0];
// console.log(binary.join(1))


//Advanced
//Task1

// function palindrom (word) {

//   word = prompt('Введите слово','');
//   let reserved = word.split("").reverse().join("")

//   if (word === reserved)
//     console.log ('палиндром')
//   else console.log ('не палиндром')

//   return word
// }

// palindrom ()


//Task2 Выведите в консоль среднее значение чисел в многомерном массиве.
// const matrix = [
//   [12, 98, 78, 65, 23],
//   [54, 76, 98, 43, 65],
//   [13, 324, 65, 312],
//   [9092, 22, 45, 90000],
// ]

// let sum = 0;
// let arr = [].concat(...matrix); // объединяем в один массив
// for(let i = 0; i < arr.length; i++){   //прошлись по каждому эл и суммировали их
//   sum += arr[i]
// }
// let meanOfNumber = sum / arr.length // разделили на количество эл и получили среднее
// console.log (meanOfNumber)


//Task3  в один поместите все положительные числа включая 0, в другой все отрицательные

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// let positiveNumbers = [];
// let negativeNumbers = [];

// for(let i = 0; i < mixedNumbers.length; i++){
//     if (mixedNumbers[i] >=0){
//       positiveNumbers.push (mixedNumbers[i])
//     }
//     else negativeNumbers.push (mixedNumbers[i])
// }

// console.log (positiveNumbers)
// console.log (negativeNumbers)


//Task4
