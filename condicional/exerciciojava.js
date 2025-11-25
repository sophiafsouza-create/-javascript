 let login = window.prompt("Qual seu nome?")
 let senha = window.prompt("Qual sua senha?")

 switch (login) {
    case "admin":
        console.log("Usuário Correto. bem-vindo")
        break;
 
    default:
        console.log("Usuário incorreto. tente novamente")
        break;
 }
 switch (Senha) {
    case "Senha123":
        console.log("Senha Correta. bem sucedido!")
        break;
 
    default:
        console.log("Senha incorreta. Tente novamente!")
        break;
 }

//  let login = prompt("digite seu usuário: ")

//  let login = prompt("Digite sua senha: ")

//  if (login == "admin" && senha == "Senha123") {
//     console.log("login bem sucedido!")
//  }
//  else{
//     console.log("Voce nao ter permissao a esse acesso!")
//  }