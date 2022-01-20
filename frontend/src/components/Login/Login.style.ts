import styled from "styled-components";

export const StyledLogin = styled.div`
    .MuiSvgIcon-root:first-child{
        position:absolute;
        top:10px;
        right:10px;
    }
    .MuiGrid-container{
        margin-bottom:20px;
    }
    .MuiGrid-grid-xs-true{
        text-align:right;
    }
    .MuiDialogTitle-root{
        padding-top:35px;
        padding-bottom:0;
    }
    .MuiButtonBase-root:not(:first-child){
        margin-bottom:15px;
        background-color:#F4511E;
    }
    .sign-in{
        display:flex;
        justify-content:center;
        margin-bottom:20px;
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
    @media only screen and (max-width: 600px){
        .MuiGrid-grid-xs-true{
            text-align:left;
        }
    }
`;