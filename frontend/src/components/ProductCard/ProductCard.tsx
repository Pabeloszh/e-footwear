import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { StyledProductCard } from "./ProductCard.style"

export const ProductCard: React.FC = () => {
    return (
        <StyledProductCard>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
            </div>
            <div className="like">
                <FavoriteBorderIcon />
                <FavoriteIcon />
            </div>
            <div className="sale">
                <h5>-35%</h5>
            </div>
            <div className="desc">
                <h5>Nike</h5>
                <p>All Star Black Sneakers</p>
                <h6>299.99zł</h6>
            </div>
        </StyledProductCard>
    )
}