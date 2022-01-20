import React from 'react'
import { StarsRating } from '../StarsRating'
import { CommentInterfaces } from './Comment.interfaces'
import { StyledComment } from "./Comment.style"

export const Comment = ({comments, rate} : CommentInterfaces) => {
    return (
        <StyledComment comments={comments}>
            <div>
                <StarsRating rate={rate.rate}/>
                {/* <p>Fiskus2137</p> */}
                <p>{rate.date_added.split('T')[0]}</p>
            </div>
            <p>{rate.message}</p>
        </StyledComment>
    )
}
