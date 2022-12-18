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
let getCompleted = document.querySelector('check-complted')



let todoList = [];                                       //Записываем каждый новый ввод todo
let tempTodos = [];

let checkAll = 0;
let completed = 0;

if(localStorage.getItem('todoList')){
  todoList = JSON.parse(localStorage.getItem('todoList'));
  displayMessages()
}

btnAdd.addEventListener('click', function(){
  if (inputAdd.value.trim() === ''){
    alert('Поле не может быть пустым!')
    inputAdd.value ='';
    return
  }
    let newTodo={                                     //Содержит данные нашего последнего ввода todo
        todo:inputAdd.value,
        id:getRandomId(),
        checked:false,
        date:'Mon Dec 05 2022,'

    };
    inputAdd.value='';                           //После ввода стирается из input
    todoList.push(newTodo);

    localStorage.setItem('todoList', JSON.stringify(todoList))        //Сохранение после обновления
    displayMessages ()
})

btnDeleteAll.addEventListener('click', function(){
  todoList = [];
  localStorage.clear();
  todo.innerHTML = '';
  getCheckAll.innerText = '0'; 
  
})

btnDeleteLast.addEventListener('click', function(){
    let tempTodos = [...todoList];
    const removeItem = tempTodos.pop();
    console.log(removeItem.id);
    todoList = todoList.filter((el) => el.id !== removeItem.id);
    localStorage.setItem('todoList', JSON.stringify(todoList)) 
    displayMessages(todoList);
    
    return;
})


const removeTodo = (id) =>{
  todoList = todoList.filter((el) => el.id !==id)

  localStorage.setItem('todoList', JSON.stringify(todoList)) 
  displayMessages (todoList)
}



function displayMessages (){
  console.log(todoList)
    todo.innerHTML = '';
    let displayMessage ='' ;
    
    todoList.forEach(function(item, id){
        displayMessage += `
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="item-todo">
          <input type="checkbox" id="${id}" ${item.checked ? 'checked': ''}>
          <label for="${id}">${item.todo}</label
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
          <span class="badge bg-secondary">Mon Dec 05 2022</span>
        </div>
      </li>
        `;
        todo.innerHTML = displayMessage;
        todo
          .querySelector(`button[data-id="${id}"]`)
          .addEventListener("click", ()=> {removeTodo(item.id)})       //-удаление элемента при нажатии на иконку внутри input

          .querySelector(`input[for="${id}"]`)
          .addEventListener("click", ()=> {                             //- check элемента рпи нажатии на checkbox и занесение его в localStorage
          item.checked = !item.checked
          })

          localStorage.setItem('todoList', JSON.stringify(todoList))  
    })

    checkAll = todoList.length;
    getCheckAll.innerText = checkAll; 
}


// todo.addEventListener('change', function(event){                     //при изменении чего-то внутри запускается функция
//   let idInput = event.target.getAttribute('id');                    //элеммент который вызвал событие (когда мы поставили галочку) - берем артибут
//   let forLabel = todo.querySelector('[for='+ idInput +']');          //ищем селектор с помощью атрибута id
//   let valueLabel = forLabel.innerHTML; 
//   console.log(valueLabel)                              //выводим значение label value

   
//   todoList.forEach(function(item){
//     if(item.todo === valueLabel){
//       item.checked = !item.checked;
//       localStorage.setItem('todoList', JSON.stringify(todoList))  
//     }
//   })
// })
