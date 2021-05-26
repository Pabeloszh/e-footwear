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


export const DataSettings:React.FC<SettingsProps> = ({settings, toggleSettings}) => {
    return (
        <Dialog open={settings} onClose={()=>console.log('close')} aria-labelledby="form-dialog-title">
            <StyledSettings>
                <CloseIcon onClick={() => toggleSettings(false)}/>
                <DialogTitle id="form-dialog-title">Your Data</DialogTitle>
                <DialogContent>
                <form noValidate>
                    <TextField fullWidth required id="standard-required" label="First Name" defaultValue="Mateo" variant="outlined"/>
                    <TextField fullWidth required id="standard-required" label="Last Name" defaultValue="Fique" variant="outlined"/>
                    <TextField fullWidth required id="standard-required" label="Email" defaultValue="matfiq@gmail.com" variant="outlined"/>
                    {/* <TextField fullWidth required id="standard-required" label="Actual Password" variant="outlined"/> */}
                    <TextField fullWidth required id="standard-required" label="New Password" variant="outlined"/>
                    <TextField fullWidth required id="standard-required" label="Repeat Password" variant="outlined"/>
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