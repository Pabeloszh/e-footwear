import styled from 'styled-components';
import main1 from "../../../img/mainslider/main1.jpg"

export const StyledSlide = styled.div`
    position:absolute;
    /* display:none; */
    width:100%;
    height:100%;
    /* background-image: url('https://images.unsplash.com/photo-1581327390731-312ec8f2a7dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1988&q=80'); */
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    visibility: hidden;
    opacity: 0;
    z-index:1;
    transition: all 2000ms ease-in-out;
    #overlay{
        z-index:1;
        width:100%;
        height:100%;
        background-color: #00000073;
    }
    .content{
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