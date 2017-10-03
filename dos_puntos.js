// Calcular la distancia entre dos puntos

function Punto(x, y) {
    this.x = x
    this.y = y
}

Punto.prototype.moverEnX = function moverEnX(x) {
    this.x += x
}

Punto.prototype.moverEnY = function moverEnY(y) {
    this.y += y
}

Punto.prototype.distancia = function distancia(p) {
    const x = this.x - p.x
    const y = this.y - p.y
    return Math.sqrt(x * x + y * y).toFixed(2)
}

const punto1 = new Punto(0, 4)

const punto2 = new Punto(3,0)

console.log(punto1.distancia(punto2))
punto1.moverEnX(10)
console.log(punto1.distancia(punto2))
punto2.moverEnY(-4)
console.log(punto1.distancia(punto2))