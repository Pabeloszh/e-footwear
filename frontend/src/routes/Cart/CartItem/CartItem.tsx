import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { StyledItem } from "./CartItem.style"

export const CartItem:React.FC = () => {
    return (
        <StyledItem>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
            <div className="info">
                <div>
                    <h4>All Star Black Sneakers</h4>
                    <p className="brand-mobile">Nike Sneakers</p>
                    <div>
                        <p>Color: Black</p>
                        <p>Size: 42</p>
                    </div>
                    <p className="brand">Nike Sneakers</p>
                    <p>Remove</p>
                </div>
                <div>
                    <IconButton>
                        <RemoveIcon/>
                    </IconButton>
                    <TextField variant="outlined" defaultValue="1"/>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </div>
                <h4>299.99zł</h4>
            </div>
        </StyledItem>
    )
}

