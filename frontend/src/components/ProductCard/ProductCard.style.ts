import styled from 'styled-components';

export const StyledProductCard = styled.div`
    height:300px;
    position:relative;
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
        top: 20px;
        right:20px;
        padding:5px;
        border-radius:2px;
        svg{
            margin-bottom: -5px;
        }
        svg:first-child{
            color:black;
        }
        svg:last-child{
            display:none;
        }
    }
    .like:hover{
        svg:first-child{
            display:none;
        }
        svg:last-child{
            display:block;
        }
    }
`