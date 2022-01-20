import styled from 'styled-components';
import newsletterr from "../../../img/newsletter.webp"

export const StyledNewsletter = styled.div`
    position:relative;
    overflow:hidden;
    width:100%;
    height:600px;
    padding: 80px 10%;
    .image{
        position:absolute;
        top:0;
        left:0;
        width:100vw;
        height: 800px;
        background-image: url(${newsletterr});
        background-repeat: no-repeat;
        background-size: cover;

    }
    .overlay{
        z-index:1;
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background-color: #00000073;
    }
    .container{
        z-index:2;
        position:absolute;
        width:80%;
        text-align:center;
        .title{
            opacity:0;
            transition: all 800ms ease-in;
            transform: translateY(-15px);
            h2{
                margin-bottom:10px;
                font-size:48px;
                font-family: 'Work Sans', sans-serif;
                letter-spacing:1px;
                color:#f4511e;
            }
            h4{
                margin-bottom:35px;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                font-size:24px;
                color:#fff;
            }
        }
        form{
            opacity:0;
            transition: all 1000ms ease-in;
            transform: translateY(-15px);
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            margin:auto;
            width:60%;
            height: 250px;
            color:#fff !important;
            input, div{
                color:#fff !important;
            }
            .MuiFormLabel-root{
                color:#fff !important;
            }
            .MuiInput-underline:before{
                border-bottom:1px solid #fff !important;
            }
            .MuiInput-underline:after{
                border-bottom:2px solid #f4511e !important;
            }
            .MuiFormHelperText-root{
                color:#fff !important;
            }
            .Mui-focused{
                color:#f4511e !important;
                
            }
            button{
                margin-top:15px;
                background-color:#f4511e !important;
            }
        }
        .animated{
            opacity:1 !important;
            transform: translateY(0);
        }
    }

    @media only screen and (max-width: 768px){
        .container{
            .title{
                h2{
                    font-size:28px;
                    letter-spacing:1px;
                }
                h4{
                    margin-bottom:25px;
                    font-size:16px;
                }
            }
            form{
                width:100%;
            }
        }
    }
`;