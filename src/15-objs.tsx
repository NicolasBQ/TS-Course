(() => {
    // EJEMPLO EMAIL
    type Email = {
        email: string,
        password: string
    }

    const login = (data: Email) => {
        console.log(data.email);
        console.log(data.password);
    }

    login({
        email: 'nico@xd.co',
        password: '123asd'
    })

    // EJEMPLO PRODUCTS
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Size
    }

    type Size = 'S' | 'M' | 'L' | 'XL';
    
    const products: Product[] = [];

    
    const addProduct = (data: Product) => {
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