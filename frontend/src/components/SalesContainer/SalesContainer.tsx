import React from 'react';
import Button from '@material-ui/core/Button';
import {StyledSales} from "./SalesContainer.style";

export const SalesContainer:React.FC = () => {
    return (
        <StyledSales>
            {/* <div className="title">
                <h2>Check out newest sales</h2>
            </div> */}
            <div className="container">
                <div className="photo">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" />
                    <div className="overlay"></div>
                    <h2>70%<br/>OFF</h2>
                </div>
                <div className="desc">
                    <h6><span>Our products are now</span> cheaper than ever</h6>
                    <p><a href=''>Click to check out our latest <span>promotional offers</span></a>. You can find promotions up to <span>70% off</span>. Check out what shoes fit you best. If you can't find anything you like, you can always check our non-promotional offers. If a product is still too expensive, you can add it to <span>your favourites</span> to see if it's on sale that week. Promotional offers are valid until <span></span>Monday 12:00pm. <span>After this period, you cannot buy the product for the promotional price</span></p>
                    {/* <Button>SEE SALES</Button> */}
                </div>
            </div>
        </StyledSales>
    )
}
