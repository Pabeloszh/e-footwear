import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const StyledNavbar = styled(AppBar)`
    background-color: #f4511e !important;
    .MuiToolbar-root{
        justify-content:space-between;
        .navigation{
            display:flex;
        }
        .auth{
            svg{
                margin-bottom: -6px;
                margin-left: 8px;
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