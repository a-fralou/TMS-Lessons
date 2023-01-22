//#### Task 1 💻

async function getTodos() {
	let result = await fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => res.json());

	printTodos(result);
};

// getTodos();

function printTodos(list) {
	const todos = document.createElement('ul');
	document.body.prepend(todos);

	list.forEach((el) => {
		todos.innerHTML += `<li>${el.id} ${el.title}</li>`
	});
};

//#### Task 2 💻

function getPosts(num) {
	return new Promise((resolve, reject) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
			.then(response => {
				if (response.ok) {
					resolve(response.json())
				} else {
					reject(new Error('error..'))
				};
			});
	})
		.then(response => {
			document.body.innerHTML += `
		<h2>${response.id}. ${response.title}</h2>
		<div>${response.body}</div>`
		});
};

getPosts(15)
	.then(() => getPosts(23))
	.then(() => getPosts(722))
	.then(() => getPosts(3))

// async function getPosts2(num) {
// 	await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
// 		.then(response => response.json())
// 		.then(response => {
// 			post = `
// 		<h3>${response.id}. ${response.title}</h3>
// 		<div>${response.body}</div>`
// 			document.body.insertAdjacentHTML('beforeend', post)
// 		})
// 		.catch(error => {
// 			console.log(`${error}`)
// 		});
// };

async function getPosts2(num) {
	try{
		await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
		.then(response => response.json())
		.then(response => {
			post = `
		<h3>${response.id}. ${response.title}</h3>
		<div>${response.body}</div>`
			document.body.insertAdjacentHTML('beforeend', post)
		})
	} catch(error) {
		console.log(`${error}`)

	};
};

getPosts2(15)
	.then(() => getPosts2(23))
	.then(() => getPosts2(98444)) 
	.then(() => getPosts2(3))