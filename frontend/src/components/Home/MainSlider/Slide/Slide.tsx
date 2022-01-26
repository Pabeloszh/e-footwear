import { useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import { SlideInterfaces } from "./Slide.interfaces"
import { StyledSlide } from "./Slide.style"
import { useHistory } from 'react-router-dom'

export const Slide = ({ data } : SlideInterfaces) => {
    const { background, h3, h1, p, button, link } = data
    
    const slideRef = useRef<HTMLDivElement | null>(null);
    const history = useHistory();

    
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", () => (
                //@ts-ignore
                slideRef.current && (slideRef.current.style.backgroundPosition = `center bottom ${(slideRef.current.getBoundingClientRect().y) * 0.45}px`)
            ))
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", () =>  (
                //@ts-ignore
                slideRef.current && (slideRef.current.style.backgroundPosition = `center bottom ${(slideRef.current.getBoundingClientRect().y) * 0.45}px`)
            ))
        };
      }, [slideRef]);

    return (
        <StyledSlide className="slide" style={{backgroundImage: background}} ref={slideRef}>
            <div id="overlay"></div>
            <div className="content">
                <h3>{h3}</h3>
                <h1>{h1}</h1>
                <p>{p}</p>
                <Button variant="contained" color="inherit" onClick={() => history.push(`${link}`)}>{button}</Button>
            </div>
        </StyledSlide>
    )
}