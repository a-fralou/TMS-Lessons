'use strict'

import {btnAdd, inputAdd, todoList, btnDeleteAll, btnDeleteLastItem, getUiCompletedTodos, getUiAllTodos, showAll, showCompleted, inputSearch} from './elements_in_DOM';
import {KEY_FOR_TODOS, KEY_FOR_COMPLETED_TODOS} from './constants';

//создание массивов, которые получают данные о todo
let todos = [];
let todosIsDone = [];

//создание начального значения количества todos, для последующего отображения на странице
let allTodos = 0;
let completedTodos = 0;

// УДАЛЕНИЕ

//удаляется последний todo
function deleteLastTodoInList() {
	todos.pop();
	setTodoInLocalStorage();
	createTodo(todos);
}

btnDeleteLastItem.addEventListener('click', deleteLastTodoInList);

//удаляюстя все todos 
function deleteAllTodos() {
	todos = [];
	localStorage.clear();
	createTodo(todos);
}

btnDeleteAll.addEventListener('click', deleteAllTodos);

// удаляется todo, ка котором был нажат крестик
const removeTodo = (id) => {
	todos = todos.filter((el) => el.id !== id);
	setTodoInLocalStorage();
	createTodo(todos);
};

// ДОБАВЛЕНИЕ

//добавляется todo при нажатии на кнопку 'add'
btnAdd.addEventListener('click', addTodoItem);

//добавляется todo при нажатии на 'enter'
inputAdd.addEventListener('keyup', function addTodoItemByKeydownEnter(event) {

	if (event.code == 'Enter') {
		return addTodoItem();
	}

});

function addTodoItem() {

	if (inputAdd.value.trim() === '') {
		alert('need to write smth');
		return;
	}

	// создание даты
	let todoDate = new Date().toLocaleString();

	//создание уникального id
	let uniqueId = new Date().valueOf();

	//параметры, по которым todo записывается в LocalStorage
	let paramsOfTodo = {
		isDone: false,
		title: inputAdd.value,
		date: todoDate,
		id: `${uniqueId}`,
	};

	todos.push(paramsOfTodo);

	//очищение строки ввода
	inputAdd.value = ''

	setTodoInLocalStorage();
	createTodo(todos);
}

// ОТОБРАЖЕНИЕ КОЛИЧЕСТВА TODO-ЭЛЕМЕНТОВ

//отображение общего количества todos
const displayAllTodos = () => {
	allTodos = todos.length;
	getUiAllTodos.innerHTML = allTodos;
}

//отображение количества todos, которые выполнены
const displayCompletedTodos = () => {
	todosIsDone = [...todos].filter(el => el.isDone);
	completedTodos = todosIsDone.length;
	getUiCompletedTodos.innerHTML = completedTodos;
}

// ОТОБРАЖЕНИЕ TODOS НА СТРАНИЦЕ

//отображение только выполненных todos
showCompleted.addEventListener('click', () => {
	todosIsDone = [...todos].filter(el => el.isDone);
	localStorage.setItem(KEY_FOR_COMPLETED_TODOS, JSON.stringify(todos));
	todos = JSON.parse(localStorage.getItem(KEY_FOR_COMPLETED_TODOS));
	createTodo(todosIsDone);
});

//отображение всех todos
showAll.addEventListener('click', () => {
	todos = JSON.parse(localStorage.getItem(KEY_FOR_TODOS));
	createTodo(todos);
})

// UI

//создание внешнего вида todo-элемента
function createTodo(arr) {
	todoList.innerHTML = '';

	createTodoItem(arr);
	displayAllTodos();
	displayCompletedTodos();
};

//изменение состояния todo на true (checked)/false
const completeTodo = (id) => {
	todos = todos.map((el) => {

	  if (el.id === id) {
		 return {
			...el,
			isDone: !el.isDone,
		 };
	  };
 
	  return el;
	});
	
	setTodoInLocalStorage();
	createTodo(todos);
};	

//работа с созданным todo-элементом
const createTodoItem = (arr) => {

	let list 

	if (arr.length != 0) {

		arr.forEach(function (el) {
			//создание todo-элемента
			let newTodoItem = `
			<li class="list-group-item d-flex align-items-center justify-content-between" id='todoItem-${el.id}'>
		
				<input type="checkbox" class="form-check-input" class="btn btn-outline-dark mb-2" id='${el.id}' data-idChecked="${el.id}" ${el.isDone ? "checked" : ''}></input>
				<label class="form-check-label" id="todoLabel-${el.id}" for='${el.id}'>${el.title}</label>
		
				<div class="d-flex flex-column align-items-end">
					<button type="button" id='btn-deleteThisTodo' data-idDelete="${el.id}" class="btn btn-outline-dark mb-2 " style=" width: fit-content">
						<img src="https://cdn-icons-png.flaticon.com/512/17/17047.png" jsaction="load:XAeZkd;" jsname="HiaYvf"
									class="n3VNCb KAlRDb d-flex align-items-center mx-auto" alt="Крестик – Бесплатные иконки: знаки"
									data-noaft="1" style="width: 16px; height: 16px;">
					</button>
		
					<span class="badge date bg-secondary">${el.date}</span>
				</div>
		
			</li>`;

			//добавление todo-элемента на страницу
			todoList.insertAdjacentHTML('beforeend', newTodoItem);
			
			const btnDeleteThisTodoItem = todoList.querySelector(`button[data-idDelete="${el.id}"]`);
			const btnCheckedThisTodoItem = todoList.querySelector(`input[data-idChecked="${el.id}"]`);
			const todoItem = todoList.querySelector(`#todoItem-${el.id}`);
			const titleOfTodoItem = todoList.querySelector(`#todoLabel-${el.id}`);
			list = todoItem.children

			//удаление todo-элемента, при нажатии на кнопку удаления внутри todo-элемента
			btnDeleteThisTodoItem.addEventListener('click', () => removeTodo(el.id));

			//изменение todo-элемента, при нажатии на кнопку состояния внутри todo-элемента
			btnCheckedThisTodoItem.addEventListener('change', () => completeTodo(el.isDone));

			//изменение стилей в зависимости от состояния 
			if (el.isDone) {
				todoItem.style.backgroundColor = 'rgb(255, 228, 165)';
				titleOfTodoItem.style.textDecoration = 'line-through';
			} else {
				todoItem.style.backgroundColor = 'rgb(255, 213, 116)';
				titleOfTodoItem.style.textDecoration = 'none';
			};

			//поиск
			inputSearch.addEventListener('input', function() {
				let value = this.value.trim();

				console.log(value)
				if (value != '') {

					for (let i = 0; i < list.length; i++) {

						if (list[i].innerTEXT.search(value)) {
							list[i].slyle.display = 'block';
						} else {
							list[i].slyle.display = 'none';
						};
						
					}
				};
			});

		});
	};
};

// LOCAL STORAGE

//записываание в LocalStorage имеющихся данных
const setTodoInLocalStorage = () => {
	localStorage.setItem(KEY_FOR_TODOS, JSON.stringify(todos));
};

//получение из LocalStorage имеющихся данных
const getToDosFromLocalStorage = localStorage.getItem(KEY_FOR_TODOS);

//выведение из LocalStorage имеющихся данных
if (!todos.length && getToDosFromLocalStorage) {
	todos = JSON.parse(localStorage.getItem(KEY_FOR_TODOS));
	createTodo(todos);
};