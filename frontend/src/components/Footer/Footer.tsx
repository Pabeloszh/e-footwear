import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { StyledFooter } from "./Footer.style";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

export const Footer: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const { setLoginWindow, setRegisterWindow} = bindActionCreators(actionCreators, dispatch);

    function redirect(path: string) {
        history.push(`/${path}`);
        window.scrollTo(0,0)
    }

    return (
        <StyledFooter>
            <div className="footer-desc">
                <div className="container">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ex commodi? Dolor exercitationem pariatur esse, ipsa fugiat vel voluptate ratione iste sunt atque porro. Error quae repudiandae vel quos magni!
                    Expedita, excepturi voluptas qui itaque eligendi asperiores veritatis magnam provident cumque quo pariatur ea molestias vel delectus saepe blanditiis ex iste consectetur eos deserunt possimus temporibus! Nihil reiciendis dignissimos velit.</p>
                </div>
                <div className="container">
                    <div>
                        <h3>Links</h3>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Home" onClick={() => redirect('')}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Man" onClick={() => redirect('shop/man?order=date_added')}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Woman" onClick={() => redirect('shop/woman?order=date_added')}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Kids" onClick={() => redirect('shop/kids?order=date_added')}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Sport" onClick={() => redirect('shop/sport?order=date_added')}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Sales" onClick={() => redirect('shop/sales?order=date_added')}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Order" onClick={() => redirect('order-detail')}/>
                            </ListItem>
                        </List>
                    </div>
                    <div>
                        <h3>User</h3>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Login" onClick={() => setLoginWindow()}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Sign Up" onClick={() => setRegisterWindow()}/>
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Cart" onClick={() => redirect('cart')}/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="footer-end">
                <p>Copyright &copy; 2021 All Rights Reserved by eFootwear.</p>
                <div>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    {/* Yeah, I definitely didn't want to change even such a small thing as this icon to <a href=""></a>, because the backend guy has to present it tomorrow at the university */}
                    <GitHubIcon onClick={() => {window.location.href = 'https://github.com/Pabeloszh/e-footwear'}}/>
                </div>
            </div>
        </StyledFooter>
    )
}

