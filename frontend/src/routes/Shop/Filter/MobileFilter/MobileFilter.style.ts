import styled from "styled-components";
import { Drawer } from '@material-ui/core'

export const StyledFilter = styled.div`
    display:none;
    @media only screen and (max-width: 1024px){
        width:100%;
        top: 64px;
        display:block;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        .filter-nav{
            background-color:white;
            height:57px;
            margin-bottom:25px;
            .sticky-nav{
                width:100%;
                background-color:white;
                padding: 15px 25px;
                display:flex;
                justify-content: space-between;
                align-items: center;
            }
            .sticky {
                position: fixed;
                z-index: 1001;
                top: 64px;
                width: 100%;
            }
        }
        .MuiPaper-root{
            
        }
    }
    @media only screen and (max-width: 600px){
        .filter-nav{
            .sticky {
                top: 56px;
            }
        }
    }
`;

export const StyledDrawer = styled(Drawer)`
.MuiDrawer-paper{
    padding: 55px 10px 25px;
    > .MuiSvgIcon-root{
        width: 35px;
        height:35px;
        color:#F4511E;
        position:fixed;
        top:10px;
        right:10px;
    }
    > div:not(:last-child){
    border-bottom: 1px #170312 solid;
    }
    > div{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        padding: 25px 10px;
        h2{
            font-size:20px;
            margin-bottom:15px;
        }
    }

}
`