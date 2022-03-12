const notas = [10, 7, 5, 4]

let somaDasNotas = 0


/* notas.forEach(nota =>{
   somaDasNotas = somaDasNotas + nota    
}) */

notas.forEach(function(nota){
    somaDasNotas = somaDasNotas + nota

})

let media = somaDasNotas/notas.length

console.log(media)