//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive).
//  Considere que o N será sempre maior que ZERO.N  é um valor informado pelo usuário


let contador
let valorn = parseFloat(prompt("Digite um valor: "))  
while(valorn<=0){
    alert("digite numeros acima de 0: ")
    valorn = parseFloat(prompt("Digite um valor: "))  
}
for(contador = 1; contador <=valorn; contador++){
alert("os valores são : " + contador) // coloquei para exibir o contador não valorn= numero digitado mas sim ocontador que tá com ++ ta contando a cada ciclo
}   