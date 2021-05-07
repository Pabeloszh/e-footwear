import styled from 'styled-components';

export const StyledProductCard = styled.div`
    /* height:325px; */
    position:relative;
    width:200px;
    background-color:#fff;
    .photo{
        height:250px;
        width:100%;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .like{
        position:absolute;
        background-color: #fff;
        top: 15px;
        right:15px;
        padding:5px;
        border-radius:2px;
        svg{
            margin-bottom: -5px;
            transition: all 1000ms ease-in-out;
        }
        svg:first-child{
            color:black;
        }
        svg:last-child{
            display:none;
        }
    }
    .like:hover{
        height:33px;
        svg:first-child{
            display:none;
        }
        svg:last-child{
            color:#F4511E;
            display:block;
        }
    }
    .desc{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        padding:15px;
        h5{
            margin-bottom:2px;
            font-weight:400;
        }
        p{
            margin-bottom:10px;
            font-weight:600;
        }
        h6{
            font-size:12px;
            font-weight:400;
            letter-spacing:0.5px;
        }
    }
    .sale{
        position:absolute;
        top:15px;
        background-color: #9a0036;
        padding:7px;
        h5{
            color:#fff;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            letter-spacing:1px;

        }
    }
`