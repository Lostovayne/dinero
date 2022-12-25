const number = 12345654454;

console.log(
    new Intl.NumberFormat('ES', { style: 'currency', currency: 'CLP' }).format(
        number
    )
);

//eso devuelve el dinero en pesos Chilenos 