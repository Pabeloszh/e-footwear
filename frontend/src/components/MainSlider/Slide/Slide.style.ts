import styled from 'styled-components';
import main1 from "../../../img/mainslider/main1.jpg"

export const StyledSlide = styled.div`
    position:absolute;
    width:100%;
    z-index:2;
    height:100%;
    background-image: url('https://images.unsplash.com/photo-1581327390731-312ec8f2a7dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1988&q=80');
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    // position:relative;
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

`;