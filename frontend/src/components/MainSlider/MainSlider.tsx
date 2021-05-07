import React, {useRef, useEffect, useState} from 'react'
import { StyledMainSlider } from "./MainSlider.style"
import { Slide } from "./Slide/Slide"

const slideData = [
    {
        h3: "Fresh Offers",
        h1: `CHECK OUT OUR PRODUCTS`,
        p: "Our brand new footwear just arrived to our magazine, check it out before its too late",
        button: 'BROWSE NOW',
        background: `url('https://images.unsplash.com/photo-1581327390731-312ec8f2a7dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1988&q=80')`
    },
    {
        h3: "Latest Discounts",
        h1: `NEWEST SALES ARE HERE`,
        p: "You need to check out our newest discounts and special prices for footwear",
        button: 'SEE NOW',
        background: `url('https://images.unsplash.com/photo-1609234700450-6546bbaba12d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`
    },
    {
        h3: "Overcoming Challenges",
        h1: `PROFESSIONAL SPORT SHOES`,
        p: "If u need to get new PR on gym or end up first at marathon, we got your back",
        button: 'SPORTSWEAR',
        background: `url('https://images.unsplash.com/photo-1561082826-69bd4b48eb74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
    }
];

export const MainSlider: React.FC = () => {
    const mainRef = useRef(null);
    const [cooldown, isCooldown] = useState(false); 
    const [num, setNum] = useState(0);
    let i = 0;

    useEffect(() => {
        if(mainRef){
            //@ts-ignore
            mainRef.current.children[num].style.visibility = 'visible';
            //@ts-ignore
            mainRef.current.children[num].style.zIndex = '2';
            //@ts-ignore
            mainRef.current.children[num].style.opacity = '1';
        }
    }, [mainRef])

    useEffect(() => {
        const interval = setInterval(() => {
            if(mainRef){
                //@ts-ignore
                i < (mainRef.current.children.length - 2) ? i++ : i = 0;
                setNum(i);
            }
        }, 10000);
        if(cooldown) {
            clearInterval(interval)
            setTimeout(()=> isCooldown(false), 5000);
        };
        return () => clearInterval(interval);

    }, [cooldown])

    useEffect(() => {
        if(mainRef){
            //@ts-ignore
            Array.from(mainRef.current.children).filter((slide) => (slide.nodeName === 'DIV')).forEach((slide)=>{
                //@ts-ignore
                slide.style.visibility = 'hidden';
                //@ts-ignore
                slide.style.zIndex = '1';
                //@ts-ignore
                slide.style.opacity = '0';
            });
            //@ts-ignore
            mainRef.current.children[num].style.visibility = 'visible';
            //@ts-ignore
            mainRef.current.children[num].style.zIndex = '2';
            //@ts-ignore
            mainRef.current.children[num].style.opacity = '1';
        }
    }, [num])

    return (
        <>
            <StyledMainSlider ref={mainRef}>
                {slideData.map((slide, i) => {
                    return (
                        <Slide data={slide}/>
                    )
                })}
                <span className="dots" onClick={()=>isCooldown(true)}>
                    {slideData.map((slide, index) => (<p style={{opacity: num === index ? '1' : '0.5'}} onClick={()=>{i=index; setNum(index);}}>&bull;</p>))}
                </span>
            </StyledMainSlider>
        </>
    )
}