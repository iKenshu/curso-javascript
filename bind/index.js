class Toggable {
    constructor(element) {
        // Inicializar el estado interno
        this.element = element
        this.element.innerHTML = 'Off'
        this.activated = false
        this.onClick = this.onClick.bind(this)
        this.element.addEventListener('click', this.onClick)
    }

    onClick(ev) {
        console.log(this)
        // Camiar estado interno
        this.activated = !this.activated

        // Llamar a toggleText
        this.toggleText()
    }

    toggleText() {
        // Cambiar el texto
        this.element.innerHTML = this.activated ? 'On' : 'Off'
    }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
