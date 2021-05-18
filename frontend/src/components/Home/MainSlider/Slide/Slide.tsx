import React, {useEffect, useRef} from 'react'
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
    const slideRef = useRef(null);

    useEffect(() => {
        function watchScroll() {
            //@ts-ignore
            window.addEventListener("scroll", () => (slideRef && (slideRef.current.style.backgroundPosition = `center bottom ${(slideRef.current.getBoundingClientRect().y) * 0.45}px`)))
        }
        watchScroll();
        return () => {
            //@ts-ignore
            window.removeEventListener("scroll", () =>  (slideRef && (slideRef.current.style.backgroundPosition = `center bottom ${(slideRef.current.getBoundingClientRect().y) * 0.45}px`)))
        };
      }, [slideRef]);

    return (
        <StyledSlide className="slide" style={{backgroundImage: data.background}} ref={slideRef}>
            <div id="overlay"></div>
            <div className="content">
                <h3>{data.h3}</h3>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
                <Button variant="contained" color="inherit">{data.button}</Button>
            </div>
        </StyledSlide>
    )
}