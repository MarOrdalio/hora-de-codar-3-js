//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).


soma = 0
quantidade = 0
for(let contador =15; contador<=100; contador++ ){
soma = soma + contador //  ou (soma+=contador)comça com 0 adiciona 0, depois 1 adiciona 1....
quantidade++ // contar a quantidade de vez no contador
}

media = soma/quantidade
alert("a média aritimética é: " + media)