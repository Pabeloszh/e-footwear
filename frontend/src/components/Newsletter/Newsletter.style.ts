import styled from 'styled-components';

export const StyledNewsletter = styled.div`
    padding: 80px 10%;
    width:100%;
    height:600px;
    background-image: url('https://images.unsplash.com/photo-1511318316897-47dc82cd9ebb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1779&q=80');
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position:relative;
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
        form{
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

    }

    @media only screen and (max-width: 768px){
        .container{
            h2{
                font-size:28px;
                letter-spacing:1px;
            }
            h4{
                font-size:16px;
                margin-bottom:25px;
            }
            form{
                width:100%;
            }
        }
    }
`;