import styled from 'styled-components';

export const StyledMainSlider = styled.div`
    min-height: 490px;
    height: 85vh;
    position:relative;
    /* padding: 1% 0; */
    .slide{
        visibility: hidden;
        opacity: 0;
        z-index:0;
        .content{
            visibility: hidden;
            opacity: 0;
            transform:translate(-50%, calc(-50% + 30px));

        }
    }
    .active{
        visibility: visible;
        opacity: 1;
        z-index:1;
        .content{
            visibility: visible;
            opacity: 1;
            transform:translate(-50%, -50%);

        }
    }
    .dots{
        cursor:pointer;
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