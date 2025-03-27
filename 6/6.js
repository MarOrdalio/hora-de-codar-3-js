//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final.
//  Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?"
//  e solicitar um resposta. Se a resposta 
// for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a
//  quantidade de alunos aprovados.






let alunos = 0
while(true){

let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2= parseFloat(prompt("Digite o segundo valor: "))

soma= valor1 + valor2
media = soma/2

if(media>=9.5){
    alert("sua média foi: " + media + "você passou!")
    alunos++
}else{
    alert(`sua média foi:  ${media} , você não passou!`)
}
let opcao = (prompt("Deseja calcular a nota de outro aluno (s/n)? "))

if(opcao =='n'){
   
    alert("Os alunos aprovados são: " + alunos)
    break
}
   
}

