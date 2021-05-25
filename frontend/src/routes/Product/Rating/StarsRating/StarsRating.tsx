import React, {useState, Component} from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import { StyledStars } from "./StarsRating.style"

export const StarsRating:React.FC = () => {
    const rates = [1,2,3,4,5]
    const [rate, setRate] = useState<number>(3.12);

    return (
        <StyledStars>
            {rates.map((r) => (
                r <= rate ? <StarIcon /> : (rate % 1 !== 0 && r === Math.ceil(rate)) ? <StarHalfIcon/> : <StarBorderIcon />
            ))}
        </StyledStars>
    )
}

