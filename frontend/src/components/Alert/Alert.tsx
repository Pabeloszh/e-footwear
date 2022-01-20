import { Snackbar } from '@material-ui/core';
import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { actionCreators } from '../../state';
import { bindActionCreators } from 'redux';

const AlertComponent = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Alert = () => {
    const alert = useSelector((state :RootState) => state.alert);

    const dispatch = useDispatch();
    const { closeAlert } = bindActionCreators(actionCreators, dispatch);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        closeAlert()
    };

    return (
        <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
            <AlertComponent onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
                {alert.message}
            </AlertComponent>
        </Snackbar>
    );
};
