import React from 'react'
import { StyledDialog } from "./ProductReview.style"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ProductReviewProps } from "./ProductReview.interfaces"
import { ProductReviewStars } from './ProductReviewStars';


export const ProductReview:React.FC<ProductReviewProps> = ({open, setOpen}) => {
    return (
        <StyledDialog open={open} onClose={()=>console.log('close')} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Rate our product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            By reviewing the product you will help other users to buy it and we would be delighted to hear your opinion.
          </DialogContentText>
          <TextField
            id="outlined-multiline-static"
            label="Your Opinion"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            />
          <ProductReviewStars />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} variant="contained" color="primary">
            Post
          </Button>
          <Button onClick={()=>setOpen(false)} variant="contained" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </StyledDialog>
    )
}