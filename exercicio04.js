 
 alert("Informe as notas de 0 a 10")
let nota1 = ( parseFloat("Informe a primeira nota"))
let nota2 = (parseFloat("Informe a segunda nota "))
let nota3 = (parseFloat("Informe sua terceira nota"))
let nota4 = (parseFloat("Informe sua quarta nota "))

let medida = (nota1 + nota2+ nota3+ nota4)/4
     
if (medida >=7 ){
     console.log("Aprovado")
}

else if( menida > 5 && medida< 7 ){
  console.log ("Recuperacao")

}

else{
    console.log("reprovado")
}
````