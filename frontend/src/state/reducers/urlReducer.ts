// import { useLocation } from 'react-router-dom';

// const { search } = useLocation();
  
// let order = useMemo(() => new URLSearchParams(search), [search]).get('ord') || 'date_added'
const initialState = {
    initial: '',
    type: '',
    order: new URLSearchParams(window.location.search).get('ord') || 'date_added',
    sizes: [],
    brands: [],
    priceGte: '0',
    priceLte: '1000',
    colors: []
}

const reducer = (
    state = initialState,
    action : any
) => {
    switch (action.type) {
        case "setMan":
            var initial = state.initial

            initial = action.payload
            return {...state, initial}
        case "setWoman":
            var initial = state.initial

            initial = action.payload
            return {...state, initial}
        case "setKids":
            var initial = state.initial

            initial = action.payload
            return {...state, initial}
        case "setSales":
            var initial = state.initial

            initial = action.payload
            return {...state, initial}
        case "setSport":
            var initial = state.initial

            initial = action.payload
            return {...state, initial}
        case "setType":
            var type = state.type

            type = action.payload
            return {...state, type}
        case "setOrder":
            let order = state.order
            order = action.payload
            console.log(order);
            return {...state, order}
        case "setSizes":
            var { value, checked } = action.payload
            var sizes : string[] = state.sizes

            checked ? sizes.push(value) : sizes.splice(sizes.indexOf(value), 1)
            
            return {...state, sizes}
        case "setBrands":
            var { value, checked } = action.payload
            var brands : string[] = state.brands

            checked ? brands.push(value) : brands.splice(brands.indexOf(value), 1)
            console.log(action.payload);            
            return {...state, brands}
        case "setPriceGte":
            let priceGte = state.priceGte
            priceGte = action.payload

            return {...state, priceGte}
        case "setPriceLte":
            let priceLte = state.priceLte
            priceLte = action.payload
           
            return {...state, priceLte}
        case "setColors":
            var { value, checked } = action.payload
            var colors : string[] = state.colors

            checked ? colors.push(value) : colors.splice(colors.indexOf(value), 1)
            
            return {...state, colors}
        default:
            return state
    }
}

export default reducer;