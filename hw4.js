// let person = {
//     name: 'Joe',
//     permissions: 777

// };

// delete person.permissions
// console.log(person);







// let car = {
//     engine : "diesel",
//     volume : 2900
// };

// if (car.hasOwnProperty('engine')) {
//     console.log(true);

// }





// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true,
    
    
// }

// for (let key in student) {
//     console.log(key)
//     console.log(`${student[key]}`)
//     }


// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log(
//     colors["ru pum pu ru rum"].red,
//     colors["ru pum pu ru rum"].blue
//     );






//   function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary/5;
//     }
  
//     return sum;
//   }
  
//   let salaries = {
//     sveta: 413,
//     anton: 987,
//     alexandra: 199,
//     andrey:500,

//     addkey:[
     
//         andrey = 664,
//   ],
    
 
    
//   };
  
//   alert(sumSalaries(salaries)); 





// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// let compare = (JSON.stringify(student1) === JSON.stringify(student2));
// console.log(compare);




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


    //  console.log(animals.hasOwnProperty('bird'));
    //  console.log(animals.birds?.replace('Bird:',''));
  





// let login = {
//         auth: { 
//             login :prompt('Введите логин'),
//             pass : prompt('Введите пароль'),
            
//     }
// }


// let valid = {
//     authvalid: { 
//         login : prompt('Подтвердите логин'),
//         pass : prompt('Подтвердите пароль'),
        
// }

// }


// if (JSON.stringify(login.auth) === JSON.stringify(valid.authvalid)) {
//     alert('Добро пожаловать')
// }
// else {
//     alert('Ошибка аутентификации')
// }




// let football = {
//     score : {
//         result2 : 2,
//         result5 : 5,
//     }
// }

// football.score.result2 = 'два';
// football.score.result5 = 'пять';

// console.log(football.score)


