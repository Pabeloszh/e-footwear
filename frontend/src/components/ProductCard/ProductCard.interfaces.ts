export interface ProductCardInterfaces {
    callbackRef?: any
    productData: ProductProps
}

export interface ProductProps{
    id: number
    colors: string[]
    discount_price: null
    brand: string
    price: number
    model: string
}