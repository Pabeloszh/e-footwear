import styled from 'styled-components';

export const StyledSlide = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    transition-property: opacity, visibility, z-index;
    transition-duration: 1250ms;
    transition-timing-function: ease-in-out;
    #overlay{
        z-index:1;
        width:100%;
        height:100%;
        background-color: #00000073;
    }
    .content{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        transition-property: opacity, visibility, transform;
        transition-duration: 1000ms;
        transition-timing-function: ease-out;
        width:768px;
        text-align:center;
        color:#fff;
        h3{
            margin-bottom:5px;
            font-family: 'Faster One', cursive;
            font-size:24px;
            letter-spacing:4px;
            color:#f4511e;
        }
        h1{
            margin:0 auto 20px auto;
            width:650px;
            font-size:72px;
            font-family: 'Work Sans', sans-serif;
            line-height: 0.95;
        }
        p{
            margin-bottom:35px;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        }
        button{
            background-color:#f4511e;
        }
    }
    @media only screen and (max-width: 1024px){
        .content{
            width:425px;
            h3{
                margin-bottom:5px;
                font-size:18px;
                letter-spacing:4px;
            }
            h1{
                margin:0 auto 10px auto;
                width:375px;
                font-size:36px;
                font-family: 'Work Sans', sans-serif;
                line-height: 0.95;  
            }
            p{
                margin:0 auto 25px;
                width: 350px;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            }
            button{
                background-color:#f4511e;
            }
        }
    }
    @media only screen and (max-width: 425px){
        .content{
            width:320px;
            h3{
                margin-bottom:5px;
                font-size:16px;
                letter-spacing:2px;
            }
            h1{
                margin:0 auto 10px auto;
                width:300px;
                font-size:28px;
                font-family: 'Work Sans', sans-serif;
                line-height: 0.95;  
            }
            p{
                margin:0 auto 25px;
                width: 260px;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            }
            button{
                background-color:#f4511e;
                font-size:14px;
            }
        }
    }

`;