import React from 'react';  
import {StyledSideMenu} from "./SideMenu.style"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
                {['Sign In', 'Sign Up'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
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

export default SideMenu
