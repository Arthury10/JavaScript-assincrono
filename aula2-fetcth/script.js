// const doc = fetch('./doc.txt')

// doc.then(resolucao => {
// 	return resolucao.text()
// }).then(body => {
// 	const conteudo = document.querySelector('.conteudo')
// 	conteudo.innerText = body
// 	console.log(body)
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep.then(resolucao => {
// 	return resolucao.json()
// }).then(body => {
// 	console.log(body)
// 	const conteudo = document.querySelector('.conteudo')
// 	conteudo.innerHTML = body.logradouro
// })

// const cep = fetch('./style.css')

// cep.then(resolucao => {
// 	return resolucao.text()
// }).then(body => {
// 	console.log(body)
// 	const conteudo = document.querySelector('.conteudo')
// 	const style = document.createElement('style')
// 	style.innerHTML = body
// 	conteudo.appendChild(style)
// })

// const sobre = fetch('./sobre.html')

// const div = document.createElement('div')

// sobre
// 	.then(r => r.text())
// 	.then(body => {
// 		div.innerHTML = body
// 		const titulo = div.querySelector('h1')
// 		document.querySelector('h1').innerText = titulo.innerText
// 		console.log(titulo)
// 	})

// const image = fetch('./javascript.svg')

// image
// 	.then(r => r.blob())
// 	.then(body => {
// 		const blobUrl = URL.createObjectURL(body)
// 		const imagemDom = document.querySelector('img')
// 		imagemDom.src = blobUrl
// 	})

// const image = fetch('https://viacep.com.br/ws/01001000/json')

// image
// 	.then(r => {
// 		const r2 = r.clone()
// 		r.text().then(text => {
// 			console.log(text)
// 		})
// 		r2.json().then(json => {
// 			console.log(json)
// 		})
// 		console.log(r)
// 	})
// 	.then(body => {
// 		console.log(body)
// 	})

// const image = fetch('https://viacep.com.br/ws/01001000/json')

// image.then(response => {
// 	console.log(response)
// 	response.headers.forEach(console.log)
// })

const image = fetch('./docs.txt')

image.then(response => {
	console.log(response.type)
	if (response.status === 404) {
		console.log('Arquivo não encontrado')
	}
})
