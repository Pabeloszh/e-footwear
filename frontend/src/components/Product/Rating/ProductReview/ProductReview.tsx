import React, { useEffect, useState } from 'react'
import { StyledDialog } from "./ProductReview.style"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ProductReviewProps } from "./ProductReview.interfaces"
import { ProductReviewStars } from './ProductReviewStars';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router';

const validationSchema = yup.object({
  message: yup
      .string()
      .required('Email is required'),
});


export const ProductReview:React.FC<ProductReviewProps> = ({open, setOpen}) => {
  let { id } = useParams() as {
    id: string;
};
  const authToken = useSelector((state : RootState) => state.auth);
  const user = useSelector((state : RootState | null) => state?.user);

  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    // console.log(user);
  }, [rate])

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        authToken && axios.post('https://efootwear.herokuapp.com/api/rate_product/', 
        {
            model: id,
            rate: 3,
            message: 'chujowe 3/5'
        }, 
        {
            headers: {
                'Authorization': `Bearer ${authToken}` 
            }
        }).then(({data}) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    },
});

    return (
        <StyledDialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Rate our product</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <DialogContentText>
              By reviewing the product you will help other users to buy it and we would be delighted to hear your opinion.
            </DialogContentText>
              <TextField
                label="Your Opinion"
                multiline
                rows={4}
                variant="outlined"
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                fullWidth
                />

            <ProductReviewStars rate={rate} setRate={setRate}/>
          </DialogContent>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
            <Button onClick={()=>setOpen(false)} variant="contained" color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </StyledDialog>
    )
}