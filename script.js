function jogar(){

personagem = ["","",""]; //escolha do usuário

viloes = ["","",""]; //escolha do computador

forcaPersonagem = 0;
forcaVilao = 0;

for(let i = 0; i<3; i++){
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i+1));
    personagem[i] = escolhaPersonagem;
    forcaPersonagem += Math.floor(Math.random() * 10) + 1; // a cada volta muda o valor para somar a força do grupo todo

}

alert("Agora o array personagem contém: " + personagem)

for(let i = 0; i<3; i++){
    indiceAleatorio = Math.floor(Math.random() * 5);
    viloesPssiveis = ["coringa", "Nazaré Tedesco", "Odete Roitman", "Carminha", "Alerquina"];
    viloes[i] = viloesPssiveis[indiceAleatorio];
    forcaVilao += Math.floor(Math.random() * 10) + 1;
}

console.log("Vilões: " + viloes)

//Compara os dois tomes para saber quem venceu
if(forcaPersonagem > forcaVilao){
    alert("Seu time é muito forte, você ganhou a disputa do cabo de  guerra! Sua força foi: " + forcaPersonagem)
} else if (forcaVilao > forcaPersonagem){
    alert("Seu time é muito fraco, você perdeu a disputa do cabo de  guerra! Sua força foi: " + forcaPersonagem + "\nForça do vilão: "+ forcaVilao);
}else{
    alert("Ninguém ganhou, forças iguais");
}
}