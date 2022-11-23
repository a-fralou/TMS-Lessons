// TASK1
// const colors = ['red', 'green', 'blue']
// console.log(colors.length)

// TASK2
// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals.pop())

// TASK3
// const numbers = [5, 43, 63, 23, 90];
// numbers.length =0;
// console.log(numbers)

// while(numbers.length>0){
//     numbers.pop()
// }
// console.log(numbers)


// TASK4
// const students = ['Polina', 'Dasha', 'Masha']
// students.pop(2);
// students.push('Borya');
// students.shift(0);
// students.unshift('Andrey');
// console.log(students)

// TASK5
// const cats = ['Gachito', 'Tom', 'Batman'];
// for (let i=0; i<cats.length; i++){
//     console.log(cats[i])
// }

// for (let i of cats){
//     console.log(i)
// }


// TASK6
// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// let newArr = [...oddNumbers,...evenNumbers];
// console.log(newArr.indexOf(8))

// TASK7
// const binary = [0, 0, 0, 0];
// console.log(binary.join(1));


// TASK1 ADVANCED Реализуйте функцию которая будет проверять, является ли слово палиндромом.
// function toChekOnPalindrom(words) {
//     words = words.toLowerCase();
//     return words === words.split("").reverse().join("")
//  }
 
//  console.log(toChekOnPalindrom("шалаш")); 

// TASK2
// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ];   
// var newMatrix = matrix.flat(1);
// let count=0;
// for(let i=0;i<newMatrix.length;i++){
//     count = count +newMatrix[i];
// }

// ------------Второй вариант
// let sumArr = newMatrix.reduce((el,culc) => el+culc,0)
// console.log(sumArr/newMatrix.length)


    
// TASK3 ADVANCED
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// let plusArr = [];
// let minusArr = [];
// for(let i=0;i<mixedNumbers.length;i++){
//     if(mixedNumbers[i]>=0){
//         plusArr.push(mixedNumbers[i])
//     } else {
//         minusArr.push(mixedNumbers[i])
//     }
// }
// console.log(plusArr);
// console.log(minusArr);

// TASK4 ADVANCED 
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
// Далее написать алгоритм который берет все числа из исходного массива, 
// возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.
  
// function getRandomNumber (min, max, num){
//     num = Math.floor(Math.random()*(max-min));
//     return num
// }
// let arr=[];
// for (let i = 0; i < 10; i++) {
//     arr[i]=getRandomNumber(1,100);
// }
// console.log(arr)
// let newArr=[];
// for(let j = 0; j<arr.length; j++){
//     stringOfNumbers = (Math.pow(arr[j],3));
//     newArr.push(stringOfNumbers)
// }
// console.log(newArr)