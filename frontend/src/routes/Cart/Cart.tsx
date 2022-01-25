import React, { useState } from 'react'
import { CartItem } from '../../components/Cart/CartItem'
import Button from '@material-ui/core/Button';
import { StyledCart } from "./Cart.style"
import { CartInterfaces } from './Cart.interfaces';
import { RootState } from '../../state/reducers';
import { useSelector } from 'react-redux';
import { Shipping } from '../../components/Cart/Shipping/Shipping';

export const Cart:React.FC = () => {
    const cart = useSelector((state : RootState) => state.cart);
    const [shippingWindow, setShippingWindow] = useState(false)
    
    function subtotalPrice(payload : any){
        if(payload?.length){
            return payload.reduce((prev : any, next : any) => (prev + next.price * next.quantity), 0).toFixed(2)
        } else {
            return 0
        }
    }
    function totalPrice(payload : any){
        let total = Number(subtotalPrice(payload)) + 18.99
        return total.toFixed(2)
    }

    return (
        <>
            <StyledCart>
                <div>
                    <div className="products">
                        <h2>Shopping Cart</h2>
                        {cart.length 
                            ? cart.map((el : any, i : number) => (
                                    <React.Fragment key={`${el.product}-${i}`}>
                                        <CartItem item={el}/>
                                        <hr />
                                    </React.Fragment>
                                )) 
                            : <>
                                <h4>You need to add something to the cart</h4>
                                <hr/>
                            </>
                        }
                        <p>Please note that you need to be <span>registered</span> to purchase, or <span>logged in</span> if you already have and account.</p>
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div>
                            <p>Subtotal:</p>
                            <p>{subtotalPrice(cart)}zł</p>
                        </div>
                        <div>
                            <p>Shipping:</p>
                            <p>18.99zł</p>
                        </div>
                        <hr />
                        <div>
                            <h3>Total:</h3>
                            <h3>{totalPrice(cart)}zł</h3>
                        </div>
                        <hr />
                        <Button variant="contained" color="primary" disabled={!cart.length} fullWidth onClick={() => setShippingWindow(true)}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </StyledCart>
            <Shipping shippingWindow={shippingWindow} setShippingWindow={setShippingWindow}/>
        </>
    )
}