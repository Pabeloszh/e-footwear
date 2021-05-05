import React from 'react';  
import {StyledSideMenu} from "./SideMenu.style"
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Backdrop from '@material-ui/core/Backdrop';

interface Props {
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void;

}

const SideMenu: React.FC<Props> = ({open, setOpen}) => {
    return (
        <>
        <StyledSideMenu
            variant="persistent"
            anchor="right"
            open={open}>
                <div>
                    <IconButton onClick={()=>{setOpen(false)}}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider/>
                <List>
                {['Man', 'Woman', 'Kids', 'Sport', 'Sales'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider/>
                <List>
                {['Sign In', 'Sign Up'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </StyledSideMenu>
            <Backdrop open={open} onClick={()=>{setOpen(false)}} style={{zIndex: 5, backdropFilter: 'blur(2px)'}}>
            </Backdrop>
            </>
    )
}

export default SideMenu
