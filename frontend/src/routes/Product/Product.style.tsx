import styled from "styled-components";

interface Props{
    comments: boolean
}

export const StyledProduct = styled.div<Props>`
    padding: 125px 35px 75px 35px;
    display:flex;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    .photos{
        width:50%;
        height:450px;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
            margin-bottom:15px;
        }
        div{
            display:grid;
            grid-template-columns: repeat(3, calc(33.3% - 10px));
            gap:15px;
            img{
                width:100%;
            }
        }
    }
    .desc{
        padding: 15px 35px;
        width:50%;
        p{
            /* margin-bottom:5px; */
        }
        h2{
            font-size:32px;
            margin-bottom:25px;
        }
        .color{
            margin-bottom: 25px;
            display:grid;
            grid-template-columns: repeat(6, 70px);
            grid-template-rows: repeat(auto-fill, 70px);
            gap:15px;
            img{
                cursor:pointer;
                width:100%;
                height:100%;
                object-fit: cover;
                border-radius:5px;
                border:1px solid #170312;
            }
            .active{
                border:2px solid #F4511E;
            }
        }
        > h3{
            margin-bottom:10px
        }
        .size{
            display:grid;
            grid-template-columns: repeat(5, auto);
            gap:4px;
            margin-bottom:30px;
            p{
                cursor:pointer;
                text-align:center;
                border:1px solid #170312;
                margin:0;
                padding:5px;
                border-radius:2px;
            }
            p:hover{
                border:1px solid #F4511E;
                color:#fff;
                background-color:#F4511E;
            }
        }
        .actions{
            display:flex;
            flex-direction:column;
            .MuiButtonBase-root:first-child{
                background-color: #F4511E;
                margin-bottom:10px;
            }
            .MuiButtonBase-root:last-child{
                background-color: #170312;
            }
        }
        .info{
            border-top:1px solid #170312;
            padding:25px 0px;
            line-height:1.4em;
        }
        .rating{
            padding:25px 0px;
            border-top:1px solid #170312;
            border-bottom:1px solid #170312;
            .title{
                display:flex;
                justify-content:space-between;
                align-items:center;
                .MuiSvgIcon-root:last-child{
                    transition: all 250ms ease-in-out;
                    transform-origin: center;
                    transform: rotate(${props=>props.comments ? '180deg' : '0deg'});
                }
            }
            .comments{
                transition: all 500ms ease-in-out;
                max-height:${props=>props.comments ? '1000px' : 0};
                opacity:${props=>props.comments ? 1 : 0};
                visibility:${props=>props.comments ? 'visible' : 'hidden'};
                padding-top:${props=>props.comments ? '25px' : 0};;
                > div{
                    padding:15px;
                    border:1px solid #170312;
                    border-radius:5px;
                    > div {
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-bottom:10px;
                    }
                }
            }
            /* border-radius:5px; */
            /* h3{
                margin-right:20px;
            } */
        }
    }
    @media only screen and (max-width: 1024px){
        flex-direction:column;
        padding: 75px 15px 25px 15px;

        .photos, .desc{
            width:100%;
        }
        .photos{
            height:450px;
            div{
                display:none;
            }
        }
        .desc{
            .rating{
                .comments{
                    >div{
                        >div{
                            flex-direction:column-reverse;
                            align-items:flex-start;
                            p{
                                margin-bottom:10px;   
                            }
                            p:last-child{
                                margin-bottom:5px;
                            }
                        }
                    }
                }
            }
        }
    }
`;