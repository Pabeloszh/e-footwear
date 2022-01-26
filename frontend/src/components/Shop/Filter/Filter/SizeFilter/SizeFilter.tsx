import React from 'react';
import { useParams } from 'react-router-dom';
import { sizes, useQuery } from '../../../../../utils';
import {StyledSize} from "./SizeFilter.style"
import { useHistory } from 'react-router-dom'


export const SizeFilter:React.FC = () => {
    const query = useQuery()
    const history = useHistory();

    let { type } = useParams() as {
        type: string;
    }

    function setSizesValue(e : any){
        e.currentTarget.classList.toggle('active');

        let arr = query.get('sizes')?.split(',') || []

        e.currentTarget.classList.contains('active') ? arr?.push(e.currentTarget.innerHTML) : arr.splice(arr.indexOf(e.currentTarget.innerHTML), 1)

        arr?.length ? query.set('sizes', arr?.join(',')) : query.delete('sizes')
        
        history.push({
            search: query.toString(),
        })
    }

    function setSizeActive(payload : string | null, inspected : string){
        return payload?.split(',').find(e => e === inspected) && 'active'
    }

    return (
        <StyledSize>
             <h2>Size:</h2>
                <div className="size-container">
                    {sizes(type).map(el => (
                        <p key={`size${el}`} onClick={setSizesValue} className={setSizeActive(query.get('sizes'), el.toString())}>{el}</p>
                    ))}
                </div>
        </StyledSize>
    )
}


