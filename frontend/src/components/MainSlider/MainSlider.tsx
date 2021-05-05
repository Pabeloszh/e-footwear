import React, {useRef, createRef} from 'react'
import { StyledMainSlider } from "./MainSlider.style"
import { Slide } from "./Slide/Slide"

const slideData = [
    {
        h3: "Fresh Offers",
        h1: `CHECK OUT OUR PRODUCTS`,
        p: "Our brand new footwear just arrived to our magazine, check it out before its too late",
        button: 'BROWSE NOW'
    },
    {
        h3: "Latest Discounts",
        h1: `NEWEST SALES ARE HERE`,
        p: "You need to check out our newest discounts and special prices for footwear",
        button: 'SEE NOW'
    }
];

export const MainSlider: React.FC = () => {
    const arrLength = slideData.length;
    const [elRefs, setElRefs] = React.useState([]);

    React.useEffect(() => {
        // add or remove refs
        setElRefs(elRefs => (
          Array/*<{current: object}>*/(arrLength).fill({}).map((_, i) => elRefs[i] || createRef<React.FC>())
        ));
        console.log(elRefs);
    }, [arrLength]);

    React.useEffect(() => {
        //@ts-ignore
        elRefs.length !== 0 && (elRefs[1].current.style.display = 'none');
    }, [elRefs]);

    return (
        <StyledMainSlider>
            {slideData.map((slide, i) => {
                return (
                    <div className="slider">
                        <Slide ref={elRefs[i]} data={slide}/>
                    </div>
                )
            })}
        </StyledMainSlider>
    )
}