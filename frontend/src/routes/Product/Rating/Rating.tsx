import React, {useState} from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { StarsRating } from "./StarsRating"
import { StyledRating } from "./Rating.style"
import { Comment } from './Comment';
import { ProductReview } from './ProductReview';

export const Rating:React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [comments, toggleComments] = useState<boolean>(false);

    return (
        <>
            <StyledRating comments={comments}>
                <div className="title">
                    <div>
                        <h3>Rating(11)</h3>
                        <p onClick={()=>setOpen(true)}>Write a review</p>
                    </div>
                    <div>
                        <h3>4.7</h3>
                        <StarsRating />
                        <ArrowDropDownIcon className="dropdown" onClick={()=>toggleComments(!comments)}/>
                    </div>
                </div>
                <div className="comments">
                    <Comment/>
                </div>
            </StyledRating>
            {open && <ProductReview open={open} setOpen={setOpen}/>}
        </>
    )
}