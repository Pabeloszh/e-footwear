import React, {useState, useEffect, useRef} from 'react'
import { Drawer } from '@material-ui/core'
import { StyledFilter } from "./MobileFilter.style"
import TuneIcon from '@material-ui/icons/Tune';

export const MobileFilter:React.FC = () => {
    const [drawer, toggleDrawer] = useState<boolean>(false)
    const filterNav = useRef(null);

    useEffect(() => {
        function watchScroll() {
            //@ts-ignore
            window.addEventListener("scroll", () => {
                if(filterNav.current){
                    //@ts-ignore
                    if (window.pageYOffset + document.querySelector('.MuiAppBar-root')?.clientHeight >= filterNav.current.offsetTop) {
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
            <Drawer anchor='bottom' open={drawer} onClose={()=>toggleDrawer(false)}>
                CHUJ
            </Drawer>
        </StyledFilter>
    )
}
