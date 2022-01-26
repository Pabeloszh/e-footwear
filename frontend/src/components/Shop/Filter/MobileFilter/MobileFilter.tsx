import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router';
import TuneIcon from '@material-ui/icons/Tune';
import CancelIcon from '@material-ui/icons/Cancel';
import { Filter } from "../Filter"
import { StyledFilter, StyledDrawer } from "./MobileFilter.style"
import { capitalizeFirstLetter } from '../../../../utils';

export const MobileFilter:React.FC = () => {
    let { type } = useParams() as {
        type: string;
    }
    
    const [drawer, toggleDrawer] = useState<boolean>(false)
    const filterNav = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", () => {
                if(filterNav.current){
                    //@ts-ignore
                    if (window.pageYOffset + document.querySelector('.MuiAppBar-root')?.clientHeight >= 75) {
                        filterNav.current.classList.add("sticky")
                    } else {
                        filterNav.current.classList.remove("sticky");
                    }
                }
            })
        }

        watchScroll()

        return () => {
            window.removeEventListener("scroll", () => {
                if(filterNav.current){
                    if (window.pageYOffset >= filterNav.current.offsetTop) {
                        filterNav.current.classList.add("sticky")
                    } else {
                        filterNav.current.classList.remove("sticky");
                    }
                }
            })
        }
    }, [filterNav])

    return (
        <StyledFilter>
            <div className="filter-nav">
                <div className="sticky-nav" ref={filterNav}>
                    <h2>{capitalizeFirstLetter(type)}</h2>
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
