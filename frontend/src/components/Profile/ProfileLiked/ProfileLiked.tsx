import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import { LikedItem } from './LikedItem'
import { StyledLiked } from "./ProfileLiked.style"

export const ProfileLiked:React.FC = () => {
    const favorites = useSelector((state :RootState) => state.favorites);

    return (
        <StyledLiked>
            <h2>Liked Products</h2>
            {favorites?.map((el : any) => (
                <>
                    <LikedItem liked={el.product}/>
                    <hr />
                </>

            ))}
        </StyledLiked>
    )
}