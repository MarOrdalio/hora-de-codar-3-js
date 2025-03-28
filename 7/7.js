//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, 
// calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos
//  durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, 
// deve ser solicitado um novo valor ao usuário. 
let notas = []
let contador = 1

while(notas.length<6){
    notas = parseFloat(prompt(`Digite a nota ${i} (entre 0 e 10):`));
}


if(nota>=0 && nota<=10 ){
    nota.push(notas)
    contador++
}else{
    alert("nota inválida digiite numeros de 0 a 10")
}

    



