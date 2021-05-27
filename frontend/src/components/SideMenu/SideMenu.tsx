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
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom'

export const SideMenu: React.FC<SideMenuProps> = ({open, setOpen, loginWindow, toggleLoginWindow, registerWindow, toggleRegisterWindow}) => {
    const history = useHistory();
    const location = useLocation();


    const redirect = (path: string) => {
        history.push(`/${path}`);
    }

    const goTo = (path: string) => {
        redirect(path);
        setOpen(false);
    }

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
                    <ListItem button onClick={() => goTo(``)} className={'/' === location.pathname ? "active" : ""}>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    {['Man', 'Woman', 'Kids', 'Sport', 'Sales'].map((text) => (
                        <ListItem button key={text} onClick={() => goTo(`shop/${text.toLowerCase()}`)} className={`/shop/${text.toLowerCase()}` === location.pathname ? "active" : ""}>
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
                        <ListItemText onClick={() => goTo('cart')}><ShoppingCartIcon/> Shopping Cart</ListItemText>
                    </ListItem>
                </List>
            </StyledSideMenu>
            <Backdrop open={open} onClick={()=>{setOpen(false)}} style={{zIndex: 5, backdropFilter: 'blur(2px)'}}>
            </Backdrop>
        </>
    )
}
