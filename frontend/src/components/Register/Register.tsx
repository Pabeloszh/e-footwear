import React from 'react';
import { RegisterProps } from "./Register.interfaces"
import { StyledRegister } from "./Register.style"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Link from '@material-ui/core/Link';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';

export const Register: React.FC<RegisterProps> = ({registerWindow, toggleRegisterWindow}) => {
    return (
        <Dialog open={registerWindow} aria-labelledby="form-dialog-title">
            <StyledRegister>
                <CloseIcon onClick={() => toggleRegisterWindow(false)}/>
                <DialogTitle id="form-dialog-title">Sign up your account</DialogTitle>
                <DialogContent>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="repeat__password"
                        label="Repeat Password"
                        type="password"
                        id="repeat__password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>
                    <Link href="#" variant="body2" className="sign-in">
                        {"You're already registered? Sign In"}
                    </Link>
                </form>
                </DialogContent>
            </StyledRegister>
        </Dialog>
    )
}