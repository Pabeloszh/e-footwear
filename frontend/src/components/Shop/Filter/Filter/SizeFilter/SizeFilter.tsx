import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';
import { sizes, useQuery } from '../../../../../utils';
import {StyledSize} from "./SizeFilter.style"

export const SizeFilter:React.FC = () => {
    // const query = useQuery()
    let { type } = useParams() as {
        type: string;
    }

    const dispatch = useDispatch();

    const { setSizes } = bindActionCreators(actionCreators, dispatch);

    function setSizesValue(e : any){
        e.currentTarget.classList.toggle('active');
        setSizes({value: e.currentTarget.innerHTML, checked: e.currentTarget.classList.contains('active')})
    }
    return (
        <StyledSize>
             <h2>Size:</h2>
                <div className="size-container">
                    {sizes(type).map(el => (
                        <p key={`size${el}`} onClick={setSizesValue} /*className={query.get('sizes')?.split(',').find(e => e === el.toString()) && 'active'}*/>{el}</p>
                    ))}
                </div>
        </StyledSize>
    )
}


