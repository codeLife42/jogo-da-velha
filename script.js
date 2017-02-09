//Variaveis
var quadrados = document.querySelectorAll("img");
var btnReiniciar = document.querySelector("button");
//Variavel para ver se a jogada é par ou impar, ou seja para decidir entre x ou o
var jogadaAtual = 0;
var fimDeJogo = false;
var idIntervalo;
//Eventos
btnReiniciar.addEventListener('click',function(){
	reiniciarJogo();
});
for(var i = 0;i < quadrados.length;i++){
	//Gera valores de 1 a 9, para nao ter valores iguais quando for passar na funcao confereVitoria
	quadrados[i].textContent = i;
	quadrados[i].addEventListener('click',function(){
	if(!fimDeJogo){
		jogada(this);
	}
	});
}
//Funcoes
//Confere se a jogadaAtual e par ou impar, colocando a imagem no quadrado
function jogada(quadrado){
	if(jogadaAtual % 2 === 0){
		quadrado.setAttribute("src","img/x.png");
		quadrado.textContent = 'x';
		quadrado.classList.add('desativado');
		jogadaAtual++;
	}else{
		quadrado.setAttribute("src","img/o.png");
		quadrado.textContent = 'o';
		quadrado.classList.add('desativado');
		jogadaAtual++;
	}
	confereVitoria();
}
//Verifica se o jogador ganhou o jogo
function confereVitoria(){
	//Lógica com muito copy-paste, não é uma boa solução, trocar
	//Vitoria horizontal
	if((quadrados[0].textContent === quadrados[1].textContent) && (quadrados[1].textContent === quadrados[2].textContent)){
		vitoriaJogo(quadrados[0],quadrados[1],quadrados[2]);
	}else if((quadrados[3].textContent === quadrados[4].textContent) && (quadrados[4].textContent === quadrados[5].textContent)){
		vitoriaJogo(quadrados[3],quadrados[4],quadrados[5]);
	}else if((quadrados[6].textContent === quadrados[7].textContent) && (quadrados[7].textContent === quadrados[8].textContent)){
		vitoriaJogo(quadrados[6],quadrados[7],quadrados[8]);
	}
	//Vitoria vertical
	else if((quadrados[0].textContent === quadrados[3].textContent) && (quadrados[3].textContent === quadrados[6].textContent)){
		vitoriaJogo(quadrados[0],quadrados[3],quadrados[6]);
	}else if((quadrados[1].textContent === quadrados[4].textContent) && (quadrados[4].textContent === quadrados[7].textContent)){
		vitoriaJogo(quadrados[1],quadrados[4],quadrados[7]);
	}else if((quadrados[2].textContent === quadrados[5].textContent) && (quadrados[5].textContent === quadrados[8].textContent)){
		vitoriaJogo(quadrados[2],quadrados[5],quadrados[8]);
	}
	//Vitoria diagonal
	else if((quadrados[0].textContent === quadrados[4].textContent) && (quadrados[4].textContent === quadrados[8].textContent)){
		vitoriaJogo(quadrados[0],quadrados[4],quadrados[8]);
	}else if((quadrados[2].textContent === quadrados[4].textContent) && (quadrados[4].textContent === quadrados[6].textContent)){
		vitoriaJogo(quadrados[2],quadrados[4],quadrados[6]);
	}else if(jogadaAtual === 9){
		fimDeJogo = true;
		alert('Empate');
	}
}
function reiniciarJogo(){
	for(var i = 0;i < quadrados.length;i++){
		quadrados[i].textContent = i;
		quadrados[i].removeAttribute("src");
		quadrados[i].classList.remove('desativado');
		quadrados[i].classList.remove('vitoria');
	}
	jogadaAtual = 0;
	fimDeJogo = false;
	clearInterval(idIntervalo);
}
function vitoriaJogo(quad1,quad2,quad3){
	fimDeJogo = true;
	idIntervalo = setInterval(function(){
		quad1.classList.toggle('vitoria');
		quad2.classList.toggle('vitoria');
		quad3.classList.toggle('vitoria');
	},500);
}