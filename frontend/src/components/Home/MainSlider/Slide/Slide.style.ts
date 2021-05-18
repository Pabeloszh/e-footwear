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
        transition-property: opacity, visibility, transform;
        transition-duration: 1000ms;
        transition-timing-function: ease-out;
        width:768px;
        color:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        text-align:center;
        h3{
            font-family: 'Faster One', cursive;
            color:#f4511e;
            font-size:24px;
            margin-bottom:5px;
            letter-spacing:4px;
        }
        h1{
            width:650px;
            font-size:72px;
            font-family: 'Work Sans', sans-serif;
            margin:0 auto;
            line-height: 0.95;
            margin-bottom: 20px;
        }
        p{
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            margin-bottom:35px;
        }
        button{
            background-color:#f4511e;
        }
    }
    @media only screen and (max-width: 1024px){
        .content{
            width:425px;
            h3{
                font-size:18px;
                margin-bottom:5px;
                letter-spacing:4px;
            }
            h1{
                width:375px;
                font-size:36px;
                font-family: 'Work Sans', sans-serif;
                margin:0 auto;
                line-height: 0.95;  
                margin-bottom: 10px;
            }
            p{
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                width: 350px;
                margin:0 auto 25px;
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
                font-size:16px;
                margin-bottom:5px;
                letter-spacing:2px;
            }
            h1{
                width:300px;
                font-size:28px;
                font-family: 'Work Sans', sans-serif;
                margin:0 auto;
                line-height: 0.95;  
                margin-bottom: 10px;
            }
            p{
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                width: 260px;
                margin:0 auto 25px;
            }
            button{
                background-color:#f4511e;
                font-size:14px;
            }
        }
    }

`;