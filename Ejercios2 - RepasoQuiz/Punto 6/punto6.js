const frutas = ["manzana", "banana", "naranja", "manzana", "pera", "banana", "kiwi"];


const contarFrutas = (frutas) => {
    const contador = []; // Objeto para almacenar el conteo de frutas

    // Usando un bucle for normal
    for (let i = 0; i < frutas.length; i++) {
        const fruta = frutas[i]; // Accede a la fruta usando el índice

        if (contador[fruta]) {
            contador[fruta] += 1; // Incrementa el conteo si la fruta ya existe
        } else {
            contador[fruta] = 1; // Inicializa el conteo en 1 si es la primera aparición
        }
    }

    return contador; // Retorna el objeto con el conteo de frutas
};

const resultado = contarFrutas(frutas);
console.log(resultado);
