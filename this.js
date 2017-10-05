class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }

    listarAmigos() {
        this.amigos.forEach((amigo) => {
            console.log(`Hola, mi nombres ${this.nombre} y soy amigo de ${amigo}`)
        })
    }
}

const kevin = new Persona ("Kevin", ["Pedor", "Juan", "Pepe"])