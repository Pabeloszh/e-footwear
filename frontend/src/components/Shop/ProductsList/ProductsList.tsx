import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Skeleton } from '@mui/material'
import { ProductCard } from "../../ProductCard"
import { ProductsInterfaces } from './ProductList.interfaces'
import { StyledList } from './ProductsList.style'
import { setUrlParams, useQuery } from '../../../utils'

const options = {
    root: null,
    threshold: 1,
    rootMargin: '0px'
};

export const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<ProductsInterfaces | null>(null);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation()
    const query = useQuery()

    let { type } = useParams() as {
        type: string;
    };

    useEffect(()=>{
        setHasMore(false)
        setPage(1)
    }, [type])
    
    useEffect(() => {
        if(!loading){
            setLoading(true);
            setProducts(null)
            axios.get(`https://efootwear.herokuapp.com/api/shoes/${setUrlParams(type, query)}&page_size=12&page=1`)
            .then(({data}) => {
                setProducts(data)
                setHasMore(Math.ceil(data.count / 12) > page)
                setLoading(false);
                console.log(data)
            })
        }
    }, [location.search, type]);

    useEffect(() => {
        if(page !== 1 && hasMore && !loading){
            setLoading(true)
            axios.get(`https://efootwear.herokuapp.com/api/shoes/${setUrlParams(type, query)}&page_size=12&page=${page}`)
            .then(({data}) => {
                //@ts-ignore
                setProducts({...data, results: [...products.results, ...data.results]})
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
                ? <div className="products">
                    {Array.apply(null, Array(12)).map((_, i : any) => (
                        <Skeleton variant="rectangular" width={'100%'} height={'100%'} key={`skeleton-${i}`}/>
                    ))}
                </div>
                : !products?.count 
                    ? <h2>Sorry, we do not have matching products </h2>
                    : <div className="products">
                        {products?.results.map((product : any, index : number) => (
                            products?.results?.length == index + 1 
                            ? <ProductCard productData={product} callbackRef={callbackRef} key={`product-${product.id}`}/>  
                            : <ProductCard productData={product} key={`product-${product.id}`}/>
                        ))}
                    </div>
            }
        </StyledList>
    )
}

