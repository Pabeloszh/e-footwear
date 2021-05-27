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
                width:200px;
                font-size:18px;
                margin-bottom:5px;
                text-overflow:ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .brand-mobile{
                display:none;
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
    @media only screen and (max-width: 1024px){
        img{
            min-width:85px;
            width:100%;
            max-width:100px;
            height:100px;
            object-fit: cover; 
        }
        .info{
            padding:5px 0 5px 15px;
            width:100%;
            flex-direction:column;
            > div:nth-child(1){
                display:flex;
                flex-direction:column;
                >div{
                    flex-direction:column;
                }
                h4{
                    min-width:100%;
                    width:100%;
                    max-width:100px;
                    font-size:14px;
                    margin-bottom:5px;
                }
                p{
                    font-size:12px;
                    margin-bottom:3px;
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
                    padding:5px;
                    width:35px;
                    height:35px;
                    input{
                        font-size:14px;
                        text-align:center;
                        padding:0;
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