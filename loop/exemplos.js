let frutas = ["banana", "laranja", "maça", "pitaya", "melancia", "Uva"]

// console.log(fruta[3])
// console.log(fruta[5])

//forEach =>> percorre uma lista 
frutas.forEach(fruta => {
   console.log("A fruta é: " + fruta )

})


//percorrer uma lista com for

for(let indice = 0; indice < rutas.length; indice++){ 
    console.log(frutas[indice])

    if(frutas[indice]== "uva"){
        console.log("ey gosto de" + frutas[indice])
    }
}