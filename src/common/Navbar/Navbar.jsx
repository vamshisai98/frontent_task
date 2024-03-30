import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { Grid, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, ListItemIcon } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.scss';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobileView = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  return (
    <Grid container alignItems="center" className="Navbar--container">
      <Grid item xs={2}>
        <Logo />
      </Grid>
      {!isMobileView && (
        <>

          <Grid item xs={7} display="flex" justifyContent="center" className="Navbar--links">
            <Box p={4}>Home</Box>
            <Box p={4}>FAQ</Box>
            <Box p={4}>Events</Box>
          </Grid>
          <Grid item xs={3} display="flex" justifyContent="flex-end" className="Navbar--links">
            <Box p={2}>
              <ShoppingCartOutlinedIcon />
            </Box>
            <Box p={2}>
              <LogoutOutlinedIcon />
            </Box>
          </Grid>
        </>
      )}
      {isMobileView && (
        <Grid item xs display='flex' justifyContent={'flex-end'}>
          <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Grid>
      )}

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {[
            { text: 'Home' },
            { text: 'FAQ' },
            { text: 'Events' },
            { icon: <ShoppingCartOutlinedIcon /> },
            { icon: <LogoutOutlinedIcon /> }
          ].map((item, index) => (
            <>
            <ListItem button key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
            {item.icon &&
              <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
            }
            </>
          ))}
        </List>
      </Drawer>
    </Grid>
  );
};

export default Navbar;
