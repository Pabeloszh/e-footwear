import React from 'react';
import { MainSlider }  from './MainSlider/MainSlider';
import { ProductsCarousel } from "./ProductsCarousel/ProductsCarousel"
import { SalesContainer } from "./SalesContainer/SalesContainer"
import { Newsletter } from "./Newsletter/Newsletter"

export const Home: React.FC = () => {
    return (
        <>
            <MainSlider/>
            <ProductsCarousel/>
            <SalesContainer/>
            <ProductsCarousel/>
            <Newsletter/>
        </>
    )
}