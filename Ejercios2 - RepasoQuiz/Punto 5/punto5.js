const grades =[

    {
        name: 'juan', 
        grade: 10},
        {
        name: 'pedro',
        grade: 6},
    {
        name: 'maria',
        grade: 8},
    {
        name: 'jose',
        grade: 5},

   
]


const calcularMedia = (array) => {

    let sumaNotas = 0; // Inicializa la suma de notas

    for (const nota of array) { // se suma la nota de cada NOTA a SUMANOTAS. Esto acumula todas las notas en una sola variable.
        sumaNotas += nota.grade; // Suma cada nota
        
    }

    return sumaNotas / array.length; // Retorna la media
};

const resultado = calcularMedia(grades);
console.log(resultado);