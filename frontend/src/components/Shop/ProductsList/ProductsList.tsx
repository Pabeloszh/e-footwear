import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {ProductCard} from "../../ProductCard"
import {StyledList} from './ProductsList.style'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingSpinner } from '../../LoadingSpinner'
import { ProductsInterfaces } from './ProductList.interfaces'
import { bindActionCreators } from 'redux'
import { useParams } from 'react-router'
import { useHistory, useLocation } from 'react-router-dom'
import { actionCreators } from '../../../state'

const options = {
    root: null,
    threshold: 1,
    rootMargin: '0px'
};

function setUrlParams(url : any){
    let initialParams = url.initial
    let typeParams = url.type ? `&type=${url.type}` : ''
    let priceGteParams = `&min_price=${url.priceGte}`
    let priceLteParams = `&max_price=${url.priceLte}`
    let brandsParams = url.brands.length ? `&brand__in=${url.brands.join(',')}` : ''
    let sizesParams = url.sizes.length ? `&sizes=${url.sizes.join(',')}` : ''
    let orderParams = `&ord=${url.order}`
    let colorsParams = url.colors.length ? `&colors=${url.colors.join(',')}` : ''

    return `?${initialParams}${typeParams}${priceGteParams}${priceLteParams}${brandsParams}${sizesParams}${orderParams}${colorsParams}`
}

export const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<ProductsInterfaces | null>(null);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    // const location = useLocation()
    // const history = useHistory()

    const url = useSelector((state : any) => state.url);

    let { type } = useParams() as {
        type: string;
    };

    useEffect(()=>{
        setHasMore(false)
        setPage(1)
    }, [type])
    
    useEffect(() => {
        if(url.initial){
            setLoading(true);
            setProducts(null)
            axios.get(`https://efootwear.herokuapp.com/api/shoes/${setUrlParams(url)}&page_size=12&page=1`)
            .then(({data}) => {
                setProducts(data)
                setHasMore(Math.ceil(data.count / 12) > page)
                setLoading(false);
            })
        }
    }, [url]);

    useEffect(() => {
        if(page !== 1 && hasMore && !loading){
            setLoading(true)
            axios.get(`https://efootwear.herokuapp.com/api/shoes/${setUrlParams(url)}&page_size=12&page=${page}`)
            .then(({data}) => {
                setProducts({...data, results: [...products?.results, ...data.results]})
                setHasMore(Math.ceil(data.count / 12) > page)
                setLoading(false)
            })
        }
    }, [page])

    const callbackRef = useCallback(node => {
        if (!node) return

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    return;
                }
                
                hasMore && setPage(prevPage => prevPage + 1)

                observer.disconnect()
                
            })
        }, options);

        observer.observe(node)

    }, [hasMore]);

    return (
        <StyledList>
            {!products 
                ? <LoadingSpinner/> 
                : !products.count 
                    ? <h2>Sorry, we do not have matching products </h2>
                    : <div className="products">
                        {products?.results.map((product : any, index : number) => (
                            products.results.length == index + 1 
                            ? <ProductCard productData={product} callbackRef={callbackRef} key={`product-${product.id}`}/>  
                            : <ProductCard productData={product} key={`product-${product.id}`}/>
                        ))}
                    </div>
            }
        </StyledList>
    )
}

