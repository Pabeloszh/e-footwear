export interface CartItemInterfaces {
    item: CartItemProps,
}

interface CartItemProps{
    brand: string
    model: string
    product: number
    color: string
    quantity: number
    size: number
    price: number
}