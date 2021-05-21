import styled from 'styled-components';

export const StyledProductsCarousel = styled.div`
    background-color:#f6f6f6;
    padding: 50px 0;
    .title{
        transition: all 800ms ease-in;
        transform: translateY(-15px);
        opacity:0;
        margin-bottom:25px;
        margin-left: 75px;
        padding-right:75px;

        h2{
            font-size:36px;
            font-family: 'Work Sans', sans-serif;
        }
    }
    .animated{
        transition: all 800ms ease-in;
        transform: translateY(0);
        opacity:1;
    }
    li:first-child{
        margin-left:75px;
    }

    @media only screen and (max-width: 660px){
        background-color:#f6f6f6;
        padding: 50px 0;
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