// const promesa = new Promise((resolve, reject) => {
// 	let condicao = true
// 	if (condicao) {
// 		setTimeout(() => {
// 			resolve({ nome: 'Andre', idade: 28 })
// 		}, 100)
// 	} else {
// 		reject(Error('Um erro ocorreu na promise'))
// 	}
// })

// const retorno = promesa
// 	.then(
// 		resultado => {
// 			console.log(resultado)
// 		},
// 		rejeitada => {
// 			console.log(rejeitada)
// 		}
// 	)
// 	.finally(() => {
// 		console.log('Finalizado')
// 	})

const login = new Promise(resolve => {
	setTimeout(() => {
		resolve('Úsuario Logado')
	}, 1000)
})

const dados = new Promise(resolve => {
	setTimeout(() => {
		resolve('Dados Carregados')
	}, 1500)
})

const carregouTudo = Promise.race([login, dados])
carregouTudo.then(resultado => {
	console.log(resultado)
})
