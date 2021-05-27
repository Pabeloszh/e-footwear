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
import { useLocation } from 'react-router-dom'

export const Navbar: React.FC<NavbarProps> = ({loginWindow, toggleLoginWindow, registerWindow, toggleRegisterWindow}) => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const history = useHistory();

    const redirect = (path: string) => {
        history.push(`/${path}`);
    }

    const goTo = (path: string) => {
        redirect(path);
        setOpen(false);
    }
    
    return (
        <>
            <StyledNavbar position="fixed">
                <Toolbar>
                    <div className="navigation">
                        <Typography variant="h6">
                            <span>e</span>FootWear
                        </Typography>
                        <Button color="inherit" className={'/' === location.pathname ? "active" : ""} onClick={() => redirect('')}>Home</Button>
                        {['Man', 'Woman', 'Kids', 'Sport', 'Sales'].map((text) => (
                            <Button color="inherit" onClick={() => goTo(`shop/${text.toLowerCase()}`)} className={`/shop/${text.toLowerCase()}` === location.pathname ? "active" : ""}>{text}</Button>
                        ))}
                    </div>
                    <div className="auth">
                        <span>2</span>
                        <ShoppingCartIcon onClick={() => redirect('cart')}/>
                        <Button variant="outlined" color="inherit" onClick={()=>toggleLoginWindow(true)}>Sign In</Button>
                        <Button variant="contained" color="inherit" className="signup" onClick={()=>toggleRegisterWindow(true)}>Sign Up</Button>
                    </div>
                    <Typography className="logo-mobile" variant="h6">
                            <span>e</span>FootWear
                        </Typography>
                    <IconButton className="menu-icon" edge="start" color="inherit" aria-label="menu" onClick={()=>setOpen(true)}>
                            <MenuIcon />
                    </IconButton>
                </Toolbar>
            </StyledNavbar>
            <SideMenu open={open} setOpen={setOpen}  loginWindow={loginWindow} toggleLoginWindow={toggleLoginWindow} registerWindow={registerWindow} toggleRegisterWindow={toggleRegisterWindow}/>
      </>
    )
}

