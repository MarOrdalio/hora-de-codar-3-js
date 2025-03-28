//10 - Escreva um programa em que o usuário informe 10 valores e escreva 
// quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42)
//  e quantos deles estão fora deste intervalo.

let dentrointervalo =0;
let foraintervalo=0;

for(let contador = 0; contador<10; contador++ ){
 let valor = parseFloat(prompt("digite seu numero: "));

if(valor <=42 &&  valor>=24){
dentrointervalo++
}else{
    foraintervalo++ //contadores
}
}

alert(`os numeros dentro do intervalo entre 24 e 42 são:  ${dentrointervalo}  e os fora do intervalo são: ${foraintervalo}`)