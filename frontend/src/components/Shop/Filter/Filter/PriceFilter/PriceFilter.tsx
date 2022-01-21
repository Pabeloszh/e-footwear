import React, { useEffect } from 'react';
import {StyledPrice} from './PriceFilter.style'
import { Slider, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';
import { useQuery } from '../../../../../utils';
import { useHistory, useLocation } from 'react-router-dom'

export const PriceFilter:React.FC = () => {
    const [value, setValue] = React.useState<number[]>([0, 1000]);

    const url = useSelector((state : any) => state.url);
    const query = useQuery()
    const history = useHistory()
    // const dispatch = useDispatch();

    // const { setPriceGte, setPriceLte } = bindActionCreators(actionCreators, dispatch);
    useEffect(()=>{
        // console.log(value);
        // setPriceGte(value[0].toString())
        console.log(value[0]);
    }, [value[0]])

    useEffect(()=>{
        // console.log(value);
        // setPriceGte(value[0].toString())
        // query.set('max_price', value[1].toString())
        // history.push({
        //     search: query.toString(),
        // })
        console.log(value[1]);
    }, [value[1]])

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleInputChange = (e : any) => {
        if(e.target.name === "from"){
            //@ts-ignore
            Number(e.target.value) < value[1] ? setValue([Number(e.target.value), value[1]]) : setValue([Number(e.target.value), value[0]])
        } else {
            // setValue([value[0], Number(e.target.value)])
            Number(e.target.value) > value[1] ? setValue([value[0], Number(e.target.value)]) : setValue([Number(e.target.value), value[1]])
        }
    }

    return (
        <StyledPrice>
            <h2>Price</h2>
                <div className="price-container">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="From"
                        name="from"
                        onChange={(e : any) => handleInputChange(e)}
                        value={value[0]}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="To"
                        name="to"
                        onChange={(e : any) => handleInputChange(e)}
                        value={value[1]}
                        // onChange={(e)=>setValue([value, e.target.value])}
                    />
                </div>
                    <Slider
                        max={1000}
                        value={value}
                        //@ts-ignore
                        onChange={handleChange}
                        // onChangeCommitted={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
        </StyledPrice>
    )
}

