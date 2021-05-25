import styled from "styled-components";

export const StyledStars = styled.div`
    margin-bottom:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    svg{
        cursor:pointer;
        font-size:60px;
    }
    @media only screen and (max-width: 425px){
        svg{
            font-size:40px;
        }
    }
`;