import React from 'react'
import {StyledFilter} from "./Filter.style"
import { Checkbox, FormControlLabel, Slider, TextField } from '@material-ui/core'

export const Filter:React.FC = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };

    return (
        <StyledFilter>
            {/* rodzaje */}
            <div>
                <h2>For Man:</h2>
                <h4>typ1</h4>
                <h4>typ2</h4>
                <h4>typ3</h4>
                <h4>typ4</h4>
            </div>
            {/* rozmiar */}
            <div>
                <h2>Size:</h2>
                <div className="size-container">
                    <h4>35</h4>
                    <h4>36</h4>
                    <h4>37</h4>
                    <h4>38</h4>
                    <h4>39</h4>
                    <h4>40</h4>
                    <h4>41</h4>
                    <h4>42</h4>
                    <h4>43</h4>
                    <h4>44</h4>
                    <h4>45</h4>
                    <h4>46</h4>
                    <h4>47</h4>
                    <h4>48</h4>
                    <h4>49</h4>
                    <h4>50</h4>
                    <h4>51</h4>
                    <h4>52</h4>
                    <h4>53</h4>
                    <h4>54</h4>
                </div>
            </div>
            {/* marka */}
            <div>
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
            </div>
            {/* cena */}
            <div>
                <h2>Price</h2>
                <div className="price-container">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        id="email"
                        label="From"
                        name="from"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        id="email"
                        label="To"
                        name="to"
                        autoFocus
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
            </div>
            {/* kolor */}
        </StyledFilter>
    )
}

