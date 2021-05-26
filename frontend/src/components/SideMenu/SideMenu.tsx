import React from 'react';  
import { SideMenuProps } from "./SideMenu.interfaces";
import { StyledSideMenu } from "./SideMenu.style";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const SideMenu: React.FC<SideMenuProps> = ({open, setOpen, loginWindow, toggleLoginWindow, registerWindow, toggleRegisterWindow}) => {
    return (
        <>
            <StyledSideMenu
                variant="persistent"
                anchor="right"
                open={open}>
                <div>
                    <IconButton onClick={()=>{setOpen(false)}}>
                        <CloseIcon />
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
                    <ListItem button>
                        <ListItemText primary='Sign In' onClick={()=>toggleLoginWindow(true)}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary='Sign Up' onClick={()=>toggleRegisterWindow(true)}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem button className="cart">
                        <ListItemText><ShoppingCartIcon/> Shopping Cart</ListItemText>
                    </ListItem>
                </List>
            </StyledSideMenu>
            <Backdrop open={open} onClick={()=>{setOpen(false)}} style={{zIndex: 5, backdropFilter: 'blur(2px)'}}>
            </Backdrop>
        </>
    )
}
