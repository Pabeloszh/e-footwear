import React, {  useState } from 'react'
import { StyledDialog } from "./ProductReview.style"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ProductReviewProps } from "./ProductReview.interfaces"
import { ProductReviewStars } from './ProductReviewStars';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';

const validationSchema = yup.object({
  message: yup
      .string()
      .required('Message is required'),
});


export const ProductReview:React.FC<ProductReviewProps> = ({open, setOpen, setRates, setPage}) => {
  let { id } = useParams() as {
    id: string;
  };

  const [rate, setRate] = useState<number>(0);
  const authToken = useSelector((state : RootState) => state.auth);

  const dispatch = useDispatch();
  const { setAlert } = bindActionCreators(actionCreators, dispatch);



  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        authToken && axios.post('https://efootwear.herokuapp.com/api/rate_product/', 
        {
            model: id,
            rate: rate,
            message: values.message
        }, 
        {
          headers: {
              'Authorization': `Bearer ${authToken}` 
          }
        }).then(() => {
          setOpen(false)
          setRates(null)
          setPage(prevPage => prevPage = 1)
        }).catch((err) => {
            setAlert({message: err.response.data?.rates?.length ? err.response.data?.rates[0] : 'You have already reviewed this product', type: 'error'})
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