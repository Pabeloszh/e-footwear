import React from 'react';
import { MainSlider }  from '../../components/Home/MainSlider';
import { ProductsCarousel } from "../../components/Home/ProductsCarousel"
import { SalesContainer } from "../../components/Home/SalesContainer"
import { Newsletter } from "../../components/Home/Newsletter"
import axios from 'axios'

export const Home: React.FC = () => {
    return (
        <>
            <MainSlider/>
            {/* <ProductsCarousel/> */}
            <SalesContainer/>
            {/* <ProductsCarousel/> */}
            <Newsletter/>
        </>
    )
}