const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        pags: 180
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        pags: 381
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 2013,
        pags: 432
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 2002,
        pags: 324
    }

]
const filterbooks = (array) => {
    const filter = []; // Array para almacenar los libros que cumplen las condiciones

    array.forEach(book => {
        if (book.year > 2000 && book.pags > 300) {
            filter.push(book); // Agrega el libro al array si cumple las condiciones
        }
    });

    return filter; // Devuelve el array filtrado
};

const result = filterbooks(books);
console.log(result);

// const filteredBooks = books.filter(book => book.year >= 2000 && book.pags >=300 );

// console.log(filteredBooks)
