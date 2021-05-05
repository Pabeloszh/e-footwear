import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledNavbar = styled(AppBar)`
    background-color: #f4511e !important;
    z-index: 2 !important;
    .MuiToolbar-root{
        justify-content:space-between;
        .navigation{
            display:flex;
        }
        .auth{
            button{
                margin: 0 6px;
            }
            svg{
                margin-bottom: -8px;
                margin-left: 10px;
            }
        }
        .menu-icon, .logo-mobile{
            display:none;
        }
    }

    @media only screen and (max-width: 768px){
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