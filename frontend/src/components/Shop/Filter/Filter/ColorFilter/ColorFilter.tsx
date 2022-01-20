import React, { useEffect } from 'react'
import {StyledColor} from "./ColorFilter.style";
import CheckIcon from '@material-ui/icons/Check';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';
import { capitalizeFirstLetter } from '../../../../../utils';

export const ColorFilter:React.FC = () => {
    const dispatch = useDispatch();

    const { setColors } = bindActionCreators(actionCreators, dispatch);

    function setColorsValue(e:any, color : string){
        e.currentTarget.classList.toggle('active')
        setColors({value: color, checked:  e.currentTarget.classList.contains('active')});
    }
    return (
        <StyledColor>
            <h2>Color</h2>
                <div className="color-container">
                    {["red", "black", "blue", "purple", "orange", "white", "magenta"].map(el => (
                        <div key={el}>
                            <div 
                                className="color" 
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
