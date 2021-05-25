import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';

export const StyledDialog = styled(Dialog)`
    .MuiDialog-container{
        min-width:420px;
        max-width:550px;
        margin:auto;
    }
    .MuiDialogTitle-root{
        padding-top:35px;
        padding-bottom:0;
    }
    .MuiDialogContentText-root{
        margin-bottom:20px;
    }
    .Mui-focused{
        color:#f4511e !important;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
        border-color:#f4511e;
    }
    .MuiOutlinedInput-root{
        margin-bottom:25px;
    }
    .MuiDialogActions-root{
        display:flex;
        flex-direction:column;
        .MuiButtonBase-root{
            width:100%;
            margin:0;
            margin-bottom:10px;
        }
        .MuiButtonBase-root:first-child{
            background-color:#f4511e;
        }
        .MuiButtonBase-root:last-child{
            background-color:#170312;
        }
    }
    @media only screen and (max-width: 425px){
        .MuiDialog-container{
            min-width:300px;
            width:100%;
            max-width:420px;
            margin:auto;
        }
    }
`;