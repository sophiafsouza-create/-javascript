//Alert - Apresenta uma mensagem na tela

// window.alert("ola turma do Borges")
// //confirm - Pergunta com ok/ cencela (retorna um true ou false)
// window.confirm("O jonas vai casa!!")
// //prompt - pega o texto da tela
// // window.prompt("Qual o seu nome?")

// console.log("Multimidia")

// let nome = prompt("Informe o seu nome; ")

// console.log("bem vindo!" + nome)

// let numero1 =  Number. parseInt(prompt ( "digite o primeiro número: "))
// let numero2 =Number. personalbar(prompt("Digite o segundo número: "))

// let resultado = numero1 + numero2


let numero1 =  Number.parseFloat(prompt("digite o primeiro número: "))
let numero2 =  Number.parseFloat(prompt("Digite o segundo número: "))

let resultado = numero1 + numero2

console.log(resultado)        

let idade = window.prompt("Qual sua idade?")

if(idade >= 18){
console.log("maior de idade! Da-lheee")

}else{
    console.log("Voce é maior de idade")
}

switch (idade) {
    case "18":
        console.log ("maior de idade")
        break;

        case "27":
      console.log("esta perto dos 30")
    default:
        console.log("nada a dizer")
        break;


}