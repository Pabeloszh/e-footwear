import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';
import { RootState } from '../../../../state/reducers';
import { LikedItemInterfaces } from './LikedItem.interfaces'
import { StyledItem } from "./LikedItem.style"

export const LikedItem = ({ liked } : LikedItemInterfaces) => {
    const authToken = useSelector((state : RootState) => state.auth);
    const dispatch = useDispatch();
    const { deleteFromFavorites } = bindActionCreators(actionCreators, dispatch);
    console.log(liked);
    return (
        <StyledItem>
            <img src={require(`../../../../img/product-photos/${liked.first_color}/1.jpg`).default}  alt="" />
            <div className="info">
                <div>
                    <h4>{liked?.model}</h4>
                    <p>{liked?.brand}</p>
                    <p onClick={() => deleteFromFavorites({id: liked?.id, auth: authToken})}>Unlike</p>
                </div>
                <h4>{liked?.discounted_price || liked?.price}zł</h4>
            </div>
        </StyledItem>
    )
}

