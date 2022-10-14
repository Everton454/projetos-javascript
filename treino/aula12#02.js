var ja = new Date()
var hora = ja.getHours()
console.log(`Agr são ${hora} horas`)
if (hora < 12){
    console.log(`Ainda tá de manha, são ${hora} horas `)
} else if (hora <= 18) {
        console.log(`Já está de tarde, já são ${hora} horas`)
} else {
    console.log(`Já tá bem tarde , já são ${hora} horas`)
}