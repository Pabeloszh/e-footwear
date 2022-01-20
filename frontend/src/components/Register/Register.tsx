import React from 'react';
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
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { RootState } from '../../state/reducers';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    agreement: yup
        .bool()
        .oneOf([true], 'Field must be checked')
});

export const Register = () => {
    const registerWindow = useSelector((state :RootState) => state.registerWindow);
    const dispatch = useDispatch();

    const { setRegisterWindow, setLoginWindow, setAlert} = bindActionCreators(actionCreators, dispatch);
    const formik = useFormik({
        initialValues: {
            email: 'admin@gmail.com',
            password: '12345678',
            passwordConfirmation: '12345678',
            agreement: true
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            axios.post('https://efootwear.herokuapp.com/api/users/create_user/', {
                email: values.email,
                password: values.password,
                first_name: "wypierdol te gowna",
                last_name: "do kurwy nedzy bo mi wyjebuje error bez tego",
                phone_number: "123456789"
            }).then(({data}) => {
                console.log(data);
                setAlert({message: `You've been registered successfully. Sign in`, type: 'success'})
                setRegisterWindow()
                setLoginWindow()
            }).catch(err => {
                setAlert({message: err.response.data.email[0], type: 'error'})
            })
        },
    });

    function openLogin(){
        setRegisterWindow()
        setLoginWindow()
    }

    return (
        <Dialog open={registerWindow} aria-labelledby="form-dialog-title">
            <StyledRegister>
                <CloseIcon onClick={setRegisterWindow}/>
                <DialogTitle id="form-dialog-title">Sign up your account</DialogTitle>
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
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="passwordConfirmation"
                            label="Repeat Password"
                            type="password"
                            id="passwordConfirmation"
                            value={formik.values.passwordConfirmation}
                            onChange={formik.handleChange}
                            error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                            helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
                            name="agreement"
                            id="agreement"
                            value={formik.values.agreement}
                            onChange={formik.handleChange}
                            // error={formik.touched.agreement}
                            // helperText={formik.touched.agreement && formik.errors.agreement}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                        <p className="sign-in" onClick={openLogin}>
                            You're already registered? Sign In
                        </p>
                    </form>
                </DialogContent>
            </StyledRegister>
        </Dialog>
    )
}