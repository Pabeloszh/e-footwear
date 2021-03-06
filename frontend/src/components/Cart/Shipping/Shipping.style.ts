import styled from "styled-components";

export const StyledShipping = styled.div`
    .MuiSvgIcon-root:first-child{
        position:absolute;
        top:10px;
        right:10px;
    }
    .MuiDialogTitle-root{
        padding-top:35px;
        padding-bottom:0;
    }
    .MuiFormControlLabel-root{
        align-items:flex-start !important;
        padding-top:10px;
    }
    span:last-child{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        margin-top:10px;
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
    .MuiButtonBase-root{
        margin:15px 0;
        background-color:#F4511E !important;
    }
    .MuiButtonBase-root.Mui-disabled{
        opacity: 0.7;
        color: #FFF;
    }
`;