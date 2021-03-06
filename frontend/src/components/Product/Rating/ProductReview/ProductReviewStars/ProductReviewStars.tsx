import React, {useState, Component} from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import {ProductReviewStarsProps} from "./ProductReviewStars.interfaces"
import { StyledStars } from "./ProductReviewStars.style"

export const ProductReviewStars = ({rate, setRate} : ProductReviewStarsProps) => {
    const rates = [1,2,3,4,5]

    return (
        <StyledStars>
            {rates.map((r) => (
                r <= rate ? <StarIcon onClick={()=>setRate(r)} style={{color: '#f4511e'}} key={r}/> : <StarBorderIcon onClick={()=>setRate(r)} key={r}/>
            ))}
        </StyledStars>
    )
}
