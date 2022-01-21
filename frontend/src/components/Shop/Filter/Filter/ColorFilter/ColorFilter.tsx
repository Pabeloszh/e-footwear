import React from 'react'
import {StyledColor} from "./ColorFilter.style";
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from 'react-router-dom';
import { capitalizeFirstLetter, useQuery } from '../../../../../utils';
export const ColorFilter:React.FC = () => {
    const query = useQuery()
    const history = useHistory()


    function setColorsValue(e:any, color : string){
        e.currentTarget.classList.toggle('active');

        let arr = query.get('colors')?.split(',') || []

        e.currentTarget.classList.contains('active') ? arr?.push(color) : arr.splice(arr.indexOf(color), 1)

        arr?.length ? query.set('colors', arr?.join(',')) : query.delete('colors')
        history.push({
            search: query.toString(),
        })
    }
    return (
        <StyledColor>
            <h2>Color</h2>
                <div className="color-container">
                    {["red", "black", "blue", "purple", "orange", "white", "magenta"].map(el => (
                        <div key={el}>
                            <div 
                                className={query.get('colors')?.split(',').find(e => e === el.toString()) ? 'active color' : 'color'} 
                                style={{backgroundColor: el}} 
                                onClick={(e) => setColorsValue(e, el)}
                            >
                                <CheckIcon/>
                            </div>
                            <p>{capitalizeFirstLetter(el)}</p>
                        </div>
                    ))}
                </div>
        </StyledColor>
    )
}
