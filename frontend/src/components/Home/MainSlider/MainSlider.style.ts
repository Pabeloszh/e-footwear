import styled from 'styled-components';

export const StyledMainSlider = styled.div`
    position:relative;
    height: 85vh;
    min-height: 490px;
    .slide{
        opacity: 0;
        z-index:0;
        visibility: hidden;
        .content{
            opacity: 0;
            visibility: hidden;
            transform:translate(-50%, calc(-50% + 30px));

        }
    }
    .active{
        opacity: 1;
        z-index:1;
        visibility: visible;
        .content{
            opacity: 1;
            visibility: visible;
            transform:translate(-50%, -50%);

        }
    }
    .dots{
        z-index:3;
        position:absolute;
        left:50%;
        bottom: 10px;
        display:flex;
        transform:translateX(-50%);
        cursor:pointer;
        p{
            transition: opacity 1000ms ease-in-out;
            margin: 0 15px;
            font-size:65px;
            color:#fff;
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