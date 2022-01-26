import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { StyledSales } from "./SalesContainer.style";

export const SalesContainer:React.FC = () => {
    const photoRef = useRef<HTMLDivElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);

    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: '0px'
    };
    
    useEffect(() => {
        photoRef.current && observer.observe(photoRef.current);
        descRef.current && observer.observe(descRef.current);
    }, [photoRef]);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            entry.target.classList.contains('photo') && entry.target.classList.add('animated');
            entry.target.classList.contains('desc') && entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        })
    }, options);
    
    return (
        <StyledSales>
            <div className="container">
                <div className="photo" ref={photoRef}>
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" />
                    <div className="overlay"></div>
                    <h2>70%<br/>OFF</h2>
                </div>
                <div className="desc" ref={descRef}>
                    <h6><span>Our products are now</span> cheaper than ever</h6>
                    <p><Link to={{ pathname: "/shop/sales", search: "?order=date_added" }}>Click to check out our latest <span>promotional offers</span></Link>. You can find promotions up to <span>70% off</span>. Check out what shoes fit you best. If you can't find anything you like, you can always check our non-promotional offers. If a product is still too expensive, you can add it to <span>your favourites</span> to see if it's on sale that week. Promotional offers are valid until <span></span>Monday 12:00pm. <span>After this period, you cannot buy the product for the promotional price</span></p>
                </div>
            </div>
        </StyledSales>
    )
}
