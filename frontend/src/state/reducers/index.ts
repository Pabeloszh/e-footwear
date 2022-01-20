
import { combineReducers } from "redux";
import urlReducer from "./urlReducer"
import authReducer from "./authReducer"
import userReducer from "./userReducer"
import favoritesReducer from "./favoritesReducer"
import cartReducer from "./cartReducer"
import loginWindowReducer from "./loginReducer"
import registerWindowReducer from "./registerReducer"
import alertReducer from "./alertReducer"

const reducers = combineReducers({
    url: urlReducer,
    auth: authReducer,
    user: userReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    loginWindow: loginWindowReducer,
    registerWindow: registerWindowReducer,
    alert : alertReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers