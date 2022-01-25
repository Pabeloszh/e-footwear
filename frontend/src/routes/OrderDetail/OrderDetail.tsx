import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProfileHistory } from '../../components/Profile/ProfileHistory';
import { StyledOrderDetail } from './OrderDetail.style';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const validationSchema = yup.object({
    orderId: yup
        .string()
        .required('Order id is required'),
});

export const OrderDetail = () => {
    const history = useHistory()
    let { id } = useParams() as {
        id: string;
    }

    const formik = useFormik({
        initialValues: {
            orderId: id,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            history.push(`/order-detail/${values.orderId}`);
        },
    });
    
    return (
        <StyledOrderDetail>
            <form onSubmit={formik.handleSubmit}>
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
            </form>
            <ProfileHistory/>
        </StyledOrderDetail>
    );
};