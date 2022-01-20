import React from 'react'
import { StyledSettings } from "./DataSettings.style"
import { SettingsProps } from "./DataSettings.interfaces"
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';

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
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password Confirmation is required'),
});

export const DataSettings:React.FC<SettingsProps> = ({settings, toggleSettings}) => {
    const authToken = useSelector((state : RootState) => state.auth);
    const user = useSelector((state : RootState | null) => state?.user);

    const dispatch = useDispatch();

    const { setUser} = bindActionCreators(actionCreators, dispatch);
    
    const formik = useFormik({
        initialValues: {
            email: user?.email,
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log({
                email: values.email,
                password: values.password,
                first_name: "wyjeb to",
                last_name: "w koncu kurwa",
                phone_number: "123456789",
            });
            authToken && axios.patch('https://efootwear.herokuapp.com/api/users/edit/', 
            {
                email: values.email,
                // password: values.password,
                first_name: "wyjeb to",
                last_name: "w koncu kurwa",
                phone_number: "123456789",
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${authToken}` 
                }
            }).then(({data}) => {
                setUser(data)
                toggleSettings(false)
            }).catch(err => {
                console.log(err);
            })
        },
    });
    return (
        <Dialog 
            open={settings}
            aria-labelledby="form-dialog-title"
        >
            <StyledSettings>
                <CloseIcon onClick={() => toggleSettings(false)}/>
                <DialogTitle id="form-dialog-title">Your Data</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField 
                            fullWidth 
                            label="Email"
                            variant="outlined"
                            id="email"
                            name="email" 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField 
                            fullWidth 
                            label="New password"
                            variant="outlined"
                            name="password"
                            id="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField 
                            fullWidth 
                            label="Repeat password"
                            variant="outlined"
                            name="passwordConfirmation"
                            id="passwordConfirmation"
                            type="password"
                            value={formik.values.passwordConfirmation}
                            onChange={formik.handleChange}
                            error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                            helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Save
                        </Button>
                    </form>
                </DialogContent>
            </StyledSettings>
        </Dialog>
    )
}