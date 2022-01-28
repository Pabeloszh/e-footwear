import React from 'react';  
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import { actionCreators } from '../../../state';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { SideMenuProps } from "./SideMenu.interfaces";
import { StyledSideMenu } from "./SideMenu.style";

export const SideMenu: React.FC<SideMenuProps> = ({open, setOpen}) => {
    const authToken = useSelector((state : RootState) => state.auth);
    const user = useSelector((state : RootState | null) => state?.user);

    const dispatch = useDispatch();

    const { logout, setLoginWindow, setRegisterWindow} = bindActionCreators(actionCreators, dispatch);


    const history = useHistory();
    const location = useLocation();

    function redirect(path: string){
        window.scrollTo(0,0)
        history.push(`/${path}`);
        setOpen(false)
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
                    <ListItem 
                        button 
                        onClick={() => redirect('')}
                        className={'/' === location.pathname ? "active" : ""}
                    >
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    {['Man', 'Woman', 'Kids', 'Sport', 'Sales'].map((text) => (
                        <ListItem 
                            button 
                            key={text} 
                            onClick={() => redirect(`shop/${text.toLowerCase()}?order=date_added`)} 
                            className={`/shop/${text.toLowerCase()}` === location.pathname ? "active" : ""}
                        >
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {!authToken ?
                        <>
                            <ListItem button>
                                <ListItemText 
                                    primary='Sign In' 
                                    onClick={setLoginWindow}
                                />
                            </ListItem>
                            <ListItem button>
                                <ListItemText 
                                    primary='Sign Up' 
                                    onClick={setRegisterWindow}
                                />
                            </ListItem>
                        
                        </> :
                        <>
                            <ListItem 
                                button 
                                onClick={() => redirect('user')}
                                className={`/user` === location.pathname ? "active" : ""}
                            >
                                <ListItemText primary={user?.email} />
                            </ListItem>
                            <ListItem button>
                                <ListItemText 
                                    primary='Log out' 
                                    onClick={()=>logout()}
                                />
                            </ListItem>
                        </>
                    }
                </List>
                <List>
                    <ListItem button className="cart">
                        <ListItemText onClick={() => redirect('cart')}>
                            <ShoppingCartIcon/> Shopping Cart
                        </ListItemText>
                    </ListItem>
                </List>
            </StyledSideMenu>
            <Backdrop 
                open={open} 
                onClick={()=>{setOpen(false)}} 
                style={
                    {
                        zIndex: 5, 
                        backdropFilter: 'blur(2px)'
                    }
                }
            >
            </Backdrop>
        </>
    )
}
