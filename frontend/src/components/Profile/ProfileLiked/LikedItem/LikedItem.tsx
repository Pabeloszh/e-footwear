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

    return (
        <StyledItem>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
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

