import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import { LikedItem } from './LikedItem'
import { LikedItemSkeleton } from './LikedItemSkeleton';
import { StyledLiked } from "./ProfileLiked.style"

export const ProfileLiked:React.FC = () => {
    const favorites = useSelector((state :RootState) => state.favorites);

    return (
        <StyledLiked>
            <h2>Liked Products</h2>
            {favorites 
                ? favorites?.map((el : any, i : number) => (
                    <React.Fragment key={`${el.id}-${i}`}>
                        <LikedItem liked={el.product}/>
                        <hr />
                    </React.Fragment>

                ))
                : <>
                    <LikedItemSkeleton/>
                    <hr />
                    <LikedItemSkeleton/>
                </>
            }
        </StyledLiked>
    )
}