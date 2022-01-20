
const initialState = '';
const reducer = (
    state : any = initialState,
    action : any
) => {
    switch (action.type) {
        case "setUser":
            state = action.payload
            return state
        default:
            return state
    }
}

export default reducer;