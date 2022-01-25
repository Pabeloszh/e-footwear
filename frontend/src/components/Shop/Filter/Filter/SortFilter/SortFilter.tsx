import React from 'react'
import { FormControlLabel, Radio, RadioGroup} from '@material-ui/core'
import { StyledSort } from "./SortFilter.style"
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../../../../utils';

export const SortFilter:React.FC = () => {
    const query = useQuery()
    const history = useHistory()

    function setSortValue(e:any){
        query.set('order', e.target.value)
        history.push({
            search: query.toString(),
        })
    }

    return (
        <StyledSort>
            <h2>Sort by:</h2>
            <RadioGroup
                //@ts-ignore
                value={query.get('order') || "date_added"}
                name="radio-buttons-group"
                onChange={setSortValue}
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

