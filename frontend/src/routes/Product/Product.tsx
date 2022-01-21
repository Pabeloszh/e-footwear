import React, { useEffect, useState } from 'react'
import { StyledProduct } from "./Product.style"
import { Photos } from "../../components/Product/Photos";
import { Color } from "../../components/Product/Color"
import { Size } from '../../components/Product/Size';
import { Rating } from '../../components/Product/Rating';
import axios from 'axios';
import { useParams } from 'react-router';
import { ProductProps } from './Product.interfaces';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { ProductLikeButton } from '../../components/Product/ProductLikeButton';
import { RootState } from '../../state/reducers';
import { useQuery } from '../../utils';

export const Product:React.FC = () => {
    let { id } = useParams() as {
        id: string;
    }
    const authToken = useSelector((state : RootState) => state.auth);

    const query = useQuery()

    const dispatch = useDispatch();
    const { addToCart } = bindActionCreators(actionCreators, dispatch);

    const [size, setSize] = useState<number | null>(null)
    const [product, setProduct] = useState<ProductProps | any>()

    useEffect(() => {
        axios.get(`https://efootwear.herokuapp.com/api/shoe/${id}`, authToken && {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        })
        .then(({data}) => {
            setProduct(data)
            console.log(data);
        })
    }, []);

    function addToCartt(){
        if(!product) return
        let productData = {
            brand: product?.brand,
            model: product?.model,
            product: Number(id),
            color: query.get('color'),
            quantity: 1,
            size: size,
            price: product?.discount_price || product?.price
        }

        addToCart(productData)
    }

    return (
        <StyledProduct>
            {product ?
                <>
                    <Photos />
                    <div className="desc">
                        <p>{product.brand}</p>
                        <h2>{product.model}</h2>
                        <Color colors={product.colors}/>
                        <h3>Choose size</h3>
                        <Size sizes={product.sizes} size={size} setSize={setSize}/>
                        <h3>{product.price}zł</h3>
                        <div className="actions">
                            <Button disabled={!size} variant="contained" color="primary" onClick={addToCartt}>
                                Buy now
                            </Button>
                            <ProductLikeButton id={Number(id)}/>
                        </div>
                        <div className="info">
                            {product.desc}
                        </div>
                        <Rating avgRate={product.average_rating.toFixed(2)} isReviewed={product.is_reviewed}/>
                    </div>
                </> : 
                <LoadingSpinner/>
            }
            
        </StyledProduct>
    )
}

