import styled from "styled-components";

export const StyledRegister = styled.div`
    .MuiSvgIcon-root:first-child{
        position:absolute;
        top:10px;
        right:10px;
    }
    .MuiDialogTitle-root{
        padding-bottom:0;
        padding-top:35px;
    }
    .MuiFormControlLabel-root{
        align-items:flex-start !important;
        padding-top:10px;
    }
    span:last-child{
        margin-top:10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    .Mui-focused{
        color:#f4511e !important;
    }
    .MuiCheckbox-colorPrimary.Mui-checked{
        color:#f4511e !important;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
        border-color:#f4511e;
    }
    .MuiButtonBase-root:not(:first-child){
        margin-top:15px;
        background-color:#F4511E;
        margin-bottom:15px;
    }
    .sign-in{
        display:flex;
        justify-content:center;
        margin-bottom:25px;
    }
`;