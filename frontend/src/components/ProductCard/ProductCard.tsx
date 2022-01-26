import { StyledProductCard } from "./ProductCard.style"
import { useHistory } from 'react-router';
import { ProductCardInterfaces } from './ProductCard.interfaces';
import { LikeButton } from './LikeButton';

export const ProductCard = ({ productData, callbackRef } : ProductCardInterfaces) => {
    const { id, colors, discount_price, price, brand, model} = productData

    const history = useHistory()

    const redirect = (e : any, path: string) => {
        if(e.target.classList.contains('MuiSvgIcon-root') || e.target.classList.contains('like') || e.target.tagName == 'path') return

        history.push(`/${path}`)
    }

    function calculateDiscount(price : any, discountPrice : any){
        let percent = (price - discountPrice) / price * 100

        return percent.toFixed()
    }

    
    return (
        <StyledProductCard onClick={(e) => redirect(e, `product/${id}?color=${colors[0]}`)}>
            <div className="photo" ref={callbackRef}>
                <img loading="lazy" src={require(`../../img/product-photos/${colors[0]}/1.jpg`).default} alt="product-image"/>
            </div>
            <LikeButton id={id}/>
            {discount_price && 
                <div className="sale">
                    <h5>-{calculateDiscount(price, discount_price)}%</h5>
                </div>
            }
            <div className="desc">
                <h5>{brand}</h5>
                <p>{model}</p>
                <h6>{discount_price || price}zł</h6>
            </div>
        </StyledProductCard>
    )
}