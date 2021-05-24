import React, {useState, useEffect, useRef} from 'react'
import { Filter } from "../Filter"
import TuneIcon from '@material-ui/icons/Tune';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import { StyledFilter, StyledDrawer } from "./MobileFilter.style"

export const MobileFilter:React.FC = () => {
    const [drawer, toggleDrawer] = useState<boolean>(false)
    const filterNav = useRef(null);

    useEffect(() => {
        function watchScroll() {
            //@ts-ignore
            window.addEventListener("scroll", () => {
                if(filterNav.current){
                    //@ts-ignore
                    console.log(window.pageYOffset + document.querySelector('.MuiAppBar-root')?.clientHeight, filterNav.current.offsetTop);
                    //@ts-ignore
                    if (window.pageYOffset + document.querySelector('.MuiAppBar-root')?.clientHeight >= 75) {
                        //@ts-ignore
                        filterNav.current.classList.add("sticky")
                    } else {
                        //@ts-ignore
                        filterNav.current.classList.remove("sticky");
                    }
                }
            })
        };
        watchScroll();
        return () => {
            //@ts-ignore
            window.removeEventListener("scroll", () => {
                if(filterNav.current){
                    //@ts-ignore
                    if (window.pageYOffset >= filterNav.current.offsetTop) {
                        //@ts-ignore
                        filterNav.current.classList.add("sticky")
                    } else {
                        //@ts-ignore
                        filterNav.current.classList.remove("sticky");
                    }
                }
            })
        };
      }, [filterNav]);
    return (
        <StyledFilter>
            <div className="filter-nav">
                <div className="sticky-nav" ref={filterNav}>
                    <h2>For Man:</h2>
                    <TuneIcon onClick={()=>toggleDrawer(true)}/>
                </div>
            </div>
            <StyledDrawer variant="persistent" anchor='bottom' open={drawer} onClose={()=>toggleDrawer(false)}>
                <CancelIcon onClick={()=>toggleDrawer(false)}/>
                <Filter/>
            </StyledDrawer>
        </StyledFilter>
    )
}
