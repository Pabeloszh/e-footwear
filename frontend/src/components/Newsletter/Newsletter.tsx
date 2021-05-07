import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import {StyledNewsletter} from "./Newsletter.style"
import { Button } from '@material-ui/core';

export const Newsletter: React.FC = () => {
    return (
        <StyledNewsletter>
            <div className="overlay"></div>
            <div className="container">
                <h2>Subscribe to our Newsletter</h2>
                <h4>To be updated with all latest products</h4>
                <form>
                    <FormControl color="secondary">
                        <InputLabel htmlFor="first">First name</InputLabel>
                        <Input id="first"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="last">Last name</InputLabel>
                        <Input id="last"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <Button color="inherit" variant="contained" type="submit">SUBSCRIBE</Button>
                </form>
            </div>
        </StyledNewsletter>
    )
}

