import React from 'react'
import { StyledBrand } from './BrandFilter.style';
import { Checkbox, FormControlLabel} from '@material-ui/core'


export const BrandFilter:React.FC = () => {
    return (
        <StyledBrand>
             <h2>Brand:</h2>
                <div className="brand-container">
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Najk"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Aidsidas"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Luis Witą"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Gnucci"
                    />
                </div>
        </StyledBrand>
    )
}
