(() => {
    let prices = [1, 2, 3] // Array implicito de numbers
    let arrNumbers: number[] = [4, 5, 6] // Array explicito de numbers

    // Array de numbers no acepta otra cosa que no sean numbers
    prices.push(8) // Correcto
    // prices.push('hola')  Error

    // Arreglos con diferentes tipos
    let arr3 = [2, 'hola', true] // Inferido
    let arr4: (number | string | boolean | object)[] = ['hola', 9, false];

    // Tuplas
    let tuplas: [string, boolean, number] = ['hola', true, 94];
})()