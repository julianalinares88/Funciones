const transacciones = [
    { 
        categoria: "comida", 
        monto: 50 },
    { 
        categoria: "transporte", 
        monto: 20 },
    { 
        categoria: "comida", 
        monto: 30 },
    { 
        categoria: "entretenimiento", 
        monto: 15 },
    { 
        categoria: "transporte", 
        monto: 25 }
];

const calcularTotalPorCategoria = (transacciones) => {
    const totalPorCategoria = {}; // Objeto para almacenar el total por categoría

    // Usando un bucle for normal
    for (let i = 0; i < transacciones.length; i++) {
        const transaccion = transacciones[i]; // Accede a la transacción actual
        const categoria = transaccion.categoria; // Obtiene la categoría
        const monto = transaccion.monto; // Obtiene el monto

        // Verifica si la categoría ya existe en el objeto
        if (totalPorCategoria[categoria]) {
            totalPorCategoria[categoria] += monto; // Suma el monto si la categoría ya existe
        } else {
            totalPorCategoria[categoria] = monto; // Inicializa el monto si es la primera aparición
        }
    }

    return totalPorCategoria; // Retorna el objeto con el total por categoría
};



const resultado = calcularTotalPorCategoria(transacciones);
console.log(resultado);
