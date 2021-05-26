import styled from 'styled-components'

export const StyledCart = styled.div`
    padding: 50px 0;
    padding-top:100px;
    height:100vh;
    > div{
        width:1020px;
        margin:auto;
        display:flex;
        > div{
            padding: 20px 35px;
            background-color:#fff;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            hr{
                height:1px;
                background-color:#1703120f;
                border:none;
                border-bottom: 1px solid #1703120f;
                margin: 20px 0;
            }
            h2{
                font-size: 24px;
                font-family: 'Work Sans',sans-serif;
                margin-bottom:15px;
            }
        }
        .products{
            width:720px;
            margin-right:50px;
            > p{
                font-size:12px;
                color:#170312;
                span{
                    text-decoration:underline;  
                }
            }
        }
        .summary{
            width:250px;
            height:275px;
            >div{
                display:flex;
                justify-content:space-between;
                align-items:center;
                p{
                    font-size:16px;
                }
            }
            div:nth-child(2){
                margin-bottom:10px;
            }
            .MuiButtonBase-root{
                background-color:#F4511E;
            }
        }
    }
`;