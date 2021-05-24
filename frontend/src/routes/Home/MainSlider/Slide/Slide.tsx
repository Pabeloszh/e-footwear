import React, {useEffect, useRef} from 'react'
import { SlideProps } from "./Slide.interfaces"
import { Button } from '@material-ui/core'
import { StyledSlide } from "./Slide.style"

export const Slide: React.FC<SlideProps> = ({data}) => {
    const slideRef = useRef(null);

    useEffect(() => {
        function watchScroll() {
            //@ts-ignore
            window.addEventListener("scroll", () => (slideRef.current && (slideRef.current.style.backgroundPosition = `center bottom ${(slideRef.current.getBoundingClientRect().y) * 0.45}px`)))
        }
        watchScroll();
        return () => {
            //@ts-ignore
            window.removeEventListener("scroll", () =>  (slideRef.current && (slideRef.current.style.backgroundPosition = `center bottom ${(slideRef.current.getBoundingClientRect().y) * 0.45}px`)))
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