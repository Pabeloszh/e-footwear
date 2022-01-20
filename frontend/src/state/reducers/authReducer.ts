
const initialState = '' || localStorage.getItem('authToken');
const reducer = (
    state : any = initialState,
    action : any
) => {
    switch (action.type) {
        case "userAuth":
            state = action.payload
            localStorage.setItem('authToken', state);

            return state
        case "logout":
            state = ''
            localStorage.removeItem('authToken')

            return state
        default:
            return state
    }
}

export default reducer;