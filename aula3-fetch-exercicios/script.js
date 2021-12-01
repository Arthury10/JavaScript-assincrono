// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const endereco = document.querySelector('#endereco')
const dadoCep = document.querySelector('#dadoCep')
const resultado = document.querySelector('#resultado')

endereco.addEventListener('change', e => {
	e.preventDefault()
	const cep = dadoCep.value
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then(r => r.json())
		.then(body => {
			resultado.innerHTML = `
            <p>${body.logradouro}</p>
            <p>${body.bairro}</p>
            <p>${body.localidade}</p>
            <p>${body.uf}</p>
        `
		})
})

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('.btc')

function fatchBtc() {
	fetch('https://blockchain.info/ticker')
		.then(r => r.json())
		.then(btcJson => {
			btcDisplay.innerHTML = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
		})
}

//setInterval(fatchBtc, 1000 * 30)

fatchBtc()

//outro método
const valorBitcoin = document.querySelector('#valorBitcoin')
const currency = document.querySelector('#currency')
const resultadoCurrency = document.querySelector('#resultadoCurrency')

valorBitcoin.addEventListener('submit', e => {
	e.preventDefault()
	const typeCurrency = currency.value
	fetch(`https://blockchain.info/ticker`)
		.then(r => r.json())
		.then(body => {
			resultadoCurrency.innerHTML = `
       ${currency.value}: ${body[typeCurrency].buy}
    `
		})
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const icon = document.querySelector('#icon')
const piada = document.querySelector('#piada')
const btnPiada = document.querySelector('#btnPiada')

btnPiada.addEventListener('click', e => {
	fetch('https://api.chucknorris.io/jokes/random')
		.then(r => r.json())
		.then(body => {
			icon.src = body.icon_url
			piada.innerHTML = body.value
		})
})
