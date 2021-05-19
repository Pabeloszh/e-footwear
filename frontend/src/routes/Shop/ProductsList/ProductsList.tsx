import React from 'react'
import {ProductCard} from "../../../components/ProductCard"
import {StyledList} from './ProductsList.style'
export const ProductsList: React.FC = () => {
    return (
        <StyledList>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </StyledList>
    )
}

