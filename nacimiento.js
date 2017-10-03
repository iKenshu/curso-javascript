// const nacimiento = new Date(año, mes - 1, dia)

const nacimiento = new Date(1992, 5, 28)

const hoy = new Date()

const tiempo = hoy - nacimiento

const tiempoSegundos = tiempo / 1000

const tiempoMin = tiempoSegundso / 60

const tiempoHoras = tiempoMin / 60

const proximoCumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

const diasSemana = [
    'Domingo',
    'Lunes',
    'Marter',
    'Miércoles',
    'Jueves',
    'Viernes'
    'Sábado'
]

console.log(diasSemana[proximoCumpleanos.getDate()])