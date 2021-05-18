import React, {useEffect, useRef} from 'react'
import Carousel from "react-multi-carousel";
import { ProductCard } from "../../ProductCard/ProductCard"
import "react-multi-carousel/lib/styles.css";
import { StyledProductsCarousel } from "./ProductsCarousel.style";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

export const ProductsCarousel: React.FC = () => {
    const titleRef = useRef(null);

    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: '0px'
    };
    useEffect(() => {
        //@ts-ignore
        titleRef && observer.observe(titleRef.current);
    }, [titleRef]);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            console.log(entry.target);
            entry.target.classList.contains('title') && entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        })
    }, options);
    

    // const [top, setTop] = useState(window.scrollY);
    // const titleRef = useRef(null);

    // useEffect(() => {
    //   //@ts-ignore
    //   titleRef.current.getBoundingClientRect().height < top * 1.5 && titleRef.current.classList.add('title-animate');
    //   //@ts-ignore
    //   console.log(titleRef.current.getBoundingClientRect());
    // //   console.log(top);
    // }, [top])
    // useEffect(() => {
    //   function watchScroll() {
    //     window.addEventListener("scroll", () => setTop(window.scrollY));
    //   }
    //   watchScroll();
    //   return () => {
    //     window.removeEventListener("scroll", () => setTop(window.scrollY));
    //   };
    // });



    return (
        <StyledProductsCarousel>
            <div className="title" ref={titleRef}>
              <h2>You may like on of those...</h2>  
            </div>      
            {/*@ts-ignore*/} 
            <Carousel responsive={responsive}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Carousel>
        </StyledProductsCarousel>

    )
}
