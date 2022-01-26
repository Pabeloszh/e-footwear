import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../state/index"
import { RootState } from '../../state/reducers';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import { StyledLogin } from "./Login.style"

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
});

export const Login:React.FC = () => {
    const loginWindow = useSelector((state :RootState) => state.loginWindow);

    const dispatch = useDispatch();
    const { userAuth, setLoginWindow, setRegisterWindow, setAlert } = bindActionCreators(actionCreators, dispatch);

    const formik = useFormik({
        initialValues: {
          email: 'pawe@pawe.com',
          password: '1',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('https://efootwear.herokuapp.com/api/users/login', {
                email: values.email,
                password: values.password
            }).then(({data}) => {
                userAuth(data.access)
                setLoginWindow()
                setAlert({message: `You've been logged in`, type: 'success'})
            }).catch(err => {
                setAlert({message: err.response.data.detail, type: 'error'})
            })
        },
    });
    
    function openRegister(){
        setLoginWindow()
        setRegisterWindow()
    }

    return (
        <Dialog open={loginWindow} aria-labelledby="form-dialog-title">
            <StyledLogin>
                <CloseIcon onClick={() => setLoginWindow()}/>
                <DialogTitle id="form-dialog-title">Sign in to your account</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
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
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>
                            <Grid item xs>
                                <p onClick={() => setAlert({message: `Too bad. We didn't add this feature`, type: 'warning'})}>Forgot password?</p>
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
                        <p className="sign-in" onClick={() => openRegister()}>
                            Don't have an account? Sign Up
                        </p>
                    </form>
                </DialogContent>
            </StyledLogin>
        </Dialog>
    )
}