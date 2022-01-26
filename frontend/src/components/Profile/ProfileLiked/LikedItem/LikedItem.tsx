import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';
import { RootState } from '../../../../state/reducers';
import { LikedItemInterfaces } from './LikedItem.interfaces'
import { StyledItem } from "./LikedItem.style"

export const LikedItem = ({ liked } : LikedItemInterfaces) => {
    const { id, first_color, model, brand, discounted_price, price} = liked

    const authToken = useSelector((state : RootState) => state.auth);

    const dispatch = useDispatch();
    const { deleteFromFavorites } = bindActionCreators(actionCreators, dispatch);

    return (
        <StyledItem>
            <img src={require(`../../../../img/product-photos/${first_color}/1.jpg`).default}  alt="" />
            <div className="info">
                <div>
                    <h4>{model}</h4>
                    <p>{brand}</p>
                    <p onClick={() => deleteFromFavorites({id: id, auth: authToken})}>Unlike</p>
                </div>
                <h4>{discounted_price || price}zł</h4>
            </div>
        </StyledItem>
    )
}

