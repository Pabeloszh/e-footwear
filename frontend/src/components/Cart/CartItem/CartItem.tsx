import { CartItemInterfaces } from './CartItem.interfaces';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { StyledItem } from "./CartItem.style"
import { capitalizeFirstLetter } from '../../../utils';

export const CartItem = ({item} : CartItemInterfaces) => {
    const dispatch = useDispatch();
    const { deleteFromCart, changeQuantity } = bindActionCreators(actionCreators, dispatch);
    console.log(item);
    return (
        <StyledItem>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
            <div className="info">
                <div>
                    <h4>{item?.model}</h4>
                    <p className="brand-mobile">{item?.brand}</p>
                    <div>
                        <p>Color: {capitalizeFirstLetter(item.color)}</p>
                        <p>Size: {item.size}</p>
                    </div>
                    <p className="brand">{item?.brand}</p>
                    <p onClick={() => deleteFromCart(item.product)}>Remove</p>
                </div>
                <div>
                    <IconButton onClick={() => changeQuantity({product: item.product, value: -1})}>
                        <RemoveIcon/>
                    </IconButton>
                    <TextField variant="outlined" type="number" value={item?.quantity}/>
                    <IconButton onClick={() => changeQuantity({product: item.product, value: 1})}>
                        <AddIcon/>
                    </IconButton>
                </div>
                <h4>{item?.price}</h4>
            </div>
        </StyledItem>
    )
}

