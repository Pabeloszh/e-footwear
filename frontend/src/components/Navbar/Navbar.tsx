import React from 'react'
import { StyledNavbar } from "./Navbar.style"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';

export const Navbar: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    return (
        <>
            <StyledNavbar position="static">
                <Toolbar>
                    <div className="navigation">
                        <Typography variant="h6">
                            E-FootWear
                        </Typography>
                        <Button color="inherit">Man</Button>
                        <Button color="inherit">Woman</Button>
                        <Button color="inherit">Kids</Button>
                        <Button color="inherit">Sport</Button>
                        <Button color="inherit">Sales</Button>
                    </div>
                    <div className="auth">
                        <Button color="inherit">Sign In</Button>
                        <Button color="inherit">Sign Up</Button>
                        <ShoppingCartIcon />
                    </div>
                    <Typography className="logo-mobile" variant="h6">
                            E-FootWear
                        </Typography>
                    <IconButton className="menu-icon" edge="start" color="inherit" aria-label="menu" onClick={()=>handleDrawerOpen()}>
                            <MenuIcon />
                    </IconButton>
                </Toolbar>
            </StyledNavbar>
            <Drawer
            variant="persistent"
            anchor="right"
            open={open}
        >
            <div>
            <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
            </IconButton>
            </div>
            
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Drawer>
      </>
    )
}

