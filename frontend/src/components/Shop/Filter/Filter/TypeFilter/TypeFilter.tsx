import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { StyledType } from "./TypeFilter.style"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../../../../state/index"
import { capitalizeFirstLetter } from '../../../../../utils';

export const TypeFilter:React.FC = () => {
    const [activeType, setActiveType] = useState<string | null>(null)

    const state = useSelector((state) => state);

    const dispatch = useDispatch();
  
    const { setMan, setWoman, setKids, setSport, setSales, setType } = bindActionCreators(actionCreators, dispatch);

    let { type } = useParams() as {
        type: string;
    };

    useEffect(()=> {
        switch (type) {
            case "man":
                setMan()
                break;
            case "woman":
                setWoman()
                break;
            case "kids":
                setKids()
                break;
            case "sport":
                setSport()
                break;
            case "sales":
                setSales()
                break;
        }
    }, [type])

    useEffect(() => {
        setType(activeType);
    }, [activeType])
    
    return (
        <StyledType>
            <h2>Types: </h2>
            <div>
                {['lifestyle', 'sneakers', 'skateboarding', 'sport'].map(el => (
                    <p
                        key={el}
                        onClick={()=>setActiveType(el)} 
                        className={activeType === el ? 'active' : undefined}
                    >
                        {capitalizeFirstLetter(el)}
                    </p> 
                ))}
            </div>
        </StyledType>
    )
}
