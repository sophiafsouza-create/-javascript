let anoNascimento =  parseInt(prompt("Digite o ano de nascimento"))
   let anoAtual = new Date().getFullYear()
 let idade = anoAtual - anoNascimento

if(idade >= 18){  
    console.log("Maior de idade")
    console.log("sua idade é" + idade)
}
console.log ("sua idadeé:" + idade)