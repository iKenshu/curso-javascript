// Calcular la distancia entre dos puntos

const punto1 = {
    x: 0,
    y: 4,
    moverEnX: function (x) { this.x += x },
    moverEnY: function (y) { this.y += y }
}

const punto2 = {
    x: 3, 
    y: 0
    moverEnX: function (x) { this.x += x },
    moverEnY: function (y) { this.y += y }
}

function distancia(punto1, punto2) {
    const x = punto1.x - punto2.x
    const y = punto1.y - punto2.y

    return Math.sqrt(x * x + y * y).toFixed(2)
}

console.log(distancia(punto1, punto2))