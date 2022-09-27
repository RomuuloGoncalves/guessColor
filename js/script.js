let escolhas = document.querySelectorAll(".div__color");
const reloadAcerto = document.querySelectorAll(".btn.btn-danger")[0]
let cores = [];

reloadAcerto.addEventListener("click",()=>{
	location.reload()
})

function gerar() {
	escolhas.forEach((elemento) => {
		let cor = criarCor();
		
		cores.push(cor);
		elemento.innerHTML = `RGB(${cor})`;
		elemento.style.border = "2px solid black";
		elemento.style.backgroundColor = `rgb(${cor})`;
	});

	let sorte = randomIntFromInterval(0, 5).split("");
	sorte = sorte[sorte.length -1]

	escolhas.forEach((elemento, indice) => {
		if (indice != sorte) {
			let cor = criarCor();
			elemento.innerHTML = `RGB(${cor})`;
			elemento.style.border = "2px solid black";
		}
	});
}

console.log(randomIntFromInterval(0, 255))

function criarCor() {
	let cor = [];
	for (let i = 0; i <= 4; i++) {
		if (i == 1 || i == 3) {
			cor[i] = ",";
		} else {
			cor[i] = randomIntFromInterval(0, 255);
		}
	}
	return cor.join("");
}

function verificar(posicao) {
	let escolhido = document.getElementById(`color__field-${posicao}`);
	let conteudoEscolhido = escolhido.innerHTML;

	conteudoEscolhido = conteudoEscolhido.replace("RGB(", "");
	conteudoEscolhido = conteudoEscolhido.replace(")", "");
	console.log(conteudoEscolhido);

	if (conteudoEscolhido == cores[Number(posicao) - 1]) {
		const btn = document.getElementById("btnModal")
		btn.click()
	}else{
		const btnDerrota = document.getElementById("btnModalDerrota")
		btnDerrota.click()
	}
}

function randomIntFromInterval(min, max) {
	let numero = Math.floor(Math.random() * (max - min + 1) + min);
	if(numero < 100 && numero >= 10){
		return numero = `0${numero}`
	}

	if(numero < 10){
		return numero = `00${numero}`
	}
	return numero
}
gerar();