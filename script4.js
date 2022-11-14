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


// TASK1 Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

// let obj = {
//     key1: 1,
//     key2: 2
// };
// delete obj.key1;
// delete obj.key2;
// console.log(obj);


// TASK2 Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

// let obj = {
//     key1: 1,
//     key2: 2
// };

// console.log(Object.hasOwn(obj,'key1'));


// TASK3 C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (const key in student){
//     console.log(`${key}`);
//     console.log(`${student[key]}`);
// }

// TASK4 Вывести в консоль слово красный и синий

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// for (const key in colors["ru pum pu ru rum"]){
//     console.log(`${colors["ru pum pu ru rum"]['red']}`);
//     console.log(`${colors["ru pum pu ru rum"]['blue']}`);
//     break;
// }


// TASK5 Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey2: 664,
//     alexandra: 199
// }
// let a = 0;
// let b = 0;
// for (let key in salaries){
//     b = b + 1;
//     a = (a + salaries[key]);
// }
// console.log(a/b)


// TASK6 Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

// let chekForm = function (){
// let a;
// let b;
// const obj = {};
// obj.a = prompt('Введите логин');
// obj.b = prompt('Введите пароль');

// if ( confirm (`Проверьте ваши данные: логин ${obj.a}, пароль ${obj.b}`)){
//     return console.log('Вы вошли')
// } else {
//     return  chekForm()
// }
// }
// chekForm()



// ADVANCED level 
// TASK1 Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

// let numberWords = {
//     0: 'ноль',
//     1: 'один',
//     2: 'два',
//     3: 'три',
//     4: 'четыре',
//     5: 'пять',
//     6: 'шесть',
//     7: 'семь',
//     8: 'восемь',
//     9: 'девять',
//     10: 'десять',
// }
// function getNumberWordFirst (numberFirst){
//     if (numberWords.hasOwnProperty(numberFirst)){
//         return numberWords[numberFirst]
//     } else {
//         return false
//     }
// }

// function getNumberWordSecond (numberSecond){
//     if (numberWords.hasOwnProperty(numberSecond)){
//         return numberWords[numberSecond]
//     } else {
//         return false
//     }
// }
// const numberFirst = +prompt('Введите значение для первой команды')
// const numberSecond = +prompt('Введите значение для второй команды')

// console.log(`${getNumberWordFirst(numberFirst)} : ${getNumberWordSecond(numberSecond)} `);


// TASK2

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// Первый вариант ------console.log(JSON.stringify(student1) === JSON.stringify(student2));

// Второй вариант ------console.log(_.isEqual(student1, student2));

// Третий вариант ------
// function isEqual(student1, student2){

// let firstObj = Object.entries(student1);
// let secondObj = Object.entries(student2);


// if (firstObj.length !== secondObj.length){
//     return false;
// }
// for (let i = 0; i < firstObj.length; ++i) {
//     if(firstObj[i][0] !== secondObj[i][0]){
//         return false
//     }

//     if(firstObj[i][1] !== secondObj[i][1]){
//         return false;
//     }
// }
// return true
// } 
// console.log(isEqual(student1, student2))

// Четвертый вариант ------
// function isEqual(student1, student2) {
//     const firstObj = Object.getOwnPropertyNames(student1);
//     const secondObj = Object.getOwnPropertyNames(student2);
  
//     if (firstObj.length !== secondObj.length) {
//       return false;
//     }
  
//     for (let i = 0; i < firstObj.length; ++i) {
//       const element = firstObj[i]+1;
  
//       if (student1[element] !== student2[element]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
    
//   console.log(isEqual(student1, student2));


// TASK3
// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ. Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }

//  console.log(animals.bird?.name);
