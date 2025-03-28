
//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números 
// inteiros informados pelo usuário e todos os números inteiros entre eles.
//  Considere que o primeiro sempre será menor que o segundo.


let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2= parseFloat(prompt("Digite o segundo valor: "))

while(valor1>valor2){
alert("o segundo tem que ser maior que o primeiro!")
let valor2= parseFloat(prompt("Digite o segundo valor: "))
if(valor2>valor1){
    break;
}
}

let contador
let soma = 0
let quantidade = 0
for(contador = valor1; contador <= valor2; contador++ ){// <= vai até o valor2
    soma += contador
    quantidade++ // para contar a quantidade de vezes  para dividir dps lá embaixo 
}

media = soma/quantidade


alert("os valores entre valor valor 1 e valor 2 são: " + media)