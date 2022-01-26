import React, { useState } from 'react';
import { useParams } from 'react-router'
import { StyledType } from "./TypeFilter.style"
import { useSelector } from "react-redux"
import { capitalizeFirstLetter, useQuery } from '../../../../../utils';
import { useHistory } from 'react-router-dom';

export const TypeFilter:React.FC = () => {
    const query = useQuery()
    const history = useHistory()


    function setType(el : string){
        query.set('type',el)
        history.push({
            search: query.toString(),
        })
    }
    
    return (
        <StyledType>
            <h2>Types: </h2>
            <div>
                {['lifestyle', 'sneakers', 'skateboarding', 'sport'].map(el => (
                    <p
                        key={el}
                        onClick={()=>setType(el)} 
                        className={query.get('type') === el ? 'active' : undefined}
                    >
                        {capitalizeFirstLetter(el)}
                    </p> 
                ))}
            </div>
        </StyledType>
    )
}
