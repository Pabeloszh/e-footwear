import React from 'react';
import { LoginProps } from "./Login.interfaces"
import { StyledLogin } from "./Login.style"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';

export const Login: React.FC<LoginProps> = ({authWindow, toggleAuthWindow}) => {
    return (
        <Dialog open={authWindow} onClose={()=>console.log('close')} aria-labelledby="form-dialog-title">
            <StyledLogin>
                <CloseIcon onClick={() => toggleAuthWindow(false)}/>
                <DialogTitle id="form-dialog-title">Sign in to your account</DialogTitle>
                <DialogContent>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        // required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            />
                        </Grid>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Link href="#" variant="body2" className="sign-in">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </form>
                </DialogContent>
            </StyledLogin>
        </Dialog>
    )
}

export default Login
