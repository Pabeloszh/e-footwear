import styled from "styled-components";

export const StyledItem = styled.div`
    display:flex;
    img{
        height:150px;
    }
    .info{
        padding: 5px 25px;
        display:flex;
        > div:nth-child(1){
            h4{
                font-size:18px;
                margin-bottom:5px;
            }
            div{
                margin-bottom:3px;
                display:flex;
                p:first-child{
                    margin-right:10px;
                }
            }
            > p:last-child{
                margin-top:30px;
                text-decoration:underline;
                cursor:pointer;
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
`;