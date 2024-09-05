export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    imageUrl?: string
}

export interface IProductBody {
    title: string,
    price: number,
    description: string,
    imageUrl?: string
}