import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledType } from "./TypeFilter.style"
import { capitalizeFirstLetter, useQuery } from '../../../../../utils';

export const TypeFilter:React.FC = () => {
    const query = useQuery()
    const history = useHistory()


    function setType(el : string){
        query.set('type', el)
        history.push({
            search: query.toString(),
        })
    }

    function setActiveType(payload : string | null, inspected : string){
        return payload === inspected ? 'active' : undefined
    }
    
    return (
        <StyledType>
            <h2>Types: </h2>
            <div>
                {['lifestyle', 'sneakers', 'skateboarding', 'sport'].map(el => (
                    <p
                        key={el}
                        onClick={()=>setType(el)} 
                        className={setActiveType(query.get('type'), el)}
                    >
                        {capitalizeFirstLetter(el)}
                    </p> 
                ))}
            </div>
        </StyledType>
    )
}
