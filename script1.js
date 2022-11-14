// const btn = document.getElementById('btn');
// const name = document.getElementById('name');
// const password = document.getElementById('password');
// const error = document.getElementById('err');

// btn.addEventListener("click", function(a) {
//     a.preventDefault()
//     if (password.value.length<6){
//         error.classList.add('error--show')
//     } else{
//         alert('You enter succesfully')
//     }
// })

// password.addEventListener("click", function(a) {
//     a.preventDefault()
//     if (password.value.length<6){
//         error.classList.add('error--show')
//     } else{
//         error.classList.remove('error--show')
//     }
// })
// console.log(btn);


// let a = 0;
// let b = 0;
// let c = 0;

// const writeNum = function(sym){
//    return +prompt(`Заполните ${sym}`)
// }

// function sumAandB() {


//     if(a === 0){
//         a = writeNum('a')
//         sumAandB()
//     } else if (b === 0){
//         b = writeNum('b')   
//         sumAandB() 
//     }  else if (c === 0){
//         c = writeNum('c')  
//     } else{}


//     return a+b+c;
// };
// const result = sumAandB();
// const result_2 = sumAandB();
// const result_3 = sumAandB();
// console.log(result, result_2, result_3);


// function varTest() {
//     var x = 1;
//     if (true) {
//       var x = 2;
//       console.log(x);
//     }
//     console.log(x);
//   }
  
//   function letTest() {
//     let x = 1;
//     if (true) {
//       let x = 2;
//       console.log(x);
//     }
//     console.log(x);
//   }

//   varTest();

//   letTest();

// Функция по рандомным дразнилкам-------------------------------------------------------------------------------------------------------------------------
// var generateRandomInsult = function (randomString) {
//     var randomBodyParts = ["глаз", "нос", "череп"];
//     var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//     var pickRandomWord = function (words) {
//         return words[Math.floor(Math.random() * words.length)];
//     };
//     var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//         return randomString;
// };
// const result = generateRandomInsult();
// console.log(result);



// // TASK1
// let x = 20
// let y = 58
// let z = 42
// console.log(x+y+z)

// // TASK2
// let secInMinute = 60
// let minInHour = 60
// let hourInDay = 24
// let dayInYear = 365
// let myAgeInSeconds = 23
// console.log(secInMinute*minInHour*hourInDay*dayInYear*myAgeInSeconds)

// // TASK3
// let count = 42;
// let userName = '42';

// console.log(typeof Number(userName))
// console.log(typeof +userName)
// console.log(typeof count.toString())
// console.log(typeof `${count}`)

// // TASK3
// let aa = 1
// let bb = 2
// let cc = " белых медведей"
// console.log(aa.toString()+bb.toString()+cc)

// // TASK4
// let wordOne = 'доступ';
// let wordTwo = 'морпех';
// let wordThree = 'наледь';
// let worFour = 'попрек';
// let wordFive = 'рубило';
// let lengthWords
// console.log((lengthWords = wordOne+wordTwo+wordThree+worFour+wordFive).length)

// // TASK5
// let myName = 'Alexey';
// let myAge = 23;
// let boolean = true;

// console.log(`Переменная <myName> имеет тип - ${typeof myName}`);
// console.log(`Переменная <myAge> имеет тип - ${typeof myAge}`);
// console.log(`Переменная <boolean> имеет тип - ${typeof boolean}`);

// // TASK7
// let Name = prompt('What is your name')
// let Age = prompt('How old are you')
// console.log(Name)
// console.log(Age)


// // ADV TASK1
// let a = 4, b = 3;
// [a, b] = [b, a];

// console.log(`a=${a}`);
// console.log(`b=${b}`);

// // ADV TASK2
// let codeWord1 = "обернись";
// let codeWord2 = "неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";
// let cipher

// cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1]
// console.log(cipher)