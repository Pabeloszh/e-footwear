import styled from 'styled-components';

export const StyledSales = styled.div`
    padding: 80px 5% 80px 0;
    background-color: #f4511e;
    .title{
        margin-bottom: 30px;
        h2{
            font-size:36px;
            font-family: 'Work Sans', sans-serif;
            letter-spacing:1px;
            color:#fff;
        }
    }
    .container{
        display:flex;
        .photo{
            position:relative;
            transition: all 800ms ease-out;; 
            transform-origin: left;
            transform: scaleX(0);
            width:50%;
            height:400px;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }
            .overlay{
                position: absolute;
                top:0;
                right:0;
                bottom:0;
                left:0;
                background-color:#f4511e66;
            }
            h2{
                position:absolute;
                top:50%;
                right:5%;
                transform:translateY(-50%);
                font-weight:800;
                font-size:96px;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                letter-spacing:8px;
                color:#fff;

            }
        }
        
        .desc{
            opacity:0;
            overflow: hidden;
            transition: all 800ms ease-in;
            transform: translateY(-15px);
            width:50%;
            height:383px;
            padding:0 35px;
            color:#fff;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            h6{
                margin-bottom:25px;
                font-size: 36px;
                font-family: 'Work Sans', sans-serif;
                span{
                    font-weight:600;
                }
            }
            p{
                display: -webkit-box;
                -webkit-line-clamp: 7;
                -webkit-box-orient: vertical;  
                font-size:24px;
                letter-spacing:1px;
                line-height: 1.6em;
                span{
                    font-weight:600;
                }
                a, a:visited, a:hover{
                    color:#fff;
                }
            }
        }
        .animated{
            opacity:1;
            transform: scaleX(1) translateY(0);
            transform-origin: left;
        }
    }
    @media only screen and (max-width: 1250px){
        .title{
            margin-bottom: 30px;
            h2{
                font-size:36px;
                font-family: 'Work Sans', sans-serif;
                letter-spacing:1px;
                color:#fff;
            }
        }
        .container{
            display:flex;
            flex-direction:column;
            .photo{
                margin-bottom:35px;
                width:100%;
                height:300px;
                h2{
                    font-size:64px;
                    letter-spacing:6px;
                }
            }
            .desc{
                overflow: hidden;
                height:auto;
                width:100%;
                padding:0 35px;
                color:#fff;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                h6{
                    margin-bottom:25px;
                    font-family: 'Work Sans', sans-serif;
                    font-size: 24px;
                    span{
                        font-weight:600;
                    }
                }
                p{
                    display: block;
                    -webkit-line-clamp: 0;
                    font-size:14px;
                    letter-spacing:1px;
                    line-height: 1.6em;
                    span{
                        font-weight:600;
                    }
                    a, a:visited, a:hover{
                        color:#fff;
                    }
                }
            }
        }
    }
`