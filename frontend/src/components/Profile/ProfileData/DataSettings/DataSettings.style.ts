import styled from "styled-components";

export const StyledSettings = styled.div`
    .MuiFormControl-root{
        margin-bottom:15px;
    }
    .MuiSvgIcon-root:first-child{
        position:absolute;
        top:10px;
        right:10px;
    }
    .MuiDialogTitle-root{
        padding-top:35px;
    }
    .MuiButtonBase-root:not(:first-child){
        margin-bottom:15px;
        background-color:#F4511E;
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
`;