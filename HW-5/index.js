// NORMAL level
// Task 1 🖥
// Дан массив:

    const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.

console.log(colors.length)

// Task 2 🖥
// Дан массив:

    const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

console.log(animals.reverse()[0])

// Task 3 🖥
// Дан массив:

    const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.

// Реализуйте решение двумя способами.

// #1
numbers.length = 0

// #2
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()

//если бы объявление было через let, то можно было бы через "numbers = []"

console.log(numbers)

// Task 4 🖥
// Дан массив:

    const students = ['Polina', 'Dasha', 'Masha']
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')

console.log(students)

// Task 5 🖥
// Дан массив:

    const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

for (let i = 0; i < cats.length; i++) {
	console.log(cats[i])
}

for (let i of cats) {
	console.log(i)
}

// Task 6 🖥
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

const newNumbers = [...evenNumbers, ...oddNumbers]
console.log(newNumbers.indexOf(8))


// Task 7 🖥
// Дан массив:

    const binary = [0, 0, 0, 0]
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

const newBinary = binary.join(1)

console.log(newBinary)

// ADVANCED level
// Для решения задач используйте циклы for или for of

// Task 1 👨‍🏫
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

let word1 = 'шалаш'
let word2 = 'не шалаш'

console.log(findOutPalindromeOrNot(word1))
console.log(findOutPalindromeOrNot(word2))

function findOutPalindromeOrNot(a) {
	a = a.toLowerCase()
	let arrayOfA = a.split('')
	let result

	for (let i = 0; i < arrayOfA.length; i++) {

		if (arrayOfA[i] == arrayOfA.reverse()[i]) {
			result = 'is palindrome'
		} else {
			result = "isn't palindrome"
		}
	
	}

	return result
}

// Task 2 👨‍🏫
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
// Выведите в консоль среднее значение чисел в многомерном массиве.

console.log(getMean(matrix))

function getMean(a) {
	let matrixOnTheSameLayer = a.flat(Infinity)
	console.log(matrixOnTheSameLayer.length)
	let sumOfItems = 0

	for (let i = 0; i < matrixOnTheSameLayer.length; i++) {
		sumOfItems += matrixOnTheSameLayer[i]
	}

	let mean = sumOfItems / matrixOnTheSameLayer.length
	return mean
}


// Task 3 👨‍🏫
// Дан массив:

   const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
	
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

console.log(findOutPositiveNum(mixedNumbers))
console.log(findOutNegativeNum(mixedNumbers))

function findOutPositiveNum(a) {
	let negativeNum = a.filter(num => num >= 0)
	return negativeNum
}

function findOutNegativeNum(a) {
	let negativeNum = a.filter(num => num < 0)
	return negativeNum
}

//????? в задании, конечно, написано делать через цикл, но я поняла, куда его можно впихнуть ?????

// Task 4 👨‍🏫
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

 
let arr = []

console.log(getNum(arr))
console.log(changeNum(getNum(arr)))

function getNum(a) {

	for (i = 0; i < 5; i++) {
		let newNumber =  Math.floor(Math.random() * 100)
		let newArr = a.push(newNumber) //????? ничего страшного, если переменная нигде больше не используется? а то меня смущает то, как она подсвечивается, я как бы могу объявить эту переменную до цикла, чтоб она типа была задействована, но есть ли резон?
	}

	return a
}

function changeNum(a) {
	let newValue = []

	// for (let value of a) {
	// 	Value = newValue.push(value ** 3)
	// }

	for (let i = 0; i < a.length / 2; i++) {   //????? оно то как бы работает, но это "/ 2" мне не очень нравится, но без него, при вызове "console.log()" во 2-ой раз, выводится в 2 раза больше чисел. я как бы понимаю, что это происходит из-за того, что "function getNum(a)" отрабатывает 2 раза, но, как это исправить, не знаю(((((((((((((((
		let newArr = newValue.push(a[i] ** 3)
	}

	return newValue
}