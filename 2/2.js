//2 - Escreva um algoritmo para ler 2 valores informados pelo usuário e enquanto o segundo valor informado 
// for igual ou menor que ZERO, deve ser lido um novo valor, mas para a mesma variável. Ou seja, para o 
// segundo valor não pode ser aceito o valor zero nem um valor negativo. 
//O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

let valor1 = parseFloat(prompt("digite o primeiro valor: "));
let valor2 = parseFloat(prompt("digite o segundo valor: "))

while(valor2<=0){
    alert("digite uma valor acima de zero!")
    let valor2 = parseFloat(prompt("digite o segundo valor: ")) 
    if(valor2>0){
        break;
    }
}

divisao = valor1/valor2
alert("a divisão dos valores informados são: " + divisao)