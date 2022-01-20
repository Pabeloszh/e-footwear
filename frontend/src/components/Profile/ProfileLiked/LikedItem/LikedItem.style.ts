import styled from "styled-components";

export const StyledItem = styled.div`
    display:flex;
    img{
        height:150px;
    }
    .info{
        display:flex;
        justify-content:space-between;
        width:100%;
        padding: 5px 25px;
        > div:nth-child(1){
            h4{
                margin-bottom:5px;
                font-size:18px;
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
        > h4{
            margin-left:45px;
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
                    margin-bottom:5px;
                    font-size:14px;
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
            width:100%;
            min-width:85px;
            max-width:100px;
            height:125px;
            object-fit: cover; 
        }
        .info{
            flex-direction:column;
            min-width:100px;
            padding:5px 0 5px 15px;
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
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
            h4{
                margin:0;
            }
        }
    }
`;