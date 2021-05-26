import React from 'react'
import { LikedItem } from './LikedItem'
import { StyledLiked } from "./ProfileLiked.style"

export const ProfileLiked:React.FC = () => {
    return (
        <StyledLiked>
            <h2>Liked Products</h2>
            <LikedItem/>
            <hr />
            <LikedItem/>
            <hr />
            <LikedItem/>
            <hr />
        </StyledLiked>
    )
}