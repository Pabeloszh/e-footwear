import React, { useEffect } from 'react';
import { ProductsList } from '../../components/Shop/ProductsList'
import { DesktopFilter } from '../../components/Shop/Filter/DesktopFilter'
import { MobileFilter } from "../../components/Shop/Filter/MobileFilter"
import { StyledShop } from './Shop.style';
import { RootState } from '../../state/reducers';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router'
import { useHistory, useLocation } from 'react-router';

function setUrlParams(url : any){
    let typeParams = url.type ? `&type=${url.type}` : ''
    let priceGteParams = `&min_price=${url.priceGte}`
    let priceLteParams = `&max_price=${url.priceLte}`
    let brandsParams = url.brands.length ? `&brand__in=${url.brands.join(',')}` : ''
    let sizesParams = url.sizes.length ? `&sizes=${url.sizes.join(',')}` : ''
    let orderParams = `&ord=${url.order}`
    let colorsParams = url.colors.length ? `&colors=${url.colors.join(',')}` : ''

    return `?${typeParams}${priceGteParams}${priceLteParams}${brandsParams}${sizesParams}${orderParams}${colorsParams}`
}

export const Shop:React.FC = () => {
    // const url = useSelector((state :RootState) => state.url);
    // const history = useHistory();
    // useEffect(() => {
    //     // console.log(url);
    //     //@ts-ignore
    //     // let order = url?.order || ''
    //     history.push({
    //         search: setUrlParams(url)
    //     })
    //     // console.log();
    // }, [url])

    return (
        <StyledShop>
            <div>
                {/* <MobileFilter /> */}
                <DesktopFilter/>
                <ProductsList/>
            </div>
        </StyledShop>
    )
}

