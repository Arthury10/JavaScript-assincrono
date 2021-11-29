// fetch('https://pokeapi.co/api/v2/pokemon/')
// 	.then(r => r.json())
// 	.then(pokemon => {
// 		console.log(pokemon)
// 	})

// const url = 'https://jsonplaceholder.typicode.com/posts/'
// const options = {
// 	method: 'POST',
// 	body: '{"title": "JavaScript"}',
// 	headers: {
// 		'Content-Type': 'application/json; charset=utf-8'
// 	}
// }

// fetch(url, options)
// 	.then(r => r.json())
// 	.then(r => console.log(r))

// const url = 'https://jsonplaceholder.typicode.com/posts/2'
// const options = {
// 	method: 'HEAD'
// }

// fetch(url, options).then(r => {
// 	console.log(r.headers.get('content-type'))
// })

const url = 'https://www.google.com'

fetch(url)
	.then(r => r.text())
	.then(text => console.log(text))
