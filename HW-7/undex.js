
const parent = document.getElementById("list");

function addTask(){
  const getValue = document.getElementById("input-add").value;

const li = document.createElement('li')// создаём элемент списка
li.classList.add ('item');//присваеиваем ему класс


const input = document.createElement('input')  //создали инпут

input.setAttribute("type", "checkbox")   //это для того чтобы не было поля ввода

const text = document.createElement('div')// создаем элемент див для текста
text.classList.add ('item_text')// даем класс

text.innerText = getValue   //чтобы то, что пишем в инпуте появлялось в списке

const inputText = document.createElement('div')
inputText.classList.add ('inputText')

inputText.appendChild(input)
inputText.appendChild(text) // добавили инпут и текст в один див

li.appendChild(inputText)// добавляем в элемент списка див с текстом и инпут


const buttonWrapper = document.createElement("div") //создаем див для кнопки
    const button = document.createElement("button")  //создали саму кнопку
    button.classList.add("buttonDelItem")
    button.innerText = 'Delete'

    button.addEventListener("click", function() {
      li.remove ()     // удаляет элемент 
    })

    buttonWrapper.classList.add("buttonWrapper")
    buttonWrapper.appendChild(button)
    li.appendChild(buttonWrapper)
    parent.appendChild(li)


input.addEventListener ('click', function(){
  li.classList.toggle ('ClickCheckbox')   //toggle отображает то, что не отображено, скрывает то, что отображено
})

const DeleteLast = document.querySelector(".btn-dark")
DeleteLast.addEventListener("click", function() {
  const lastChild = document.querySelector("item")
  lastChild.parentNode.removeChild(lastChild)     // удаляет посл эл
})

const DeleteAll = document.querySelector(".btn-danger") // Delete All
DeleteAll.addEventListener("click", function(){
  const list = document.getElementById("list")
  list.parentNode.removeChild(list)
})



}





