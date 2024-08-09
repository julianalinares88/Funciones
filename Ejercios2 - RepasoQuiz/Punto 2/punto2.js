const tasks = [
    {
        id: 1,
        task: 'Buy groceries',
        status: 'incomplete'
    },
    {
        id: 2,
        task: 'Clean the house',
        status: 'incomplete'
    },
    {
        id: 3,
        task: 'Study for exams',
        status: 'incomplete'
    },
    {
        id: 4,
        task: 'Go for a run',
        status: 'incomplete'
    },
    {
        id: 5,
        task: 'Read a book',
        status: 'incomplete'
    }
];

const changetask = (array) => {
    const newtask = []; // Nuevo arreglo para almacenar las tareas actualizadas

    array.forEach(task => {
        if (task.id % 2 !== 0) {
            newtask.push({ ...task, status: "complete" }); // Cambia el estado y agrega al nuevo arreglo
        } else {
            newtask.push({ ...task }); // Agrega la tarea sin cambios
        }
    });

    return newtask; // Retorna el nuevo arreglo
};

const taskchange = changetask(tasks);
console.log(taskchange);

// const changetask = (array) => {
//     return array.map(task => {
//         // map se usa para modificar los objetos sin alterar el arreglo original.
//         if ( task.id % 2 !== 0) { //Cambia el estado si el id es impar
//         return {...task, status: 'complete'};
//         }
//         return task;
//     });
// };

// const newtask = changetask(tasks);
// console.log(newtask);