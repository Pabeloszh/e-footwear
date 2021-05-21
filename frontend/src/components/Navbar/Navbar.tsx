import React from 'react'
import { NavbarProps } from "./Navbar.interfaces";
import { SideMenu } from "../SideMenu/"
import { StyledNavbar } from "./Navbar.style"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router';

export const Navbar: React.FC<NavbarProps> = ({authWindow, toggleAuthWindow}) => {
    const [open, setOpen] = React.useState(false);

    const history = useHistory();

    const redirect = (path: string) => {
        history.push(`/${path}`);
    }
    
    return (
        <>
            <StyledNavbar position="fixed">
                <Toolbar>
                    <div className="navigation">
                        <Typography variant="h6">
                            <span>e</span>FootWear
                        </Typography>
                        <Button style={{color: '#F4511E'}}>Home</Button>
                        <Button color="inherit" onClick={() => redirect('shop')}>Man</Button>
                        <Button color="inherit">Woman</Button>
                        <Button color="inherit">Kids</Button>
                        <Button color="inherit">Sport</Button>
                        <Button color="inherit">Sales</Button>
                    </div>
                    <div className="auth">
                        <ShoppingCartIcon />
                        <Button variant="outlined" color="inherit" onClick={()=>toggleAuthWindow(true)}>Sign In</Button>
                        <Button variant="contained" color="inherit" className="signup">Sign Up</Button>
                    </div>
                    <Typography className="logo-mobile" variant="h6">
                            <span>e</span>FootWear
                        </Typography>
                    <IconButton className="menu-icon" edge="start" color="inherit" aria-label="menu" onClick={()=>setOpen(true)}>
                            <MenuIcon />
                    </IconButton>
                </Toolbar>
            </StyledNavbar>
            <SideMenu open={open} setOpen={setOpen}  authWindow={authWindow} toggleAuthWindow={toggleAuthWindow}/>
      </>
    )
}

