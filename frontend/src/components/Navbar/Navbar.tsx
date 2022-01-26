import React, { useEffect } from 'react'
import { SideMenu } from "./SideMenu"
import { StyledNavbar } from "./Navbar.style"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../state/index"
import axios from 'axios';
import { Badge } from '@material-ui/core';

export const Navbar:React.FC = () => {
    const cart = useSelector((state : RootState) => state.cart);
    const authToken = useSelector((state : RootState) => state.auth);
    const user = useSelector((state : RootState | null) => state?.user);

    const dispatch = useDispatch();
    const { logout, setUser, setLoginWindow, setRegisterWindow} = bindActionCreators(actionCreators, dispatch);

    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const history = useHistory();

    function redirect(path: string) {
        history.push(`/${path}`);
        setOpen(false);
    }

    useEffect(() => {
        authToken && axios.get('https://efootwear.herokuapp.com/api/users/edit/', {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }).then(({data}) => setUser(data));
    }, [authToken])
    
    return (
        <>
            <StyledNavbar position="fixed">
                <Toolbar>
                    <div className="navigation">
                        <Typography variant="h6">
                            <span>e</span>FootWear
                        </Typography>
                        <Button color="inherit" 
                            className={'/' === location.pathname ? "active" : ""} 
                            onClick={() => history.push('')}
                        >
                            Home
                        </Button>
                        {['Man', 'Woman', 'Kids', 'Sport', 'Sales'].map((text) => (
                            <Button 
                                key={text}
                                color="inherit" 
                                onClick={() => redirect(`shop/${text.toLowerCase()}?order=date_added`)} 
                                className={`/shop/${text.toLowerCase()}` === location.pathname ? "active" : ""}>
                                {text}
                            </Button>
                        ))}
                    </div>
                    <div className="auth">
                        <div className="cart-icon" onClick={() => history.push('/cart')}>
                            <Badge badgeContent={cart?.length} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                        </div>
                        {!authToken 
                            ? <>
                                <Button 
                                    variant="outlined" 
                                    color="inherit" 
                                    onClick={setLoginWindow}>
                                    Sign In
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="inherit" 
                                    className="signup" 
                                    onClick={setRegisterWindow}>
                                    Sign Up
                                </Button>
                            </> 
                            : <>
                                <Button 
                                    color="inherit" 
                                    onClick={() => redirect(`user`)} 
                                    className={`/user}` === location.pathname ? "active" : ""}>
                                    {user?.email}
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="inherit" 
                                    className="signup" 
                                    onClick={()=>logout()}>
                                    Log out
                                </Button>
                            </>
                        }
                        
                    </div>
                    <Typography 
                        className="logo-mobile" 
                        variant="h6"
                    >
                        <span>e</span>FootWear
                    </Typography>
                    <IconButton 
                        className="menu-icon" 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={()=>setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </StyledNavbar>
            <SideMenu 
                open={open} 
                setOpen={setOpen}
            />
      </>
    )
}

