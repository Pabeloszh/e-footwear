import { StyledProductCard } from "./ProductCard.style"
import { useHistory } from 'react-router';
import { ProductCardProps } from './ProductCard.interfaces';
import { LikeButton } from './LikeButton';

export const ProductCard = ({productData, callbackRef} : ProductCardProps) => {
    const history = useHistory();
    const redirect = (e : any, path: string) => {
        if(e.target.classList.contains('MuiSvgIcon-root') || e.target.classList.contains('like') || e.target.tagName == 'path') return
        history.push(`/${path}`);
    }

    function calculateDiscount(price : any, discountPrice : any){
        let percent = (price - discountPrice) / price * 100

        return percent.toFixed()
    }

    function setFavorite(e : any){
        console.log(e.target);
    }

    
    return (
        <StyledProductCard onClick={(e) => redirect(e, `product/${productData.id}`)}>
            <div className="photo" ref={callbackRef}>
                <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/>
            </div>
            <LikeButton id={productData.id}/>
            {productData.discount_price && 
                <div className="sale">
                    <h5>-{calculateDiscount(productData.price, productData.discount_price)}%</h5>
                </div>
            }
            <div className="desc">
                <h5>{productData.brand}</h5>
                <p>{productData.model}</p>
                <h6>{productData.discount_price || productData.price}zł</h6>
            </div>
        </StyledProductCard>
    )
}