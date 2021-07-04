import React, { FunctionComponent } from 'react';
import { AppBar, Link, Toolbar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../images/logo.png';

import { useHeaderStyles } from "./utils/styles";


const Header: FunctionComponent = () => {
    const { menuLink, logoWrapper, logo } = useHeaderStyles();

    return (
        <AppBar color="inherit" position='sticky'>
            <Toolbar>
                <div className={logoWrapper}>
                    <img src={Logo} alt="Logo" className={logo}/>
                </div>
                <Link component={RouterLink} to='/purchase' color="inherit" className={menuLink}>
                    Purchase
                </Link>
                <Link component={RouterLink} to='/orders' color="inherit" className={menuLink}>
                    My Orders
                </Link>
                <Link component={RouterLink} to='/sell' color="inherit" className={menuLink}>
                    Sell
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export { Header };
