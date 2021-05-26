import styled from "styled-components";

export const StyledItem = styled.div`
    display:flex;
    img{
        height:150px;
    }
    .info{
        width:100%;
        padding: 5px 25px;
        display:flex;
        justify-content: space-between;
        > div:nth-child(1){
            h4{
                font-size:18px;
                margin-bottom:3px;
            }
            div{
                margin-bottom:3px;
                display:flex;
                p:first-child{
                    margin-right:10px;
                }
            }
            div:nth-child(2){
                font-weight:600;
                margin-bottom:5px;
            }
           > p{
               margin-bottom:3px;
           }
        }
        > div:nth-child(2){
            height:35px;
            margin: 0 45px;
            display:flex;
            justify-content:center;
            align-items:center;
            .MuiInputBase-root{
                margin: 0 8px;
                padding:5px;
                width:35px;
                height:35px;
                input{
                    text-align:center;
                    padding:0;
                }
            }
            .Mui-focused{
                color:#f4511e !important;
            }
            .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
                border-color:#f4511e;
            }
            button{
                padding:0;
                color:#F4511E;
            }
        }
        > h4{
            padding-top: 4.5px;
            font-size:20px;
            letter-spacing:0.3px;
            font-weight:600;
        }
    }
    @media only screen and (max-width:1024px){
        img{
            height:100px;
        }
        .info{
            > div:nth-child(1){
                h4{
                    font-size:14px;
                    margin-bottom:5px;
                }
                p{
                    font-size:12px;
                }
            }
            > h4{
                font-size: 16px;
            }
        }
    }
`;