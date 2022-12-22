import moment from "moment";
import { v4 as uuidv4 } from "uuid";
const getRandomId = () => uuidv4();

let btnDeleteAll = document.getElementById('btn-delete');
let btnDeleteLast = document.getElementById('btn-deleteLast');

let btnAdd = document.getElementById('btn-add');

let btnShowAll = document.getElementById('btn-showAll');
let btnShowCompleted = document.getElementById('btn-showCompleted');
let todo = document.getElementById('todo-list')


let inputAdd = document.getElementById('input-add');

let getCheckAll = document.getElementById('check-all')
let getCompleted = document.getElementById('check-completed')

let inputSearch = document.getElementById('input-search')



let todoList = [];                                       //Записываем каждый новый ввод todo
let tempTodos = [];
let filterTodos = []

let checkAll = 0;
let completedAll = 0;


let isShowCompleted = false;

if(localStorage.getItem('todoList')){
  todoList = JSON.parse(localStorage.getItem('todoList'));
  displayMessages(todoList)
}



btnAdd.addEventListener('click', function(){
  if (inputAdd.value.trim() === ''){
    alert('Поле не может быть пустым!')
    inputAdd.value ='';
    return
  }
  const dateTodo = moment().format("h:mm, DD MMM"); // Mon Dec 05 2022

    let newTodo={                                     //Содержит данные нашего последнего ввода todo
        title:inputAdd.value,
        id:getRandomId(),
        checked:false,
        date:dateTodo

    };
    inputAdd.value='';                           //После ввода стирается из input
    todoList.push(newTodo);
    
    localStorage.setItem('todoList', JSON.stringify(todoList))        //Сохранение после обновления
    if(isShowCompleted){
      displayMessages(tempTodos)
    } else {
      displayMessages(todoList)
    }
 
})

inputAdd.addEventListener("keyup", function(event){
  if (event.key === 'Enter'){
    if (inputAdd.value.trim() === ''){
      alert('Поле не может быть пустым!')
      inputAdd.value ='';
      return
    }
    const dateTodo = moment().format("h:mm, DD MMM"); // Mon Dec 05 2022
  
      let newTodo={                                     //Содержит данные нашего последнего ввода todo
          title:inputAdd.value,
          id:getRandomId(),
          checked:false,
          date:dateTodo
  
      };
      inputAdd.value='';                           //После ввода стирается из input
      todoList.push(newTodo);
      
      localStorage.setItem('todoList', JSON.stringify(todoList))        //Сохранение после обновления
      displayMessages(todoList)
  }
})



//Удаление всех элементов

btnDeleteAll.addEventListener('click', function(){
  todoList = [];
  localStorage.clear();
  todo.innerHTML = '';
  getCheckAll.innerText = '0'; 
  
})

//Удаление последнего элемента

btnDeleteLast.addEventListener('click', function(){
  let tempTodos = [...todoList];
  const removeItem = tempTodos.pop();
  console.log(removeItem.id);
  todoList = todoList.filter((el) => el.id !== removeItem.id);
  localStorage.setItem('todoList', JSON.stringify(todoList)) 
  displayMessages(todoList);
  
  return;
})


// Удаление элеменов при нажатии ан кнопку внутри инпута

const removeTodo = (id) =>{
  todoList = todoList.filter((el) => el.id !== id)
  console.log(todoList)
  localStorage.setItem('todoList', JSON.stringify(todoList)) 
  displayMessages (todoList)
}

// Checkbox в input 
const changeTodo = (id) =>{
  todoList = todoList.map((el)=>{
    if(el.id === id){
      return {
        ...el,
        checked: !el.checked,
      }
    }
    return el
  })
  localStorage.setItem('todoList', JSON.stringify(todoList)) 
  
  if(isShowCompleted){
    displayMessages(todoList.filter((el) => el.checked))
  } else {
    displayMessages(todoList)
  }
}


//ПОИСК ЭЛЕМЕНТОВ ИЗ TODO LIST

inputSearch.addEventListener("input", (e) => {
  if (isShowCompleted) {
    filterTodos = tempTodos.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      filterTodos = tempTodos;
    }
  } else {
    filterTodos = todoList.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === "") {
      filterTodos = todoList;
    }
  }

  displayMessages(filterTodos);
});

//Показ всех отмеченных (CHECKED) (Show COMPLETED) элементов todo листа
const showCompleted = () => {
  isShowCompleted = true;
  displayMessages (tempTodos)
}
btnShowCompleted.addEventListener('click', showCompleted)


//Показ ВСЕХ (Show ALL) элементов todo листа

const showAll = () =>{
  isShowCompleted = false;
  displayMessages(todoList)
}
btnShowAll.addEventListener('click', showAll)



// Создание инпутов с label
function displayMessages (data){
  tempTodos = [...todoList].filter((el) => el.checked);

          // Счетчик всех инпутов в todo листе
          checkAll = todoList.length;
          getCheckAll.innerText = checkAll; 
      
          // Счетчик всех ОТМЕЧЕННЫХ (checked) инпутов в todo листе
          completedAll = tempTodos.length;
          getCompleted.innerText = completedAll;

    todo.innerHTML = '';
    let displayMessage ='' ;
    
    
    data.forEach(function({title, id, checked, date}){
        displayMessage = `
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="item-todo">
          <input type="checkbox" id="${id}" ${checked && 'checked="true"'}>
          <label for="${id}">${title}</label
          >
        </div>

        <div class="d-flex flex-column">
          <button data-id="${id}" type="button" class="btn btn-danger btn-sm mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path
                d="M 10 2 L 9 3 L 5 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 21.093063 5.9069372 22 7 22 L 17 22 C 18.093063 22 19 21.093063 19 20 L 19 5 L 20 5 L 20 3 L 19 3 L 18 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z"
              />
            </svg>
          </button>
          <span class="badge bg-secondary">${date}</span>
        </div>
      </li>
        `;

        todo.insertAdjacentHTML("afterbegin", displayMessage);

        todo
          .querySelector(`button[data-id="${id}"]`)
          .addEventListener("click", () => removeTodo(id));   
        todo
          .querySelector(`input[id="${id}"]`)
          .addEventListener("change", () => changeTodo(id))
    })


}



