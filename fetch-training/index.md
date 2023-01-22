<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Fetch & Promise</h1>

## Complete exercise

#### Task 1 💻

+ Создайте ветку на github `name-fetch-training`
+ Далее создайте папку `fetch-training` и добавьте файлы `index.html` `index.js`
+ Реализуйте приложение:

    + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
    + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
    + Далее напишите две функции `getTodos` & `printTodos`
        + Функция `getTodos` делает запрос по указанному адресу и забирает данные. 
        + Функция `printTodos` создает список `ul`, и в каждый елемент `li` добавляет данные из полученного объекта с делом. Нам нужны ключи из объекта `id` `title`.

Example:
---
        1 delectus aut autem
        2 quis ut nam facilis et officia qui
        3 fugiat veniam minus
        ...
        200 ipsam aperiam voluptates qui


<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Promise</h1>

## Complete exercise

#### Task 2 💻

У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒 
Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

###### Реализуйте задачу двумя способами:
- Promise chaining
- Async / await