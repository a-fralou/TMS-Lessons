let btnDelete = document.getElementById('btn-delete');
let btnDeleteLast = document.getElementById('btn-deleteLast');
let btnDeletInCheckbox = document.getElementById('btn-deleteInCheckbox');

let btnAdd = document.getElementById('btn-add');

let btnShowAll = document.getElementById('btn-showAll');
let btnShowCompleted = document.getElementById('btn-showCompleted');
let todo = document.getElementById('todo-list')


let inputAdd = document.getElementById('input-add');



let todoList =[];                                       //Записываем каждый новый ввод todo

btnAdd.addEventListener('click', function(){
    let newTodo={                                     //Содержит данные нашего последнего ввода todo
        todo:inputAdd.value,
        checked:false,
        important:false,
    };
    todoList.push(newTodo);
    displayMeassges ()
})

function displayMeassges (){
    let displayMessage = '';
    todoList.forEach(function(item, i){
        displayMessage += `
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="item-todo">
          <input
            type="checkbox"
            id="item_${i}"
          >
          <label
            id="item_${i}" 
           
            >${item.todo}
            </label
          >
        </div>

        <div class="d-flex flex-column">
          <button id="btn-deleteInCheckbox" type="button" class="btn btn-danger btn-sm mb-2">
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
    })
}