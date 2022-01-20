const initialState = {
    message: 'initial message',
    type: 'initial-type',
    open: false
}
const reducer = (
    state : any = initialState,
    action : any
) => {
    switch (action.type) {
        case "setAlert":
            var message = state.message
            var type = state.type
            var open = state.open

            message = action.payload.message
            type = action.payload.type
            open = true
            return {message, type, open}
        case "closeAlert":
            var open = state.open
            open = false
            return {...state, open}
        default:
            return state
    }
}

export default reducer;