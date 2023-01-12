// https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1&t=hQ8fzB5tXoCqDHjm-0
// api cambios
// https://api.exchangerate.host/latest?base=USD
// api de alertas
// https://sweetalert2.github.io/



let divMae = document.getElementById('rates');

const btnSearch = document.getElementById('search');

const buscaCambio = () => {
  let moeda = document.getElementById('moeda').value;
  fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
	.then(response => response.json())
	.then(data => {
    const ratesList = data.rates;
		const valoresRatesList = (Object.entries(ratesList)).map((rates) => console.log(rates));
		// console.log(valoresRatesList);
		// const elementCreator = valoresRatesList.forEach((element) => document.createElement('div').innerHTML = element);
		const elements = document.getElementById('rates');
		const elementCreator = elements.forEach((element, i) => {
			const child = document.createElement('div')
			child.className = "testes";
			child.innerText = `${valoresRatesList[0]} ${valoresRatesList[1]}`
			divMae.appendChild(child)
			console.log(i)
		});
    // return divMae.appendChild('div');
	});
};

const retornaCambio = () => {

}

btnSearch.addEventListener('click', buscaCambio);

// let moeda = document.getElementById('moeda').innerText;











// valoresRatesList.forEach((element, i) =>
// const childElement = document.createElement('div');
// childElement.className = 'elements';
// childElement.innerText = i;
// divMae.appendChild(childElement);
// console.log(i)
// )