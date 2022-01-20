import styled from 'styled-components';

export const StyledProductsCarousel = styled.div`
padding: 50px 0;
    background-color:#f6f6f6;
    .title{
        opacity:0;
        transition: all 800ms ease-in;
        transform: translateY(-15px);
        margin-bottom:25px;
        margin-left: 75px;
        padding-right:75px;

        h2{
            font-size:36px;
            font-family: 'Work Sans', sans-serif;
        }
    }
    .animated{
        opacity:1;
        transition: all 800ms ease-in;
        transform: translateY(0);
    }
    li:first-child{
        margin-left:75px;
    }

    @media only screen and (max-width: 660px){
        padding: 50px 0;
        background-color:#f6f6f6;
        .title{
            margin-bottom:25px;
            margin-left: 35px;
            padding-right:35px;
            h2{
                font-size:24px;
            }
        }
        li:first-child{
            margin-left:35px;
        }
    }
`