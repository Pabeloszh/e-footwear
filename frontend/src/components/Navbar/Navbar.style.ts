import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledNavbar = styled(AppBar)`
    background-color: #170312 !important;
    z-index: 1001 !important;
    .MuiToolbar-root{
        justify-content:space-between;
        .navigation{
            display:flex;
            .active{
                color: #F4511E;
            }
            h6{
                color:#fff;
                letter-spacing:1px;
                font-family: 'Faster One', cursive;
                margin-right:20px;
                span{
                    color: #F4511E;
                }
            }
        }
        .auth{
            display:flex;
            align-items:center;
            position:relative;
            button{
                margin: 0 6px;
            }
            .signup{
                background-color: #F4511E;
            }
            > span:first-child{
                position:absolute;
                background-color: #170312;
                border-radius:50%;
                width:15px;
                height:15px;
                text-align:center;
                font-size:12px;
                font-family: "Roboto","Helvetica","Arial",sans-serif;
                padding:1px;
                top:12.5px;
                left:32.5px;
                cursor: pointer;
            }
            svg{
                cursor: pointer;
                padding:15px;
                width:60px;
                color:#fff;
                margin-right: 15px;
                height:64px;
                background-color:#F4511E;
            }
        }
        .menu-icon, .logo-mobile{
            display:none;
        }
        .menu-icon{
            color:#F4511E;
        }
        .logo-mobile{
            color:#fff;
            letter-spacing:1px;
            font-family: 'Faster One', cursive;
            margin-right:20px;
            span{
                color: #F4511E;
            }
        }
    }

    @media only screen and (max-width: 1024px){
        .MuiToolbar-root{
            .navigation, .auth{
                display:none;
            }
            .menu-icon, .logo-mobile{
                display:block;
            }
        }
    }
`;