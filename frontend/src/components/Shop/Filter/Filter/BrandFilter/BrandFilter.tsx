import React from 'react'
import { StyledBrand } from './BrandFilter.style';
import { Checkbox, FormControlLabel} from '@material-ui/core'
import { useQuery } from '../../../../../utils';
import { useHistory } from 'react-router-dom'

export const BrandFilter:React.FC = () => {
    const query = useQuery();
    const history = useHistory();

    function setBrandValue(e:any){
        let arr = query.get('brands')?.split(',') || []

        e.target.checked ? arr?.push(e.target.value) : arr.splice(arr.indexOf(e.target.value), 1)

        arr?.length ? query.set('brands', arr?.join(',')) : query.delete('brands')
        history.push({
            search: query.toString(),
        })
    }

    return (
        <StyledBrand>
             <h2>Brand:</h2>
                <div className="brand-container">
                    {['Nike', 'Adidas', "Puma", 'Reebook'].map(el => (
                        <FormControlLabel
                            key={el}
                            control={<Checkbox value={el} onChange={setBrandValue} color="primary" checked={query.get('brands')?.split(',').find(e => e === el) ? true : false}/>}
                            label={el}
                        />
                    ))}
                </div>
        </StyledBrand>
    )
}
