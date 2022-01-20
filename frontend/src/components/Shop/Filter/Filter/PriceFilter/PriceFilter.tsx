import React, { useEffect } from 'react';
import {StyledPrice} from './PriceFilter.style'
import { Slider, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';

export const PriceFilter:React.FC = () => {
    const [value, setValue] = React.useState<any>([0, 1000]);

    const url = useSelector((state : any) => state.url);

    const dispatch = useDispatch();

    const { setPriceGte, setPriceLte } = bindActionCreators(actionCreators, dispatch);
    useEffect(()=>{
        // console.log(value);
        setPriceGte(value[0].toString())
    }, [value[0]])
    const handleChange = (event: any, newValue: any) => {
        // console.log(event);
        // value[0] !== newValue[0] ? setPriceGte(newValue[0].toString()) : setPriceLte(newValue[1].toString())
        // value[1] !== newValue[1] ? setPriceLte(newValue[1].toString()) : setPriceGte(newValue[0].toString())
        // console.log(url.priceLte, newValue[0]);
        // setValue(newValue as number[]);
    };

    const setPriceValues = (event : any, newValue : any) => {
        // console.log(123);
        // value[0] !== newValue[0] ? setPriceGte(newValue[0].toString()) : setPriceLte(newValue[1].toString())
        // value[1] !== newValue[1] ? setPriceLte(newValue[1].toString()) : setPriceGte(newValue[0].toString())

        // setValue(newValue as number[]);
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
                        value={url.priceGte}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="To"
                        name="to"
                        value={url.priceLte}
                        // onChange={(e)=>setValue([value, e.target.value])}
                    />
                </div>
                    <Slider
                        max={1000}
                        value={[url.priceGte, url.priceLte]}
                        onChange={handleChange}
                        onChangeCommitted={setPriceValues}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
        </StyledPrice>
    )
}

