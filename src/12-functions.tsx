(() => {
    type Size = 'S' | 'M' | 'L' | 'XL';
    const createProductToJson = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Size
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const product1 = createProductToJson(
        'Product1',
        new Date(),
        12,
        'XL'
    );

    console.log(product1);

    const product2 = createProductToJson('Product2', new Date(), 12);
    console.log(product2);
})()