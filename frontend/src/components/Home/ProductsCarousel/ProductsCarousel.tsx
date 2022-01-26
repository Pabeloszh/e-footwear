import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Carousel from "react-multi-carousel";
import { Skeleton } from '@mui/material';
import { ProductCard } from "../../ProductCard"
import { StyledProductsCarousel } from "./ProductsCarousel.style";
import { ProductCarouselInterfaces } from './ProductsCarouse.interfaces';
import { ProductsInterfaces } from '../../Shop/ProductsList/ProductList.interfaces';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 14
    },
    desktopXL: {
      breakpoint: { max: 1920, min: 1760 },
      items: 7.5
    },
    desktopL: {
      breakpoint: { max: 1760, min: 1440 },
      items: 6.5
    },
    desktopSM: {
      breakpoint: { max: 1440, min: 1250 },
      items: 5.5
    },
    desktop: {
      breakpoint: { max: 1250, min: 990 },
      items: 4.4
    },
    tabletL: {
      breakpoint: { max: 990, min: 768 },
      items: 3.4
    },
    tabletM: {
      breakpoint: { max: 768, min: 550 },
      items: 2.4
    },
    tablet: {
      breakpoint: { max: 550, min: 425 },
      items: 1.7
    },
    mobileM: {
      breakpoint: { max: 425, min: 375 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 375, min: 0 },
      items: 1.3
    }
};

export const ProductsCarousel = ({ title, params } : ProductCarouselInterfaces) => {
    const [products, setProducts] = useState<ProductsInterfaces | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: '0px'
    };
    function getProducts(){
      axios.get(`https://efootwear.herokuapp.com/api/shoes/?${params}&page_size=16&page=1`)
      .then(({data})=>{
        setProducts(data)
      })
    }
    useEffect(() => {
      getProducts()
    }, [])
    
    useEffect(() => {
        titleRef.current && observer.observe(titleRef.current);
    }, [titleRef]);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            
            entry.target.classList.contains('title') && entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        })
    }, options);
    
    return (
        <StyledProductsCarousel>
            <div className="title" ref={titleRef}>
              <h2>{title}</h2>  
            </div>      
              <Carousel responsive={responsive}>
                {products 
                  ? products?.results.map((product : any, i : number) => (
                    <ProductCard productData={product} key={`product-${title.split(" ")[2]}-${product.id}-${i}`}/>
                  )) 
                  : Array.apply(null, Array(16)).map((_, i : number) => (
                    <Skeleton variant="rectangular" width={'95%'} height={360} key={`skeleton-${title.split(" ")[2]}-${i}`}/>
                  ))
                }
                <div></div>
              </Carousel>
        </StyledProductsCarousel>

    )
}
