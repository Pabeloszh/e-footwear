import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { CartItemInterfaces } from './CartItem.interfaces';
import { StyledItem } from "./CartItem.style"
import { capitalizeFirstLetter } from '../../../utils';

export const CartItem = ({item} : CartItemInterfaces) => {
    const { color, model, brand, size, product, quantity, price} = item

    const dispatch = useDispatch();
    const { deleteFromCart, changeQuantity } = bindActionCreators(actionCreators, dispatch);

    return (
        <StyledItem>
            {/* switch do kolorow */}
            <img src={require(`../../../img/product-photos/${color}/1.jpg`).default}  alt="shoe"/>
            <div className="info">
                <div>
                    <h4>{model}</h4>
                    <p className="brand-mobile">{brand}</p>
                    <div>
                        <p>Color: {capitalizeFirstLetter(color)}</p>
                        <p>Size: {size}</p>
                    </div>
                    <p className="brand">{brand}</p>
                    <p onClick={() => deleteFromCart(product)}>Remove</p>
                </div>
                <div>
                    <IconButton onClick={() => changeQuantity({product: product, value: quantity > 1 && -1})}>
                        <RemoveIcon/>
                    </IconButton>
                    <p>{quantity}</p>
                    <IconButton onClick={() => changeQuantity({product: product, value: 1})}>
                        <AddIcon/>
                    </IconButton>
                </div>

                <h4>{price}zł</h4>
            </div>
        </StyledItem>
    )
}

