import styled from 'styled-components';

export const StyledBrand = styled.div`
    div{
        label{
            height:30px;
        }
        .MuiCheckbox-colorPrimary.Mui-checked{
            color:#f4511e !important;
        }
    }
    @media only screen and (max-width: 1024px){
        >div{
            display:flex;
            flex-direction:column;
            label{
                height:30px;
            }
            .MuiCheckbox-colorPrimary.Mui-checked{
                color:#f4511e !important;
            }
        }
    }
`;