import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledNavbar = styled(AppBar)`
    background-color: #170312 !important;
    z-index: 1001 !important;
    .MuiToolbar-root{
        justify-content:space-between;
        .navigation{
            display:flex;
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
            button{
                margin: 0 6px;
            }
            .signup{
                background-color: #F4511E;
            }
            svg{
                color:#F4511E;
                margin-bottom: -8px;
                margin-right: 25px;
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