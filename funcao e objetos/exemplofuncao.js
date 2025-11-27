function saudacao(){
let NomePessoa = prompt("digite seu nome: ")
  
 let horaAtual = new Date (). getHours()

 if (horaAtual > 6 && horaAtual < 13 ) {
    alert("bom dia" + NomePessoa)
 }else if (horaAtual >= 13 && horaAtual < 18) {
    alert("boa tarde" + NomePessoa)
 }else{
     alert("boa noite " + NomePessoa)

 }
} saudacao()

let pessoa = {
    nome: "arthur",
    idade: 17,
    sobrenome:"oliveira",
    estado:"SP",
    cidade:"SCS",
}
  console.log(pessoa.nome)
  console.log(pessoa.idade)

  for(let chave in pessoa){ 
      console.log(chave + " : " + pessoa(chave))

  }