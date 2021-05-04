import React from 'react'
import { StyledNavbar } from "./Navbar.style"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Navbar: React.FC = () => {
    return (
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
                <IconButton className="menu-icon" edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                </IconButton>
            </Toolbar>
        </StyledNavbar>
    )
}

