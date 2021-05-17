import styled from 'styled-components';

export const StyledSales = styled.div`
    background-color: #f4511e;
    padding: 80px 5% 80px 0;
    .title{
        margin-bottom: 30px;
        h2{
            font-size:36px;
            font-family: 'Work Sans', sans-serif;
            color:#fff;
            letter-spacing:1px;
        }
    }
    .container{
        display:flex;
        .photo{
            transition: all 800ms ease-out;; 
            transform-origin: left;
            transform: scaleX(0);
            width:50%;
            height:400px;
            position:relative;
            img{
                height:100%;
                width:100%;
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
                font-weight:800;
                color:#fff;
                position:absolute;
                font-size:96px;
                top:50%;
                right:5%;
                transform:translateY(-50%);
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                letter-spacing:8px;

            }
        }
        
        .desc{
            transition: all 800ms ease-in;
            transform: translateY(-15px);
            opacity:0;
            height:383px;
            width:50%;
            padding:0 35px;
            color:#fff;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            overflow: hidden;


            h6{
                font-family: 'Work Sans', sans-serif;
                span{
                    font-weight:600;
                }
                font-size: 36px;
                margin-bottom:25px;
            }
            p{
                font-size:24px;
                letter-spacing:1px;
                line-height: 1.6em;
                display: -webkit-box;
                -webkit-line-clamp: 7;
                -webkit-box-orient: vertical;  
                span{
                    font-weight:600;
                }
                a, a:visited, a:hover{
                    color:#fff;
                }
            }
        }
        .animated{
            transform-origin: left;
            transform: scaleX(1) translateY(0);
            opacity:1;
        }
    }
    @media only screen and (max-width: 1250px){
        .title{
            margin-bottom: 30px;
            h2{
                font-size:36px;
                font-family: 'Work Sans', sans-serif;
                color:#fff;
                letter-spacing:1px;
            }
        }
        .container{
            display:flex;
            flex-direction:column;
            .photo{
                width:100%;
                height:300px;
                margin-bottom:35px;
                h2{
                    font-size:64px;
                    letter-spacing:6px;

                }
            }
            .desc{
                height:auto;
                width:100%;
                padding:0 35px;
                color:#fff;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                overflow: hidden;


                h6{
                    font-family: 'Work Sans', sans-serif;
                    font-size: 24px;
                    margin-bottom:25px;
                    span{
                        font-weight:600;
                    }
                }
                p{
                    font-size:14px;
                    letter-spacing:1px;
                    line-height: 1.6em;
                    display: block;
                    -webkit-line-clamp: 0;
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