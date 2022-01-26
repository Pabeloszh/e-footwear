import React, { useEffect, useRef } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Button } from '@material-ui/core';
import { StyledNewsletter } from "./Newsletter.style"

export const Newsletter: React.FC = () => {
    const newsRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: '0px'
    };
    
    useEffect(() => {
        formRef.current && observer.observe(formRef.current);
        titleRef.current && observer.observe(titleRef.current);
    }, [formRef]);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }

            entry.target.tagName === 'DIV' && entry.target.classList.add('animated');
            entry.target.tagName === 'FORM' && entry.target.classList.add('animated');

            observer.unobserve(entry.target);
        })
    }, options);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", () => (
                newsRef.current && (newsRef.current.style.backgroundPosition = `center ${-(newsRef.current.getBoundingClientRect().y) * 0.25 + 35}px`)
            ))
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", () =>  (
                newsRef.current && (newsRef.current.style.backgroundPosition = `center ${-(newsRef.current.getBoundingClientRect().y) * 0.25}px`)
            ))
        };
      }, [newsRef]);
    
    return (
        <StyledNewsletter>
            <div className="image" ref={newsRef}></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="title" ref={titleRef}>
                    <h2>Subscribe to our Newsletter</h2>
                    <h4>To be updated with all latest products</h4>
                </div>
                <form ref={formRef}>
                    <FormControl color="secondary">
                        <InputLabel htmlFor="first">First name</InputLabel>
                        <Input id="first"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="last">Last name</InputLabel>
                        <Input id="last"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <Button color="inherit" variant="contained" type="submit">SUBSCRIBE</Button>
                </form>
            </div>
        </StyledNewsletter>
    )
}

