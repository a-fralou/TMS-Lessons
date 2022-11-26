// const colors = ['red', 'green', 'blue']
// console.log(colors.length);


// const animals = ['monkey', 'dog', 'cat']
// console.log(animals[2]);


// const numbers = [5, 43, 63, 23, 90]
// numbers.splice(0, 5);
// console.log(numbers);

// const numbers = [5, 43, 63, 23, 90]
// numbers.length = 0;
// console.log(numbers);

// const students = ['Polina', 'Dasha', 'Masha']
// let LastItem = students.pop();
// let FirstItem = students.shift();
// students.push('Borya');
// students.unshift('Andrey');
// console.log(students);


// const cats = ['Gachito', 'Tom', 'Batman']
// for (let i = 0; i < cats.length; i++) {
//     let item = cats[i];
// }
// console.log(cats);


// const cats = ['Gachito', 'Tom', 'Batman']
// for (let value of cats) {
//     console.log(value);
//   }


// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// let merge = evenNumbers.concat(oddNumbers);
// console.log(merge);
// console.log(merge.indexOf(8, 0));


// const binary = [0, 1, 0, 1, 0, 1, 0]
// let str = binary.join('');

// console.log(str);








// let str = prompt('Введите строку:');
// function myResult(str) {
//    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
//         if(str[i] != str[j])
//           return false;
//    }
//    return true;
// }

// alert(myResult(str));


// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// let newArray = matrix.flat();
// console.log(newArray);

// const initialValue = 0;
// const sumWithInitial = newArray.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// let sum = sumWithInitial / newArray.length;
// console.log(sum);


// const Numbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// const Num = [];
// Num.push(Numbers[0], Numbers[2], Numbers[5]);
// console.log(Num); - не решено





// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let source = [getRandomInt(1, 5)];
// console.log(source);
// let injector = [Math.pow(source,3)];
// console.log(injector);
