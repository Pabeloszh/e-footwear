import { useState } from 'react';
import { ShippingInterfaces } from './Shipping.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import { RootState } from '../../../state/reducers';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { StyledShipping } from './Shipping.style';
import { useHistory } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    firstName: yup
        .string()
        .required(),
    lastName: yup
        .string()
        .required(),
    phone: yup
        .string()
        .required(),
    address: yup
        .string()
        .required(),
    city: yup
        .string()
        .required(),
    vovoideship: yup
        .string()
        .required(),
    zipCode: yup
        .string()
        .required(),
});

export const Shipping = ({shippingWindow, setShippingWindow} : ShippingInterfaces) => {
    const authToken = useSelector((state : RootState) => state.auth);
    const cart = useSelector((state : RootState) => state.cart);

    const dispatch = useDispatch();
    const { clearCart, setAlert } = bindActionCreators(actionCreators, dispatch);
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: 'email@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            phone: '213742069',
            address: '5723 Morgan Ave',
            city: 'Los Angeles',
            vovoideship: 'California',
            zipCode: '90011',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setLoading(true)
            let shippingData = {
                email: values.email,
                first_name: values.firstName,
                last_name: values.lastName,
                phone_number: values.phone,
                order: '',
                address: values.address,
                city: values.city,
                vovoideship: values.vovoideship,
                zip_code: values.zipCode
            }

            axios.post('https://efootwear.herokuapp.com/api/orders/create_order/', cart, 
            authToken 
                && {
                    headers: {
                        'Authorization': `Bearer ${authToken}` 
                    }
                }
            ).then(({data}) => {
                shippingData = { ...shippingData, order: data[data.length - 1].order_id}
                
                axios.post('https://efootwear.herokuapp.com/api/orders/add_shipping/', shippingData,
                authToken 
                    && {
                        headers: {
                            'Authorization': `Bearer ${authToken}` 
                        }
                    }
                ).then(() => {
                    if(authToken){
                        setLoading(false)
                        setShippingWindow(false)
                    }
                    clearCart()
                    setAlert({message: 'The order has been submitted for processing', type: 'success'})
                }).catch(()=> {
                    setAlert({message: 'Something went wrong', type: 'error'})
                })
                
                !authToken && history.push(`/order-detail/${data[data.length - 1].detail_id}`);
            }).catch(() => {
                setAlert({message: 'Something went wrong', type: 'error'})
            })
        },
    });

    return (
        <Dialog open={shippingWindow} aria-labelledby="form-dialog-title">
            <StyledShipping>
                <CloseIcon onClick={() => setShippingWindow(false)}/>
                <DialogTitle id="form-dialog-title">Shipping</DialogTitle>
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
                            id="firstName"
                            label="First name"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="lastName"
                            label="Last name"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="Phone number"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="vovoideship"
                            label="Vovoideship"
                            name="vovoideship"
                            value={formik.values.vovoideship}
                            onChange={formik.handleChange}
                            error={formik.touched.vovoideship && Boolean(formik.errors.vovoideship)}
                            helperText={formik.touched.vovoideship && formik.errors.vovoideship}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="zipCode"
                            label="Zip Code"
                            name="zipCode"
                            value={formik.values.zipCode}
                            onChange={formik.handleChange}
                            error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                            helperText={formik.touched.zipCode && formik.errors.zipCode}
                        />
                        <Button variant="contained" color="primary" type="submit" fullWidth disabled={loading}>
                            Confirm
                        </Button>
                    </form>
                </DialogContent>
            </StyledShipping>
        </Dialog>
    )
}