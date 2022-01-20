import React, { useEffect } from 'react'
import { StyledBrand } from './BrandFilter.style';
import { Checkbox, FormControlLabel} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';
import { useQuery } from '../../../../../utils';
import { useHistory, useLocation } from 'react-router-dom'

export const BrandFilter:React.FC = () => {
    const dispatch = useDispatch();

    const { setBrands } = bindActionCreators(actionCreators, dispatch);

    function setBrandValue(e:any){
        setBrands({value: e.target.value, checked: e.target.checked})
    }

    return (
        <StyledBrand>
             <h2>Brand:</h2>
                <div className="brand-container">
                    {['Nike', 'Adidas', "Puma", 'Reebook'].map(el => (
                        <FormControlLabel
                            key={el}
                            control={<Checkbox value={el} onChange={setBrandValue} color="primary" /*checked={query.get('brand__in')?.split(',').find(e => e === el) ? true : false}*//>}
                            label={el}
                        />
                    ))}
                </div>
        </StyledBrand>
    )
}
