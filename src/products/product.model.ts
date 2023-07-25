export type Email = {
    email: string,
    password: string
}

export type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
}

export type Size = 'S' | 'M' | 'L' | 'XL';