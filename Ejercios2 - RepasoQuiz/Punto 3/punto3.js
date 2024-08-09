const products = [
    {
        name: "laptop",
        price: 1000,
        stock: 10
    },
    {
        name: "desktop",
        price: 1500,
        stock: 5
    },
    {
        name: "phone",
        price: 500,
        stock: 20
    }
]; 

const expensiveproduct = (Array) => {

    let maxproduct = Array[0];

    for (let i = 0; i < Array.length; i++) {
        if (Array[i].price > maxproduct.price) {
            maxproduct = Array[i];

            return maxproduct;
        }
        
    }   
};
const result = expensiveproduct(products);
console.log(result);