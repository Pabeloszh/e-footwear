import axios from "axios";

export const userAuth = (payload : string) => {
    return (dispatch: any) => {
        dispatch({
            type: "userAuth",
            payload: payload
        });
    }
}

export const logout = () => {
    return (dispatch: any) => {
        dispatch({
            type: "logout",
        });
        dispatch(clearFavorites())
    }
}

export const setUser = (payload : object | null) => {
    return (dispatch : any) => {
        dispatch({
            type: "setUser",
            payload: payload
        })
    }
}

export const setFavorites = (payload : any) =>{
    return async (dispatch : any) => {
        await axios.get(`${process.env.REACT_APP_API_KEY}/users/liked_products/`,
        {
            headers: {
                'Authorization': `Bearer ${payload}` 
            }
        }).then(({data}) => {
            dispatch({
                type: 'setFavorites',
                payload: data
            })
        })
    }
}

export const clearFavorites = () => {
    return (dispatch : any) => {
        dispatch({
            type: 'clearFavorites'
        })
    }
}

export const addToFavorites = (payload : any) => {
    return async (dispatch : any) => {
        await axios.post(`${process.env.REACT_APP_API_KEY}/users/liked_products/`, { product: payload.id }, { headers: {'Authorization': `Bearer ${payload.auth}` }})
        await dispatch(setFavorites(payload.auth))
    }
}

export const deleteFromFavorites = (payload : any) => {
    return async (dispatch : any) => {
        //@ts-ignore
        await axios.delete(`${process.env.REACT_APP_API_KEY}/users/liked_products/`, { headers: { 'Authorization': `Bearer ${payload.auth}`  }, data: { product: payload.id }})
        await dispatch(setFavorites(payload.auth))
    }
}

export const setCart = () => {
    return (dispatch : any) => {
        console.log(123)
        dispatch({
            type: "setCart",
        })
    }
}

export const addToCart = (payload : any | null) => {
    return async (dispatch : any) => {
        await dispatch({
            type: "addToCart",
            payload: payload
        })
        await dispatch(setCart())
        await dispatch(setAlert({message: 'Product has been added to your shopping cart', type: 'success'}))

    }
}

export const deleteFromCart = (payload : any | null) => {
    return (dispatch : any) => {
        dispatch({
            type: "deleteFromCart",
            payload: payload
        })
        dispatch(setCart())
    }
}
export const changeQuantity = (payload : any | null) => {
    return (dispatch : any) => {
        dispatch({
            type: "changeQuantity",
            payload: payload
        })
        dispatch(setCart())
    }
}
export const clearCart = () => {
    return (dispatch : any) => {
        dispatch({
            type: "clearCart",
        })
        dispatch(setCart())
    }
}

export const setLoginWindow = () => {
    return (dispatch : any) => {
        dispatch({
            type: "setLoginWindow",
        })
    }
}
export const setRegisterWindow = () => {
    return (dispatch : any) => {
        dispatch({
            type: "setRegisterWindow",
        })
    }
}

export const setAlert = (payload : any) => {
    return (dispatch : any) => {
        dispatch({
            type: "setAlert",
            payload
        })
    }
}

export const closeAlert = () => {
    return (dispatch : any) => {
        dispatch({
            type: "closeAlert",
        })
    }
}