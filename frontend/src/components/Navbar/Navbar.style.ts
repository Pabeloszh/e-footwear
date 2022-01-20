import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledNavbar = styled(AppBar)`
    z-index: 1001 !important;
    background-color: #170312 !important;
    .MuiToolbar-root{
        justify-content:space-between;
        .navigation{
            display:flex;
            .active{
                color: #F4511E;
            }
            h6{
                margin-right:20px;
                color:#fff;
                letter-spacing:1px;
                font-family: 'Faster One', cursive;
                span{
                    color: #F4511E;
                }
            }
        }
        .auth{
            position:relative;
            display:flex;
            align-items:center;
            button{
                margin: 0 6px;
            }
            .signup{
                background-color: #F4511E;
            }
            .cart-icon{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right: 6px;
                width:60px;
                height:64px;
                padding:15px;
                background-color:#F4511E;
                cursor: pointer;
                .MuiBadge-colorPrimary{
                    background-color: #170312;
                }
                svg{
                    color:#fff;
                }
            }
        }
        .menu-icon, .logo-mobile{
            display:none;
        }
        .menu-icon{
            color:#F4511E;
        }
        .logo-mobile{
            margin-right:20px;
            letter-spacing:1px;
            font-family: 'Faster One', cursive;
            color:#fff;
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