import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { StyledLikeButton } from './LikeButton.style';
import { LikeButtonInterfaces } from './LikeButton.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import { RootState } from '../../../state/reducers';

export const LikeButton = ({id} : LikeButtonInterfaces) => {
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch();
    const { deleteFromFavorites, addToFavorites, setLoginWindow } = bindActionCreators(actionCreators, dispatch);
    const favorites = useSelector((state :RootState) => state.favorites);
    const authToken = useSelector((state : RootState) => state.auth);

    function isFavorite(){
        return favorites?.some((fav : any)=> fav.product.id === id)
    }
    async function setFavorite(){
        if(!authToken){
            setLoginWindow()
            return
        }
        if(loading) return

        setLoading(true)

        let payload = {id, auth:authToken}

        if(isFavorite()){
            await deleteFromFavorites(payload)
            setLoading(false)
        } else {
            await addToFavorites(payload)
            setLoading(false)
        }
    }
    return (
        <StyledLikeButton onClick={setFavorite}>
            {isFavorite() ?
                <FavoriteIcon/> : 
                <FavoriteBorderIcon/> 
            }
        </StyledLikeButton>
    )
}

