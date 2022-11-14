// TASK 1
// let a = 'true';
// let b = false;
// let c = 17;
// let d = undefined;
// let e = null;

// console.log (typeof a)
// console.log (typeof b)
// console.log (typeof c)
// console.log (typeof d)
// console.log (typeof e)


// TASK 2
// let height = 15;
// let width = 20;

// if(height > width){
//     console.log(`Наибольшее число ${height}`)
// } else {
//     console.log(`Наибольшее число ${width}`)
// }


// TASK3
// for (i = 1; i <= 20; i++) if (i % 3===0)
//     console.log(i)


// TASK4
// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;
// shouldGoToWork = key && documents && pen && (apple || orange);
//     if(shouldGoToWork == true){
//     console.log("Можешь идти на работу")
// } else{
//     console.log('Что-то забыл!')
// }


// TASK5
// let q = prompt('Write a number');
// if (q % 3===0 && q % 5===0){
//     console.log('FizBuz')
// }else if (q % 5===0){
//     console.log('Fiz')
// } else if (q % 3===0){
//     console.log('Buz')
// } else {
//     console.log('Smth else')
// }


// TASK6
// let w = prompt('How old are you?');
// if (w>=16 && w<=18){
//     console.log("Можешь выкурить сигаретку, только маме не говори")
// }else if (w>18){
//     console.log("Попей пивка")
// } else if (w<18){
//     console.log("Пей колу")
// } else {
//     console.log('Smth else')
// }



// TASK7
// let s = prompt('D какую сторону света вы бы хотели отправиться');
// let z = 'юг';
// let x = 'север';
// let m = 'запад';
// let v = 'восток';

// switch(s){
//     case(z):
//         console.log("На юг пойдешь счастье найдешь")     
//     break;
//     case(x):
//         console.log("На север пойдешь много денег найдешь")
//     break;
//     case(m):
//         console.log("На запад пойдешь верного друга найдешь")
//     break;
//     case(v):
//         console.log("На восток пойдешь разработчиком станешь")     
//     break;
//     default:
//         console.log("Попробуйте еще раз") 
//     break;
// }



// ADVANCED level

// TASK1
// let name = 'пОлИнА нАбЕрЕжНаЯ';
// let nameResult = name[0].toUpperCase() + name.slice(1,6).toLowerCase() + ' ' + name[7].toUpperCase() + name.slice(8).toLowerCase();
// alert(`Привет, ${nameResult}!`);


// TASK2
// let number = parseInt(prompt('Напишите число'));
// let numberMinus = parseInt(prompt('Сколько отнять '));
// let numberPlus = parseInt(prompt('Сколько прибавить'));
// let numberMultiply = parseInt(prompt('На сколько умножить'));
// let numberDevide = parseInt(prompt('На сколько разделить'));

// let result = ((((number-numberMinus)+numberPlus)*numberMultiply)/numberDevide)
// console.log(`((((${number}-${numberMinus})+${numberPlus})*${numberMultiply})/${numberDevide})=${result}`)



// TASK3
// for (let i = 0; i < 6; i++) {
//     let symb = ''
//     for(let j = 0; j < i; j++) {
//       symb += '#'
//     }
//     console.log(`${symb}#`)
//   }