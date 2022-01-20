import styled from "styled-components";

export const StyledStars = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;
    svg{
        font-size:60px;
        cursor:pointer;
    }
    @media only screen and (max-width: 425px){
        svg{
            font-size:40px;
        }
    }
`;