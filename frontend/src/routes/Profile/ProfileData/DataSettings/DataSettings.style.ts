import styled from "styled-components";

export const StyledSettings = styled.div`
    .MuiInputBase-root{
        margin-bottom:15px;
    }
    .MuiSvgIcon-root:first-child{
        position:absolute;
        top:10px;
        right:10px;
    }
    .MuiDialogTitle-root{
        /* padding-bottom:0; */
        padding-top:35px;
    }
    .MuiButtonBase-root:not(:first-child){
        background-color:#F4511E;
        margin-bottom:15px;
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