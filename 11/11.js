//11 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.


let valor = parseFloat(prompt("qual tabuada voce quer? "))
for(let contador = 0; contador <=10; contador++){
    tabuada = contador * valor
 alert(valor + " x " + contador + "= " + tabuada)
}