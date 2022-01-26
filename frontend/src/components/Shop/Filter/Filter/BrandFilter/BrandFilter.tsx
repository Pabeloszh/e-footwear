import React from 'react'
import { useHistory } from 'react-router-dom'
import { Checkbox, FormControlLabel} from '@material-ui/core'
import { StyledBrand } from './BrandFilter.style';
import { useQuery } from '../../../../../utils';

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

    function setChecked(payload : string | null, inspected : string){
        return payload?.split(',').find(el => el === inspected) ? true : false
    }

    return (
        <StyledBrand>
             <h2>Brand:</h2>
                <div className="brand-container">
                    {['Nike', 'Adidas', "Puma", 'Reebook'].map(el => (
                        <FormControlLabel
                            key={el}
                            control={<Checkbox value={el} onChange={setBrandValue} color="primary" checked={setChecked(query.get('brands'), el)}/>}
                            label={el}
                        />
                    ))}
                </div>
        </StyledBrand>
    )
}
