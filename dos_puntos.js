// Calcular la distancia entre dos puntos

const punto1 = {
    X: 0,
    Y: 4
}

const punto2 = {
    X: 3, 
    Y: 0
}

function distancia(punto1, punto2) {
    const x = punto1.X - punto2.X
    const y = punto1.Y - punto2.Y

    return Math.sqrt(x * x + y * y)
}

console.log(distancia(punto1, punto2))