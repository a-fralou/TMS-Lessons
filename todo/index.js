let addMessage = document.querySelector('#message'),
    addButton = document.querySelector('#add-btn'),
    delButton = document.querySelector('#del-btn'),
    todo = document.querySelector('#todo')

let todoList = [];
if(localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMsg();
}

addButton.addEventListener('click', function () {

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }

    todoList.push(newTodo)
    displayMsg();
    localStorage.setItem('todo', JSON.stringify(todoList));

})



function displayMsg() {
    
    todoList.forEach(function () {
        let showMsg = '';
        todoList.forEach(function(item, i) {
            showMsg += `
            <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.todo}</label>
            </li>
            `;

            todo.innerHTML = showMsg;
  

        });



    })
}




/* чекбоксы */

todo.addEventListener('change', function(event){
    let valueLabel = todo.querySelector('[for='+ event.target.getAttribute('id')+']').innerHTML;


    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {

            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
});
