import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router';
export function capitalizeFirstLetter(payload : string){
    return payload.charAt(0).toUpperCase() + payload.slice(1)
}

export function sizes(payload : string){
    if(payload === 'kids'){
        return [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
    } else {
        return [35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]
    }
}

export function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
}

function setType(type : string) {
    switch (type) {
        case "man":
            return 'gender=male&for_kids=false'
        case "woman":
            return 'gender=female&for_kids=false'
        case "kids":
            return 'for_kids=true'
        case "sport":
            return 'type=sport'
        case "sales":
            return 'discount_price=1'
    }
}

export function setUrlParams(type : any, query : any){
    let initialParams = setType(type)
    let orderParams = query.get('order') ? `&ord=${query.get('order')}` : ''
    let sizesParams = query.get('sizes') ? `&sizes=${query.get('sizes')}` : ''
    let brandsParams = query.get('brands') ? `&brand__in=${query.get('brands')}` : ''
    let colorsParams = query.get('colors') ? `&colors=${query.get('colors')}` : ''
    let maxPrice = query.get('max_price') ? `&max_price=${query.get('max_price')}` : ''
    let minPrice = query.get('min_price') ? `&min_price=${query.get('min_price')}` : ''

    return `?${initialParams}${orderParams}${sizesParams}${brandsParams}${colorsParams}${minPrice}${maxPrice}`
}