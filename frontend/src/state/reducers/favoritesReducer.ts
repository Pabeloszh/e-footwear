const initialState = null
const reducer = (
    state : any = initialState,
    action : any
) => {
    switch (action.type) {
        case "setFavorites":
            state = action.payload
            return state
        case "clearFavorites":
            state = null
            return state
        default:
            return state
    }
}

export default reducer;