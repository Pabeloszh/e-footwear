import styled from 'styled-components';

export const StyledMainSlider = styled.div`
    height: 85vh;
    position:relative;
    .dots{
        position:absolute;
        bottom: 10px;
        left:50%;
        transform:translateX(-50%);
        z-index:3;
        display:flex;
        p{
            margin: 0 15px;
            font-size:65px;
            color:#fff;
            transition: opacity 1000ms ease-in-out;
        }
    }
    @media only screen and (max-width: 425px){
        .dots{
        bottom: 10px;
        p{
            margin: 0 10px;
            font-size:55px;
        }
    } 
    }
`;