(() => {
    const login = (data: {email: string, password: string}) => {
        console.log(data.email);
        console.log(data.password);
    }

    login({
        email: 'nico@xd.co',
        password: '123asd'
    })

    const products: any[] = [];

    type Size = 'S' | 'M' | 'L' | 'XL';
    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Size
    }) => {
        products.push(data);
    }

    addProduct({
        title: 'Pro1',
        createdAt: new Date(),
        stock: 2,
    })
    addProduct({
        title: 'Pro2',
        createdAt: new Date(),
        stock: 2,
        size: 'XL'
    })

    console.log(products);

})()