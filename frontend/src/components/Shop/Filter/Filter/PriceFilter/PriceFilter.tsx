import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Slider, TextField } from '@material-ui/core'
import {StyledPrice} from './PriceFilter.style'
import { useQuery } from '../../../../../utils';

export const PriceFilter:React.FC = () => {
    const [value, setValue] = React.useState<number[]>([0, 1000]);
    const [slider, setSlider] = React.useState<number[]>([0, 1000]);

    const query = useQuery()
    const history = useHistory()

    useEffect(() => {
        if(query.get('min_price') && query.get('max_price')){
            setValue([Number(query.get('min_price')), Number(query.get('max_price'))])
            setSlider([Number(query.get('min_price')), Number(query.get('max_price'))])
        } else {
            if(query.get('min_price')){
                setValue([Number(query.get('min_price')), value[1]])
                setSlider([Number(query.get('min_price')), slider[1]])
            }
            if(query.get('max_price')){
                setValue([value[0], Number(query.get('max_price'))])
                setSlider([slider[0], Number(query.get('max_price'))])
            }
        }
    }, [])

    useEffect(() => {
        if(value[0] > value[1]){
            setValue([value[1], value[0]])
            return
        }

        query.get('min_price') !== value[0].toString() && query.set('min_price', value[0].toString())
        query.get('max_price') !== value[1].toString() && query.set('max_price', value[1].toString())

        !value[0] && query.delete('min_price')
        value[1] == 1000 && query.delete('max_price')

        history.push({
            search: query.toString(),
        })
    }, [value])

    function handleInputChange(e : any){
        if(e.target.name == "from"){
            setValue([e.target.value, value[1]])
            setSlider([e.target.value, value[1]])
        } else {
            setValue([value[0], e.target.value])
            setSlider([value[0], e.target.value])
        }
    }

    function handleSliderChange(e : any, newValue : any){
        setSlider(newValue)
    }

    function handleChangeCommitted(e : any, newValue : any){
        setValue(newValue);
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
                        value={value[0]}
                        type="number"
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="To"
                        name="to"
                        value={value[1]}
                        type="number"
                        onChange={handleInputChange}
                    />
                </div>
                    <Slider
                        max={1000}
                        //@ts-ignore
                        value={slider}
                        //@ts-ignore
                        onChange={handleSliderChange}
                        onChangeCommitted={handleChangeCommitted}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
        </StyledPrice>
    )
}

