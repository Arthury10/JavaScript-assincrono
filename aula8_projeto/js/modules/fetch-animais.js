import initAnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais() {
	async function fetchAnimais(url) {
		try {
			const animaisResponse = await fetch(url)
			const animaisJSON = await animaisResponse.json()
			const numerosGrid = document.querySelector('.numeros-grid')

			animaisJSON.forEach(animais => {
				const divAnimal = createAnimais(animais)
				numerosGrid.appendChild(divAnimal)
			})
			initAnimaNumeros()
		} catch (error) {
			console.log(error)
		}

		function createAnimais(animais) {
			const div = document.createElement('div')
			div.classList.add('numero-animal')

			div.innerHTML = `
      <h3>${animais.specie}</h3>
      <span data-numero>${animais.total}</span>
    `
			return div
		}

		fetchAnimais('./animaisapi.json')
	}
}
