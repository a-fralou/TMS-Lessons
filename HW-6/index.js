// TASK1
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fibonacci.forEach(function(el){
// console.log(el)
// });

// fibonacci.forEach((el)=>{
//     console.log(el)
// })


// TASK2
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// users.map((el)=> console.log('member'+ ' '+(users.indexOf(el)+1) + ': '+el));
// users.map(function(el){ 
//     console.log('member'+ ' '+(users.indexOf(el)+1) + ': '+el) 
// })


// console.log(count)


// TASK3
// const numbers = [7, -4, 32, -90, 54, 32, -21];
// let newArr = numbers.filter((el) =>{
//     return el>0
// });
// console.log(newArr)

// let newArr = numbers.filter(function(el){
//     return el>0
// });
// console.log(newArr)

// TASK4
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// console.log(fibonacci.reduce((el, cal) => el+cal,0));
// console.log(fibonacci.reduce(function(el,cal){
//     return el+cal;
// }, 0));


// TASK5
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// console.log(numbers.find((el)=> el%2==0))

// console.log(numbers.find(function(el){
//     return el%2==0
// }))



// ADVANCED---------------------
// TASK1

// let Student = function(person){
//     this.getCredit = function(){
//         const credit = person.map(el =>{
//             switch(el.rate){
//                 case 'A':
//                     return el.salary*12;
//                     case 'B':
//                     return el.salary*9;
//                     case 'C':
//                     return el.salary*6; 
//                     default:
//                     return el.salary*1;
//             }
//         })
//         return credit.reduce((el, cal) => el+cal,0)
//     }
// }

// const students = new Student([
//     {
//         salary: 300,
//         rate: 'A',
//         name:'Alexey',

//     },
//     {
//         salary: 400,
//         rate: 'B',
//         name:'Maksim',

//     },
//     {
//         salary: 200,
//         rate: 'C',
//         name:'Misha',

//     },
//     {
//         salary: 250,
//         rate: 'D',
//         name:'Masha',

//     },
//     {
//         salary: 450,
//         rate: 'B',
//         name:'Gena',
//     }
// ]);

// console.log(`Сумма общего кредита для студентов:`,students.getCredit())

// TASK2

// let disemvowel = (str) => str.replace(/[aeiou]/gi, '')
// console.log(disemvowel('This website is for losers LOL!»'));

// TASK3
// let accum = (word) =>{
//     let c = '';
//     for (let i=0; i< word.length; i++){
//         c = c + word[i].toUpperCase() + word[i].repeat(i) + '-'
//     }
//     return c
// }
// console.log(accum('abcd'))
// console.log(accum('RqaEzty'))
// console.log(accum('cwAt'))


// TASK4
// let highAndLow = (str) => {
//     let arr = str.split(' ').map(el =>{
//         return +el
//     })
//     let maxNum = Math.max(...arr);
//     let minNum = Math.min(...arr);
//     return `${maxNum} ${minNum}`
//   };

//   console.log(highAndLow('1 2 3 4 5'));
//   console.log(highAndLow('1 2 -3 4 5'));
//   console.log(highAndLow('1 9 3 4 -5'));

// TASK5
// let isIsogram = (word) => {
//     let arr = word.toLowerCase().split('')
//     let arrSecond = arr.filter((item, index) => {
//         return arr.indexOf(item) === index
//     })
//     var isEqual = JSON.stringify(arr) === JSON.stringify(arrSecond)
//     console.log(arr)
//     console.log(arrSecond)
//     return isEqual
// }
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("aba"))
// console.log(isIsogram("moOse"))


// TASK6
// let ascii = (word) => {
//     let arr = word.split('')
//     let c = [];
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[i].charCodeAt();
//         c.push(a);
//     }
//     let total1 = c.join('');
//     console.log(total1)
//     let total2 = total1.replace(7, 1)
//     console.log(total2)
//     let result = +total1 - +total2
//     return (`${total1} - ${total2} = ${result}`)
// }
// console.log(ascii('ABC'))

// TASK7
// let getNewString = (word) => {
//   return word = word.toLowerCase().split('').map(function(el,i,arr){
//     return arr.indexOf(el)===arr.lastIndexOf(el) ? '(':')'
//   })
//   .join('')
// }
// console.log(getNewString('din'))
// console.log(getNewString('recede'))
// console.log(getNewString('Success'))
// console.log(getNewString('(( @'))
