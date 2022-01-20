//@ts-ignore
const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null
const reducer = (
    state : any = initialState,
    action : any
) => {
    switch (action.type) {
        case "setCart":
            localStorage.setItem('cart', JSON.stringify(state))
            return state
        case "addToCart":
            let hasDuplicate = state?.some((el : any) => el.product === action.payload.product && el.color === action.payload.color && el.size === action.payload.size)
            if(hasDuplicate){
                state = state?.map((el : any) => {
                    if(el.product === action.payload.product && el.color === action.payload.color && el.size === action.payload.size){
                        return {...el, quantity: el.quantity + action.payload.quantity}
                    }
                    return el
                })
                return state
            } else {
                state = state?.length ? [...state, action?.payload] : [action.payload]
                return state
            }
        case "deleteFromCart":
            state = state.filter((el : any) => el.product !== action.payload)
            return state
        case "changeQuantity":
            state = state?.map((el : any) => {
                if(el.product === action.payload.product){
                    return {...el, quantity: el.quantity + action.payload.value}
                }
                return el
            })
            return state
        case "clearCart":
            state = []
            return state
        default:
            return state
    }
}

export default reducer;