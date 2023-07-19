(() => {
    // Implicito
    let productTitle = 'My amazing Product';
    productTitle = 'Product changed';

    // Explicito 
    const productDescription: string = 'Product Description';

    let productPrice: number = 100;
    let isNew: boolean = false;

    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${productPrice}
        isNew: ${isNew}
    `

    const myString: String = '' // Mala Práctica
    const myString2: string = ' '// Buena práctica
})()