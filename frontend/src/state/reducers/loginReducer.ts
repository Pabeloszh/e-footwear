const initialState = false
const reducer = (
    state : any = initialState,
    action : any
) => {
    switch (action.type) {
        case "setLoginWindow":
            state = !state
            return state
        default:
            return state
    }
}

export default reducer;