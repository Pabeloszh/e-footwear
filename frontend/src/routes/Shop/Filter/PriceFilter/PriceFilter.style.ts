import styled from "styled-components";

export const StyledPrice = styled.div`
    div{
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom:15px;
        div{
            padding:0;
            margin:0;
            border: none;
            input{
                padding:5px;
            }
        }
        .MuiFormControl-root{
            width: 85px;

        }
        .Mui-focused{
            color:#f4511e !important;
        }
        .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
            border-color:#f4511e;
        }
        .MuiInputLabel-outlined {
            transform: translate(14px, 7.5px) scale(1);
        }
        .MuiInputLabel-outlined.MuiInputLabel-shrink{
            transform: translate(14px, -6px) scale(0.75);
        }
        
        h4{
            margin:0 5px;
        }
    }
    .MuiSlider-root{
        color:#F4511E !important;
    }      
`;