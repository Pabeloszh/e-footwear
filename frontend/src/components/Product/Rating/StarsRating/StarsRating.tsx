import React, {useState, Component} from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import { StarsRatingInterfaces } from './StarsRating.interfaces';

export const StarsRating = ({rate} : StarsRatingInterfaces) => {
    const rates = [1,2,3,4,5]

    return (
        <div>
            {rates.map((r) => (
                r <= rate ? <StarIcon key={r}/> : (rate % 1 !== 0 && r === Math.ceil(rate)) ? <StarHalfIcon key={r}/> : <StarBorderIcon key={r}/>
            ))}
        </div>
    )
}

