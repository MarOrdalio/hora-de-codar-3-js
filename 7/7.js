//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, 
// calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos
//  durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, 
// deve ser solicitado um novo valor ao usuário. 
//ou quantidade = 0
soma = 0

for( let contador = 0; contador<6; contador++){
   let notas = parseFloat(prompt("Digite a Nota: "))



   while(notas>10 || notas<0){

    alert("digite numeros válidos de 0 a 10: ")
    
      notas = parseFloat(prompt("Digite a Nota: "))
     
}

soma = soma + notas// o soma ficou fora do while se não ia somar com ele, por isso ficou dentro do para no final
//ou quantida ++ 

}
media = soma/6
alert("a média do aluno é: " + media)