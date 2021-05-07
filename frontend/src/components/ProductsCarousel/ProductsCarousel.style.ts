import styled from 'styled-components';

export const StyledProductsCarousel = styled.div`
    /* height:00px; */
    background-color:#f6f6f6;
    /* padding: 75px 0 75px 6%; */
    padding: 50px 0;
    .title{
        margin-bottom:25px;
        margin-left: 75px;
        padding-right:75px;

        h2{
            font-size:36px;
            font-family: 'Work Sans', sans-serif;
        }
    }
    /* react-multi-carousel-list   */
    li:first-child{
        margin-left:75px;
    }
    li:last-child{
        /* margin-right:45px; */
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
                font-family: 'Work Sans', sans-serif;
            }
        }
        /* react-multi-carousel-list   */
        li:first-child{
            margin-left:35px;
        }
        li:last-child{
            /* margin-right:45px; */
        }

    }
`