import moment from "moment";
import { TODOS_CONST } from "./constants";
import { setToDosInLocalStorage } from "./localStorageAPI";
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

let filterTodos = [];
let allTodos = 0;
let deleteAllArr = []
let deleteLastId = null;
let completedTodos = 0;
let isShowCompleted = false;

async function fetchTodos() {
    const { todos, count } = await fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos').then(response => response.json())
    const result = await fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos?sortBy=id&order=desc').then(response => response.json())

    allTodos = count;
    deleteLastId = result.todos ? result.todos[0]?.id : null;

    deleteAllArr = todos;
    completedTodos = todos.filter((el) => el.isDone).length;

    renderList(todos);
    return;
}

fetchTodos()

const setShowCompleted = async () => {
    const { todos, count } = await fetch(`https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos?isDone=true`)
        .then((res) => {
            return res.json()
        })

    completedTodos = count
    renderList(todos);
};

const isShowAll = () => {
    fetchTodos()
};

const removeTodo = async (id) => {
    await fetch(`https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos/${id}`, {
        method: 'delete',
    })
        .then(() => {
            fetchTodos()
        })
};

const changeTodo = async (id, isDone) => {
    await fetch(`https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isDone: !isDone,
        })
    })
        .then(() => {
            fetchTodos()
        })
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

btnAdd.addEventListener("click", async function () {
    if (inputAdd.value.trim() === "") {
        alert("Поле ввода не должно быть пустым!");
        inputAdd.value = "";
        return;
    }

    const dateTodo = moment().format("h:mm, DD MMM"); // Mon Dec 05 2022

    const todo = {
        title: inputAdd.value,
        isDone: false,
        date: dateTodo,
    }

    await fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(response => response.json())

    inputAdd.value = "";

    if (isShowCompleted) {
        renderList(tempTodos);
    } else {
        fetchTodos()
    }
});

btnDeleteAll.addEventListener("click", function () {
    Promise.all(deleteAllArr.map((todo) => fetch(`https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos/${todo.id}`, {
        method: 'delete',
    }))).then((reqArr) => {
        Promise.all(reqArr).then(() => {
            renderList([]);
        })
    })
});

btnDeleteLast.addEventListener("click", async function () {
    await fetch(`https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos/${deleteLastId}`, {
        method: 'delete',
    })
        .then(() => {
            fetchTodos()
        })
});

function renderList(data) {
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
                .addEventListener("change", () => changeTodo(todo.id, todo.isDone));
        });
    }
}


// post creat
// fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'test create post',
//     date: 'random date'
//   })
// })
// .then(response => response.json())
// .then(json => console.log(json))

// get all
// fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos', {
//   method: 'get',
// })
// .then(response => response.json())
// .then(json => console.log(json))

// get by id
// fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos/2', {
//   method: 'get',
// })
// .then(response => response.json())
// .then(json => console.log(json))

// delete by id
// fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos', {
//     method: 'delete',
// })
//     .then(response => response.json())
//     .then(json => console.log(json))

// put by id
// fetch('https://63a9d7807d7edb3ae619c50b.mockapi.io/api-todos/v1/todos/1', {
//   method: 'put',
//     headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     isDone: false,
//     title: '111111111111111111111111'
//   })
// })
// .then(response => response.json())
// .then(json => console.log(json))


// Promise await


// let testPromise = new Promise((res, rej) => {
//   rej(new Error('Text error'))
// })

// testPromise.then(()=> {}, (err) => console.log(err)).catch((err) => console.log(err))

// const asyAwaFun = async function() {
//   const req = await fetch(...)

//   return
// }

// asyAwaFun.then()




// async function getInfo(params) {
//   const user = await fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => json)


//   const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
//   .then(response => response.json())
//   .then(json => json)

//   const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[1].id}`)
//   .then(response => response.json())
//   .then(json => json)

//   return {
//     user, posts, comments
//   }
// }

// getInfo().then((res) => console.log(res))

// const usersFeth = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/posts']

// const fetchResult = Promise.all(usersFeth.map((url) => fetch(url)))

// fetchResult.then(response => console.log(response))



// Promise.all(urls.map(u=>fetch(u))).then(responses =>
//   Promise.all(responses.map(res => res.text()))
// ).then(texts => {
//   …
// })




