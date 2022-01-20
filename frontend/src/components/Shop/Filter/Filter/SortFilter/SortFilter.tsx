import React, { useEffect, useRef } from 'react'
import { Checkbox, FormControlLabel, Radio, RadioGroup} from '@material-ui/core'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import { StyledSort } from "./SortFilter.style"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';
import { useHistory, useLocation } from 'react-router-dom'
import { useQuery } from '../../../../../utils';

export const SortFilter:React.FC = () => {
    // const order = useSelector((state : any) => state.url.order);
    // const query = useQuery()
    // //@ts-ignore
    // const chuj = useRef(null)
    // const location = useLocation()
    // const history = useHistory()
    
    const dispatch = useDispatch();
    const { setOrder } = bindActionCreators(actionCreators, dispatch);


    //bad bad bad
    // useEffect(() => {
    //     const queryParams = new URLSearchParams(location.search)
    //     queryParams.get('order')
    //     //@ts-ignore
    //     setOrder(queryParams.get('order'))
    //     console.log('object');
    // }, [query.get('order')])

    function setSortValue(e:any){
        setOrder(e.target.value);
    }

    return (
        <StyledSort>
            <h2>Sort by:</h2>
            <RadioGroup
                // value={query.get('ord')}
                defaultValue={'date_added'}
                // value={order}
                name="radio-buttons-group"
                onChange={setSortValue}
                // ref={chuj}
            >
                <FormControlLabel value="price" control={<Radio />} label="Lowest price" />
                <FormControlLabel value="-price" control={<Radio />} label="Highest price" />
                <FormControlLabel value="date_added" control={<Radio />} label="Newest" />
                <FormControlLabel value="-date_added" control={<Radio />} label="Oldest" />
                <FormControlLabel value="-_average_rating" control={<Radio />} label="Most rated" />
            </RadioGroup>
        </StyledSort>
    )
}

