import React from 'react'
import { Button } from '@material-ui/core'
import { StyledSlide } from "./Slide.style"

interface Data {
    h3: string,
    h1: string,
    p: string,
    button: string,
    background: string
}

interface Props {
    data: Data;
}

export const Slide: React.FC<Props> = ({data}) => {
    
    const chuj = () => {
        console.log(document.querySelectorAll('.slider'));
    }

    return (
        <StyledSlide style={{backgroundImage: data.background}}>
            <div id="overlay"></div>
            <div className="content">
                <h3>{data.h3}</h3>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
                <Button variant="contained" color="inherit" onClick={()=>chuj()}>{data.button}</Button>
            </div>
        </StyledSlide>
    )
}