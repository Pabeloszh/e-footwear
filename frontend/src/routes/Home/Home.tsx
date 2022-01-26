import React from 'react';
import { MainSlider }  from '../../components/Home/MainSlider';
import { ProductsCarousel } from "../../components/Home/ProductsCarousel"
import { SalesContainer } from "../../components/Home/SalesContainer"
import { Newsletter } from "../../components/Home/Newsletter"

export const Home: React.FC = () => {
    return (
        <>
            <MainSlider/>
            <ProductsCarousel title="Our discounted products" params="discount_price=1"/>
            <SalesContainer/>
            <ProductsCarousel title="Our newest products" params="order=date_added"/>
            <Newsletter/>
        </>
    )
}