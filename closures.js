function saludarFamilia(apellido){
    return function saludarMiembroDeFamilia(nombre) {
        console.log(`Hola ${nombre} ${apellido}`)
    }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Pedro")
saludarGomez("Juand")
saludarGomez("Monica")
saludarGomez("Laura")

saludarPerez("Dario")
saludarPerez("Sacha")
saludarPerez("Alfonso")
