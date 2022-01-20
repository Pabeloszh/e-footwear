import styled from "styled-components";

export const StyledItem = styled.div`
    display:flex;
    width:100%;
    img{
        height:150px;
    }
    .info{
        display:flex;
        justify-content: space-between;
        width:100%;
        padding: 5px 25px;
        > div:nth-child(1){
            h4{
                margin-bottom:3px;
                font-size:18px;
            }
            div{
                display:flex;
                margin-bottom:3px;
                p:first-child{
                    margin-right:10px;
                }
            }
            div:nth-child(2){
                margin-bottom:5px;
                font-weight:600;
            }
           > p{
               margin-bottom:3px;
           }
        }
        > div:nth-child(2){
            display:flex;
            justify-content:center;
            align-items:center;
            margin: 0 45px;
            height:35px;
            .MuiInputBase-root{
                margin: 0 8px;
                width:35px;
                height:35px;
                padding:5px;
                input{
                    padding:0;
                    text-align:center;
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
            font-weight:600;
            letter-spacing:0.3px;
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
    @media only screen and (max-width:600px){
        img{
            min-width:85px;
            width:100%;
            max-width:100px;
            height:125px;
            object-fit: cover;
            
        }
        .info{
            padding:5px 0 5px 15px;
            flex-direction:column;
            min-width:100px;
            div{
                flex-direction:column;
                div{
                    margin:0 !important;
                    p{
                        margin-bottom:4px;
                    }

                }
            }
            > div:nth-child(1){
                h4{
                    text-overflow:ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }
    }
`;