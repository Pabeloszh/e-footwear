import React from 'react'
import { CartItem } from './CartItem'
import Button from '@material-ui/core/Button';
import { StyledCart } from "./Cart.style"

export const Cart:React.FC = () => {
    return (
        <StyledCart>
            <div>
                <div className="products">
                    <h2>Shopping Cart</h2>
                    <CartItem />
                    <hr />
                    <CartItem />
                    <hr />
                    <p>Please note that you need to be <span>registered</span> to purchase, or <span>logged in</span> if you already have and account.</p>
                </div>
                <div className="summary">
                    <h2>Summary</h2>
                    <div>
                        <p>Subtotal:</p>
                        <p>599.98zł</p>
                    </div>
                    <div>
                        <p>Shipping:</p>
                        <p>18.99zł</p>
                    </div>
                    <hr />
                    <div>
                        <h3>Total:</h3>
                        <h3>618.97zł</h3>
                    </div>
                    <hr />
                    <Button variant="contained" color="primary" fullWidth>
                        Checkout
                    </Button>
                </div>
            </div>
        </StyledCart>
    )
}