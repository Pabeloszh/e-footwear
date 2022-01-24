import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';

export const StyledDialog = styled(Dialog)`
    .MuiDialog-container{
        margin:auto;
        min-width:420px;
        max-width:550px;
    }
    .MuiDialogTitle-root{
        padding-top:15px;
        padding-bottom:0;
    }
    .MuiDialogContent-root{
        padding-top:10px !important;
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
            margin-bottom:10px !important;
            width:100%;
            margin:0;
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
            margin:auto;
            width:100%;
            min-width:300px;
            max-width:420px;
        }
    }
`;