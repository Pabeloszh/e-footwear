import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import { RootState } from '../../../state/reducers';
import { Button } from '@material-ui/core';
import { ProductLikeButtonInterfaces } from './ProductLikeButton.interfaces';

export const ProductLikeButton = ({ id } : ProductLikeButtonInterfaces) => {
    const [loading, setLoading] = useState<boolean>(false)
    
    const favorites = useSelector((state :RootState) => state.favorites)
    const authToken = useSelector((state : RootState) => state.auth)

    const dispatch = useDispatch();
    const { deleteFromFavorites, addToFavorites, setLoginWindow } = bindActionCreators(actionCreators, dispatch)
    

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
            <Button variant="contained" color="primary" disabled={loading} fullWidth onClick={setFavorite}>
                {isFavorite() ? 'Delete from list' : 'Add to list'}
            </Button>        
    )
}

