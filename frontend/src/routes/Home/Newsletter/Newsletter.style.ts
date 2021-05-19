import styled from 'styled-components';
import newsletterr from "../../../img/newsletter.webp"

export const StyledNewsletter = styled.div`
    padding: 80px 10%;
    width:100%;
    height:600px;
    position:relative;
    overflow:hidden;
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
        position:absolute;
        z-index:2;
        width:80%;
        text-align:center;
        .title{
            transition: all 800ms ease-in;
            transform: translateY(-15px);
            opacity:0;
            h2{
                color:#f4511e;
                font-size:48px;
                font-family: 'Work Sans', sans-serif;
                letter-spacing:1px;
                margin-bottom:10px;
            }
            h4{
                color:#fff;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                font-size:24px;
                margin-bottom:35px;
            }
        }
        form{
            transition: all 1000ms ease-in;
            transform: translateY(-15px);
            opacity:0;
            width:60%;
            height: 250px;
            margin:auto;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
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
            transform: translateY(0);
            opacity:1 !important;
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
                    font-size:16px;
                    margin-bottom:25px;
                }
            }
            form{
                width:100%;
            }
        }
    }
`;