import React from 'react';
import { MainSlider }  from './MainSlider/';
import { ProductsCarousel } from "./ProductsCarousel/"
import { SalesContainer } from "./SalesContainer/"
import { Newsletter } from "./Newsletter/"

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