import React from 'react';
import {StyledPrice} from './PriceFilter.style'
import { Slider, TextField } from '@material-ui/core'

export const PriceFilter:React.FC = () => {
    const [value, setValue] = React.useState<number[]>([50, 300]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };

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
                        value={value[0]}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="To"
                        name="to"
                        value={value[1]}
                    />
                </div>
                    <Slider
                        max={420}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        // getAriaValueText={'0*c'}
                    />
        </StyledPrice>
    )
}

