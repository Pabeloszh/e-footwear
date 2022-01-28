import styled from 'styled-components'

export const StyledOrderSearch = styled.form`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:0 auto 25px;
    max-width:800px;
    padding: 20px 35px;
    background-color: #fff;
    .MuiButtonBase-root{
        margin-top:5px;
        width:100%;
        height:35px;
        background-color:#F4511E !important;
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
    @media only screen and (max-width: 1024px){
        form{
            width: auto;
            max-width: 600px;
            padding: 15px 20px;
        }
    }
`