import moment from "moment";
import { TODOS_CONST } from "./constants";
import { setToDosInLocalStorage } from "./localStorageAPI";
import { getRandomId as randomId } from "./utils";
import { createToDoItem } from "./ui";
// установил и подключил либу для генерации уникальных id
// https://www.npmjs.com/package/uuid
const inputAdd = document.getElementById("input-add");
const btnAdd = document.getElementById("btn-add");
const todosWrapper = document.getElementById("todos");
const getUiAllTodos = document.getElementById("allTodos");
const getUiCompletedTodos = document.getElementById("completedTodos");
const btnDeleteAll = document.getElementById("btn-delete");
const btnDeleteLast = document.getElementById("btn-delete-last");
const btnCompleted = document.getElementById("btn-completed");
const btnShowAll = document.getElementById("btn-show-all");
const inputSearch = document.getElementById("input-search");

let todos = [];
let tempTodos = [];
let filterTodos = [];
let allTodos = 0;
let completedTodos = 0;
let isShowCompleted = false;

const getToDosFromLocalStorage = localStorage.getItem(TODOS_CONST);
const isHasToDos = getToDosFromLocalStorage && !todos.length;

if (isHasToDos) {
  todos = JSON.parse(getToDosFromLocalStorage);
  allTodos = todos.length;

  renderList(todos);
}

const setShowCompleted = () => {
  isShowCompleted = true;

  renderList(tempTodos);
};

const isShowAll = () => {
  isShowCompleted = false;
  renderList(todos);
};

const removeTodo = (id) => {
  todos = todos.filter((el) => el.id !== id);

  setToDosInLocalStorage(todos);
  renderList(todos);
};

const changeTodo = (id) => {
  todos = todos.map((el) => {
    if (el.id === id) {
      return {
        ...el,
        isDone: !el.isDone,
      };
    }

    return el;
  });

  setToDosInLocalStorage(todos);
  renderList(todos);
};

inputSearch.addEventListener("input", (e) => {
  if (isShowCompleted) {
    filterTodos = tempTodos.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      filterTodos = tempTodos;
    }
  } else {
    filterTodos = todos.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      filterTodos = todos;
    }
  }

  renderList(filterTodos);
});

btnCompleted.addEventListener("click", setShowCompleted);

btnShowAll.addEventListener("click", isShowAll);

btnAdd.addEventListener("click", function () {
  if (inputAdd.value.trim() === "") {
    alert("Поле ввода не должно быть пустым!");
    inputAdd.value = "";
    return;
  }

  const dateTodo = moment().format("h:mm, DD MMM"); // Mon Dec 05 2022

  todos.push({
    title: inputAdd.value,
    id: randomId(), // генерирует уникальные id и избавляет от бага при удалении todo !! можете вернуть строчку todos.length + 1 и посмотреть как будут вести себя todo при удалении
    isDone: false,
    date: dateTodo,
  });

  inputAdd.value = "";

  setToDosInLocalStorage(todos);
  if (isShowCompleted) {
    renderList(tempTodos);
  } else {
    renderList(todos);
  }
});

btnDeleteAll.addEventListener("click", function () {
  todos = [];

  setToDosInLocalStorage(todos);
  renderList(todos);
});

btnDeleteLast.addEventListener("click", function () {
  // todos = todos.at(-1); // todos[todos.at(-1)] & todos[todos.length -1 ] & pop()

  if (isShowCompleted) {
    const removeItem = tempTodos.pop();
    console.log(removeItem.id);
    todos = todos.filter((el) => el.id !== removeItem.id);

    renderList(tempTodos);
    setToDosInLocalStorage(todos);
    return;
  }

  todos.pop();
  setToDosInLocalStorage(todos);
  renderList(todos);
});

function renderList(data) {
  tempTodos = [...todos];
  tempTodos = todos.filter((el) => el.isDone);

  allTodos = todos.length; // *
  completedTodos = tempTodos.length; // *

  todosWrapper.innerHTML = "";
  getUiAllTodos.innerText = allTodos;
  getUiCompletedTodos.innerText = completedTodos;

  if (data.length) {
    data.forEach((todo) => {
      todosWrapper.insertAdjacentHTML("afterbegin", createToDoItem(todo));

      todosWrapper
        .querySelector(`button[data-id="${todo.id}"]`)
        .addEventListener("click", () => removeTodo(todo.id));

      todosWrapper
        .querySelector(`input[id="${todo.id}"]`)
        .addEventListener("change", () => changeTodo(todo.id));
    });
  }
}
