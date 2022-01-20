import styled from 'styled-components';

export const StyledProductCard = styled.div`
    position:relative;
    width:200px;
    height:360px;
    background-color:#fff;
    cursor:pointer;
    .photo{
        height:250px;
        width:100%;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .like:hover{
        svg{
            color:#F4511E;
        }
    }
    .desc{
        padding:15px;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        h5{
            overflow: hidden;
            margin-bottom:2px;
            font-weight:400;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        p{
            overflow: hidden;
            margin-bottom:10px;
            font-weight:600;
            text-overflow:ellipsis;
            white-space: nowrap;
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
        padding:7px;
        background-color: #9a0036;
        h5{
            color:#fff;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            letter-spacing:1px;
        }
    }
    @media only screen and (max-width:425px){
        width:150px;
        height:270px;
        .photo{
            height:187.5px;
            width:100%;
        }
        .desc{
            padding:10px;
            p{
                margin-bottom:8px;
                font-size:16px;
            }
            h6{
                font-size:12px;
                font-weight:400;
                letter-spacing:0.5px;
            }
        }
    }
`