import styled from "styled-components";

export const StyledItem = styled.div`
    display:flex;
    img{
        height:150px;
    }
    .info{
        display:flex;
        padding: 5px 25px;
        > div:nth-child(1){
            h4{
                overflow: hidden;
                margin-bottom:5px;
                width:200px;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size:18px;
            }
            .brand-mobile{
                display:none;
            }
            div{
                display:flex;
                margin-bottom:3px;
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
            letter-spacing:0.3px;
            font-weight:600;
        }
    }
    @media only screen and (max-width: 1024px){
        img{
            width:100%;
            min-width:85px;
            max-width:100px;
            height:100px;
            object-fit: cover; 
        }
        .info{
            flex-direction:column;
            width:100%;
            padding:5px 0 5px 15px;
            > div:nth-child(1){
                display:flex;
                flex-direction:column;
                >div{
                    flex-direction:column;
                }
                h4{
                    margin-bottom:5px;
                    width:100%;
                    min-width:100%;
                    max-width:100px;
                    font-size:14px;
                }
                p{
                    margin-bottom:3px;
                    font-size:12px;
                }
                .brand-mobile{
                    display:block;
                }
                .brand{
                    display:none;
                }
                >p:last-child{
                    display:none;
                }
            }
            > div:nth-child(2){
                justify-content:flex-start;
                margin: 15px 0;
                height:35px;
            
                .MuiInputBase-root{
                    margin: 0;
                    width:35px;
                    height:35px;
                    padding:5px;
                    input{
                        padding:0;
                        font-size:14px;
                        text-align:center;
                    }
                    
                }
                button{
                    padding:6px;

                }
                svg{
                    font-size:18px;
                }
            }
            >h4{
                font-size: 16px;
            }
        }
    }
`;