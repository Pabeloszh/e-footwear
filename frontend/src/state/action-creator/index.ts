import axios from "axios";

export const setMan = () => {
    return (dispatch : any) => {
        dispatch({
            type: "setMan",
            payload: 'gender=male&for_kids=false'
        });
    }
}

export const setWoman = () => {
    return (dispatch: any) => {
        dispatch({
            type: "setWoman",
            payload: 'gender=female&for_kids=false'
        });
    }
}

export const setKids = () => {
    return (dispatch: any) => {
        dispatch({
            type: "setKids",
            payload: 'for_kids=true'
        });
    }
}

export const setSport = () => {
    return (dispatch: any) => {
        dispatch({
            type: "setSport",
            payload: 'type=sport'
        });
    }
}

export const setSales = () => {
    return (dispatch: any) => {
        dispatch({
            type: "setSales",
            payload: 'discount_price=1'
        });
    }
}

export const setType = (payload : string | null) => {
    return (dispatch: any) => {
        dispatch({
            type: "setType",
            payload: payload
        });
    }
}

export const setOrder = (payload: string) => {
    return (dispatch: any) => {
        dispatch({
            type: "setOrder",
            payload: payload
        });
    }
}

export const setSizes = (payload: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "setSizes",
            payload: payload
        });
    }
}

export const setBrands = (payload: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "setBrands",
            payload: payload
        });
    }
}

export const setPriceGte = (payload: string) => {
    return (dispatch: any) => {
        dispatch({
            type: "setPriceGte",
            payload: payload
        });
    }
}

export const setPriceLte = (payload: string) => {
    return (dispatch: any) => {
        dispatch({
            type: "setPriceLte",
            payload: payload
        });
    }
}

export const setColors = (payload: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "setColors",
            payload: payload
        });
    }
}

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
        await axios.get('https://efootwear.herokuapp.com/api/users/liked_products/',
        {
            headers: {
                'Authorization': `Bearer ${payload}` 
            }
        }).then(({data}) => {
            console.log(data)
            dispatch({
                type: 'setFavorites',
                payload: data
            })
        })
    }
}

export const addToFavorites = (payload : any) => {
    return async (dispatch : any) => {
        await axios.post('https://efootwear.herokuapp.com/api/users/liked_products/', { product: payload.id }, { headers: {'Authorization': `Bearer ${payload.auth}` }})
        await dispatch(setFavorites(payload.auth))
    }
}

export const deleteFromFavorites = (payload : any) => {
    return async (dispatch : any) => {
        //@ts-ignore
        await axios.delete('https://efootwear.herokuapp.com/api/users/liked_products/', { headers: { 'Authorization': `Bearer ${payload.auth}`  }, data: { product: payload.id }})
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