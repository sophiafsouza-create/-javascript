let sacao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML
let FormularioElemento = document.getElementById("formulario")

novoParagrafo.textContent = "paragrafo criado via js"; //poe um conteudo no p

secao[0].appendChild(novoParagrafo);

//secao[0].appendChild(novoParagrafo)

//remove a teg label
FormularioElemento.removeChild(labelElemento);