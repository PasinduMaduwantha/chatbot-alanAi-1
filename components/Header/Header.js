import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon  from '@material-ui/icons/Search';

import useStyle from './styles'

const Header = () => {
    const classes = useStyle();
    return (
        // <h1>Header</h1>
        <AppBar position="static">
            {<Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Companion 
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.SearchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search…' classes={{root:classes.inputRoot, input:classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>}
        </AppBar>
    )
};
export default Header;