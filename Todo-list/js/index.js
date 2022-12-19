'use strict'

const btnAdd = document.getElementById('btn-add');
const inputAdd = document.getElementById('input-add');
const todoList = document.getElementById('todoList');
const btnDeleteAll = document.getElementById('btn-deleteAll');
const btnDeleteLastItem = document.getElementById('btn-deleteLastItem');
let getUiCompletedTodos = document.getElementById('completedTodos');
let getUiAllTodos = document.getElementById('allTodos');
const showAll = document.getElementById('showAll');
const showCompleted = document.getElementById('showCompleted');

//создается массив, который получает данные при вводе 
let todos = [];
const KEY_FOR_TODOS = 'todos';
const KEY_FOR_COMPLETED_TODOS = 'completed todos';
let allTodos = 0;
let completedTodos = 0;
let todosIsDone = [];

//удаляется последний todo
function deleteLastTodoInList() {
	todos.pop();
	setTodoInLocalStorage();
	displayAllTodos();
	displayCompletedTodos();
	createTodo(todos);
}

btnDeleteLastItem.addEventListener('click', deleteLastTodoInList);

//удаляюстя все todos 
function deleteAllTodos() {
	todos = [];
	localStorage.clear();
	displayAllTodos();
	displayCompletedTodos();
	createTodo(todos);
}

btnDeleteAll.addEventListener('click', deleteAllTodos);

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

	let todoDate = new Date().toLocaleString()
	let paramsOfTodo = {
		isDone: false,
		title: inputAdd.value,
		date: todoDate,
		id: todos.length,
	};

	todos.push(paramsOfTodo);
	inputAdd.value = ''

	displayAllTodos();
	displayCompletedTodos();
	setTodoInLocalStorage();
	createTodo(todos);
}

//отображение общего количества todos
const displayAllTodos = () => {
	allTodos = todos.length;
	getUiAllTodos.innerHTML = allTodos;
}

const displayCompletedTodos = () => {
	todosIsDone = [...todos].filter(el => el.isDone);
	completedTodos = todosIsDone.length;
	getUiCompletedTodos.innerHTML = completedTodos;
}

//создание внешнего вида todo-элемента
function createTodo(arr) {
	todoList.innerHTML = '';

	createTodoItem(arr);
};

// удаляется todo, ка котором был нажат крестик
const removeTodo = (id) => {
	todos = todos.filter((el) => el.id !== id);

	setTodoInLocalStorage();
	createTodo(todos);
	displayAllTodos();
	displayCompletedTodos();
};

//! таким образом не работает
// const completeTodo = (state) => {
// 	state = !state;
// 	setTodoInLocalStorage();
// 	displayAllTodos();
// 	displayCompletedTodos();
// };
//!

const createTodoItem = (arr) => {
	if (arr.length != 0) {
		arr.forEach(function (el) {
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

			todoList.insertAdjacentHTML('beforeend', newTodoItem);

			const btnDeleteThisTodoItem = todoList.querySelector(`button[data-idDelete="${el.id}"]`);
			btnDeleteThisTodoItem.addEventListener('click', () => removeTodo(el.id));

			const btnCheckedThisTodoItem = todoList.querySelector(`input[data-idChecked="${el.id}"]`);

			// btnCheckedThisTodoItem.addEventListener('click', completeTodo(el.isDone));
			btnCheckedThisTodoItem.addEventListener('click', () => {
				el.isDone = !el.isDone;

				//! пока не сделала сохранение через LocalStorage
				//изменение оформления для выполненных todos
				const todoItem = document.querySelector(`#todoItem-${el.id}`);
				const titleOfTodoItem = document.querySelector(`#todoLabel-${el.id}`);

				if (el.isDone == true) {
					todoItem.style.backgroundColor = 'rgb(255, 228, 165)';
					titleOfTodoItem.style.textDecoration = 'line-through';
				} else {
					todoItem.style.backgroundColor = 'rgb(255, 213, 116)';
					titleOfTodoItem.style.textDecoration = 'none';
				}

				setTodoInLocalStorage();
				displayAllTodos();
				displayCompletedTodos();
			});
		});
	};
};

//отображение только выполненных todos
showCompleted.addEventListener('click', () => {
	todosIsDone = [...todos].filter(el => el.isDone);
	localStorage.setItem(KEY_FOR_COMPLETED_TODOS, JSON.stringify(todos));
	todos = JSON.parse(localStorage.getItem(KEY_FOR_COMPLETED_TODOS));
	createTodo(todosIsDone);
	displayAllTodos();
	displayCompletedTodos();
});

//отображение всех todos
showAll.addEventListener('click', () => {
	todos = JSON.parse(localStorage.getItem(KEY_FOR_TODOS));
	createTodo(todos);
	displayAllTodos();
	displayCompletedTodos();
})

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
	displayAllTodos();
	displayCompletedTodos();
};