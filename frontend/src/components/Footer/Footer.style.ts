import styled from "styled-components";

export const StyledFooter = styled.div`
    padding:50px 5% 25px;
    background-color:#170312;
    color:#fff;
    .footer-desc{
        display:flex;
        margin-bottom:25px;
        .container{
            width:60%;
            padding:0 25px;
            h3{
                font-size:16px;
                font-family: 'Work Sans', sans-serif;
                font-weight:400;
                color: #f4511e;
            }
            p, span{
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                font-size:14px;
            }
            svg{
                color: #f4511e;
            }
            p{
                margin-top:8px;
                line-height:1.4em;
                letter-spacing:0.5px;
            }
            .MuiListItem-root{
                margin-left:-15px;
                margin-right:80px;
                padding:0 5px;
            }
        }
        .container:first-child{
            margin-right:25px;
        }
        .container:last-child{
            width:40%;
            display:flex;
        }
    }
    .MuiDivider-root{
        background-color:#f4511e;
    }
    .footer-end{
        margin-top:25px;
        display:flex;
        justify-content:space-between;
        p{
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-size:12px; 
        }
        div{
            svg{
                margin: 0 5px;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .footer-desc{
            flex-direction: column;
            .container{
                width:100%;
            }
            .container:first-child{
                margin-bottom:25px;
            }
            .container:last-child{
                width:100%;
                justify-content:space-between;
            }
        }
        .footer-end{
            flex-direction: column-reverse;
            div{
                margin-bottom:25px;
            }
        }
    }
`;