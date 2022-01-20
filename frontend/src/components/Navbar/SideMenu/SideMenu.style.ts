import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';

export const StyledSideMenu = styled(Drawer)`
    z-index: 1002 !important;
    .MuiDrawer-paper{
        width: 225px !important;
        background-color: #f6f6f6;
        .MuiIconButton-label{
            .MuiSvgIcon-root{
                color:#F4511E !important;
            }
        }
        .MuiSvgIcon-root{
            margin-bottom:-6px;
            color:#fff !important;
        }
        .cart{
            position:fixed;
            bottom:0;
            background-color:#F4511E;
            color:#fff;
        }
        .active{
            color: #F4511E;
        }
    }
`;