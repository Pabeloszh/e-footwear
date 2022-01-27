import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import { StyledOrderSearch } from './OrderSearch.style';

const validationSchema = yup.object({
    orderId: yup
        .string()
        .required('You must enter your order id'),
});

export const OrderSearch:React.FC = () => {
    let { id } = useParams() as {
        id: string;
    }
    
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            orderId: id || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(!values.orderId) history.push(`order-detail/`)
            history.push(`/order-detail/${values.orderId}`)
        },
    });
    
    return (
        <StyledOrderSearch onSubmit={formik.handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="orderId"
                label="Search by order id"
                name="orderId"
                autoComplete="orderId"
                value={formik.values.orderId}
                onChange={formik.handleChange}
                error={formik.touched.orderId && Boolean(formik.errors.orderId)}
                helperText={formik.touched.orderId && formik.errors.orderId}
            />
            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >Search</Button>
        </StyledOrderSearch>
    );
};