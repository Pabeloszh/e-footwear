import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import { RootState } from '../../../state/reducers';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { ShippingInterfaces } from './Shipping.interfaces';
import { StyledShipping } from './Shipping.style';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    firstName: yup
        .string()
        .required('First name is required'),
    lastName: yup
        .string()
        .required('Last name is required'),
    phone: yup
        .string()
        .required('Phone is required'),
    address: yup
        .string()
        .required('Address is required'),
    city: yup
        .string()
        .required('City is required'),
    vovoideship: yup
        .string()
        .required('Vovoideship is required'),
    zipCode: yup
        .string()
        .required('Zip code is required'),
});

export const Shipping = ({ shippingWindow, setShippingWindow } : ShippingInterfaces) => {
    const authToken = useSelector((state : RootState) => state.auth);
    const cart = useSelector((state : RootState) => state.cart);

    const dispatch = useDispatch();
    const { clearCart, setAlert } = bindActionCreators(actionCreators, dispatch);
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            city: '',
            vovoideship: '',
            zipCode: '',

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

            const headers = {
                'Authorization': `Bearer ${authToken}` 
            }

            axios.post(`${process.env.REACT_APP_API_KEY}/orders/create_order/`, cart, authToken && { headers: headers })
            .then(({data}) => {
                shippingData = { ...shippingData, order: data[data.length - 1].order_id}
                
                axios.post(`${process.env.REACT_APP_API_KEY}/orders/add_shipping/`, shippingData, authToken && { headers: headers })
                .then(() => {
                    if(authToken){
                        setLoading(false)
                        setShippingWindow(false)
                    }

                    clearCart()
                    setAlert({message: 'The order has been submitted for processing', type: 'success'})
                })
                .catch(()=> {
                    setAlert({message: 'Something went wrong', type: 'error'})
                })
                
                !authToken && history.push(`/order-detail/${data[data.length - 1].detail_id}`);
            })
            .catch(() => {
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
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit" 
                            fullWidth 
                            disabled={loading}
                        >
                            Confirm
                        </Button>
                    </form>
                </DialogContent>
            </StyledShipping>
        </Dialog>
    )
}