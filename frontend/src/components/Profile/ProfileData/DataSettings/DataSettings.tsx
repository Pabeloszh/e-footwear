import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { SettingsProps } from "./DataSettings.interfaces"
import { StyledSettings } from "./DataSettings.style"

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .when('password', {
            is: (value : any) => value && value.length > 0,
            then: yup
                .string()
                .required("Password must be confirmed")
        })
});

export const DataSettings:React.FC<SettingsProps> = ({settings, toggleSettings}) => {
    const authToken = useSelector((state : RootState) => state.auth);
    const user = useSelector((state : RootState | null) => state?.user);

    const dispatch = useDispatch();

    const { setUser, setAlert } = bindActionCreators(actionCreators, dispatch);
    
    const formik = useFormik({
        initialValues: {
            email: user?.email,
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            let payload = {}
            
            if(values.email !== user.email){
                payload = { ...payload, email: values.email}
            }
            if(values.password){
                payload = { ...payload, password: values.password}
            }

            if(Object.keys(payload).length !== 0){
                axios.patch('https://efootwear.herokuapp.com/api/users/edit/', payload, 
                {
                    headers: {
                        'Authorization': `Bearer ${authToken}` 
                    }
                })
                .then(({data}) => {
                    setUser(data)
                    toggleSettings(false)
                })
                .catch(err => {
                    setAlert({message: err.response.data.email[0], type: 'error'})
                })
            }
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