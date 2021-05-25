import React from 'react'
import { StarsRating } from '../StarsRating'
import { StyledComment } from "./Comment.style"

export const Comment:React.FC = () => {
    return (
        <StyledComment>
            <div>
                <StarsRating/>
                <p>Fiskus2137</p>
                <p>23-05-2021</p>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum fugit iure animi asperiores? Beatae molestiae est sequi, voluptatibus odio distinctio temporibus harum quaerat accusamus ullam! Corporis laborum maxime illum quo.</p>
        </StyledComment>
    )
}
