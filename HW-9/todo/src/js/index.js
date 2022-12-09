import { v4 as uuidv4 } from 'uuid';
// установил и подключил либу для генерации уникальных id
// https://www.npmjs.com/package/uuid

const inputAdd = document.getElementById("input-add");
const btnAdd = document.getElementById("btn-add");
const todosWrapper = document.getElementById("todos");
const TODOS_CONST = 'todos'

let todos = [];

const createToDoItem = ({ title, id, isDone, date }) => {
  return `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <div class="item-todo">
    <input
      class="form-check-input me-1"
      type="checkbox"
      id="${id}"
      ${isDone && 'checked="true"'}
    />
    <label
      class="form-check-label stretched-link"
      for="${id}"
      >${title}</label
    >
  </div>

  <div class="d-flex flex-column">
    <button data-id=${id} type="button" class="btn-delete btn btn-danger btn-sm mb-2"></button>
    <span class="badge bg-secondary">${date}</span>
  </div>
</li>`
}

const setToDosInLocalStorage = () => {
  localStorage.setItem(TODOS_CONST, JSON.stringify(todos))
}

const removeTodo = (id) => {
  todos = todos.filter((el) => el.id !== id);

  setToDosInLocalStorage()
  renderList();
}

btnAdd.addEventListener("click", function () {
  if (inputAdd.value.trim() === '') {
    alert('Поле ввода не должно быть пустым!')
    inputAdd.value = "";
    return;
  }

  const dateTodo = new Date().toLocaleString(); // Mon Dec 05 2022

  todos.push({
    title: inputAdd.value,
    id: uuidv4(), // генерирует уникальные id и избавляет от бага при удалении todo !! можете вернуть строчку todos.length + 1 и посмотреть как будут вести себя todo при удалении
    isDone: false,
    date: dateTodo,
  });

  inputAdd.value = "";

  setToDosInLocalStorage()
  renderList();
});

function renderList() {
  todosWrapper.innerHTML = "";

  todos.forEach((todo) => {
    todosWrapper.insertAdjacentHTML("afterbegin", createToDoItem(todo));
    // оброботчик в шаблонной строке не отрабатывает - нельзя корректно повесить, поэтому реализация будет следующая:
    todosWrapper.querySelector(`button[data-id="${todo.id}"]`)
      .addEventListener('click', () => removeTodo(todo.id))
  });
}

const getToDosFromLocalStorage = localStorage.getItem(TODOS_CONST)
const isHasToDos = getToDosFromLocalStorage && !todos.length

if (isHasToDos) {
  todos = JSON.parse(getToDosFromLocalStorage);

  renderList()
}
