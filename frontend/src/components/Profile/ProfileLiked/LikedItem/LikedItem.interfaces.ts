export interface LikedItemInterfaces {
    liked: LikedProps
} 

interface LikedProps {
    id: string
    first_color: string
    model: string
    brand: string
    discounted_price: number
    price: number
}