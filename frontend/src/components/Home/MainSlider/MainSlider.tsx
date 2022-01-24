import React, {useRef, useEffect, useState} from 'react'
import { StyledMainSlider } from "./MainSlider.style"
import { Slide } from "./Slide"
import slide1 from "../../../img/slide-1.webp";
import slide2 from "../../../img/slide-2.webp";
import slide3 from "../../../img/slide-3.webp";

const slideData = [
    {
        h3: "Fresh Offers",
        h1: `CHECK OUT OUR PRODUCTS`,
        p: "Our brand new footwear just arrived to our magazine, check it out before its too late",
        button: 'BROWSE NOW',
        background: `url(${slide1})`
    },
    {
        h3: "Latest Discounts",
        h1: `NEWEST SALES ARE HERE`,
        p: "You need to check out our newest discounts and special prices for footwear",
        button: 'SEE NOW',
        background: `url(${slide2})`
    },
    {
        h3: "Overcoming Challenges",
        h1: `PROFESSIONAL SPORT SHOES`,
        p: "If u need to get new PR on gym or end up first at marathon, we got your back",
        button: 'SPORTSWEAR',
        background: `url(${slide3})`
    }
];

export const MainSlider: React.FC = () => {
    const mainRef = useRef(null);
    const [cooldown, isCooldown] = useState(false); 
    const [num, setNum] = useState(0);
    
    useEffect(() => {
        if(mainRef){
            // @ts-ignore
            mainRef.current.children[num].classList.add('active');
        }
    }, [mainRef])

    useEffect(() => {
        const interval = setInterval(() => {
            if(mainRef){
                //@ts-ignore
                setNum(prevNum => prevNum + 1);
            }
        }, 7500);
        if(cooldown) {
            clearInterval(interval)
            setTimeout(()=> isCooldown(false), 5000);
        };
        return () => clearInterval(interval);

    }, [cooldown])

    useEffect(() => {
        if(mainRef){
            num === 3 && setNum(0)
            //@ts-ignore
            Array.from(mainRef.current.children).filter((slide) => (slide.nodeName === 'DIV')).forEach((slide)=>{
                //@ts-ignore
                slide.classList.remove('active');
            });
            //@ts-ignore
            mainRef.current.children[num].classList.add('active');
        }
    }, [num])

    return (
        <>
            <StyledMainSlider ref={mainRef}>
                {slideData.map((slide, i : number) => {
                    return (
                        <Slide data={slide} key={i}/>
                    )
                })}
                <span className="dots" onClick={()=>isCooldown(true)}>
                    {slideData.map((slide, i) => (
                        <p style={{opacity: num === i ? '1' : '0.5'}} onClick={()=>{setNum(i);}} key={`dot-${i}`}>&bull;</p>
                    ))}
                </span>
            </StyledMainSlider>
        </>
    )
}