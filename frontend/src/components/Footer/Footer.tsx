import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {StyledFooter} from "./Footer.style";

export const Footer: React.FC = () => {
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
                                <KeyboardArrowRightIcon /><ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Man" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Woman" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Kids" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Sport" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Sales" />
                            </ListItem>
                        </List>
                    </div>
                    <div>
                        <h3>User</h3>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Login" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Sign Up" />
                            </ListItem>
                            <ListItem button>
                                <KeyboardArrowRightIcon /><ListItemText primary="Cart" />
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
                    <GitHubIcon/>
                </div>
            </div>
        </StyledFooter>
    )
}

