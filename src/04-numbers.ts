(() => {
    // Inferencia
    let productPrice = 100;
    productPrice = 20;
    console.log('productPrice', productPrice);

    // Explicito
    let customerAge: number = 28;
    // ERROR
    // customerAge = customerAge + '1';
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);

    // ERROR -> Variable is declared but without value
    let productInStock: number;
    console.log('productInStock', productInStock);
    if(productInStock > 10) {
        console.log('productInStock is greater');
    }

    // ParseInt method - Nan is represented as a number  
    let discount = parseInt('100');
    console.log('discount', discount);
    if(discount < 200) {
        console.log('Apply');
    } else {
        console.log('Not apply');
    }

    // HEX is a number -> it tranforms the hex value to a number value
    let hex: number = 0xfff;
    console.log('hex', hex);
    // BIN
    let bin: number = 0b1010;
    console.log('bin', bin);

    // OBJETO Number
    let myNumber: Number = 20; // Mala Práctica
    let myNumber2: number = 40; // Buena Práctica
})()