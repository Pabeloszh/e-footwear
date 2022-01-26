import { ProductProps } from "../../ProductCard/ProductCard.interfaces";

export interface ProductsInterfaces {
    count: number
    next: string | null
    previous: string | null
    results: ProductProps[]
}

