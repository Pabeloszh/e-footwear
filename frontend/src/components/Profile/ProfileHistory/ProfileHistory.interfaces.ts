export interface OrderProps{
    length: number
    id: number
    date_ordered: string
    completed: boolean
    total_value: number
    order_items: OrderItemProps[] 
}

export interface OrderItemProps {
    brand: string
    color: string
    discount_price: number
    id: number
    model: string
    order: number
    price: number
    primary_picture: string
    quantity: number
    size: number
}