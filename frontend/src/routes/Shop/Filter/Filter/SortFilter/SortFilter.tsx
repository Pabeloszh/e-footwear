import React from 'react'
import { Checkbox, FormControlLabel} from '@material-ui/core'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import { StyledSort } from "./SortFilter.style"

export const SortFilter:React.FC = () => {
    return (
        <StyledSort>
            <h2>Sort by:</h2>
            <div>
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<RadioButtonCheckedRoundedIcon />} value="remember" color="primary" />}
                    label="Most purchased"
                />
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<RadioButtonCheckedRoundedIcon />} value="remember" color="primary" />}
                    label="Newest"
                />
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<RadioButtonCheckedRoundedIcon />} value="remember" color="primary" />}
                    label="Rating"
                />
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<RadioButtonCheckedRoundedIcon />} value="remember" color="primary" />}
                    label="Lowest price"
                />
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={<RadioButtonCheckedRoundedIcon />} value="remember" color="primary" />}
                    label="Highest price"
                />
            </div>
        </StyledSort>
    )
}

