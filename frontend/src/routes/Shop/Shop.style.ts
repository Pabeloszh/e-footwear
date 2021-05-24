import styled from "styled-components";

export const StyledShop = styled.div`
    padding-top:125px;
    >div{
        display:flex;
        justify-content:center;
    }

    @media only screen and (max-width: 1024px){
        position:relative;
        padding-top:75px;

        >div{
            display:block;
        }
    }

`;