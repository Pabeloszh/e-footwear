import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';

export const StyledSideMenu = styled(Drawer)`
    z-index: 1002 !important;
    .MuiDrawer-paper{
        background-color: #f6f6f6 ;
        width: 225px !important;
        .MuiIconButton-label{
            .MuiSvgIcon-root{
            color:#F4511E !important;
        }
        }
        .MuiSvgIcon-root{
            color:#fff !important;
            margin-bottom:-6px;
        }
        .cart{
            position:fixed;
            bottom:0;
            background-color:#F4511E;
            color:#fff;
        }
    }
`;