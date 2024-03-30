import React from 'react'

import Logo from '../Logo/Logo';

import { Grid, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import './Navbar.scss';

const Navbar = () => {
  return (
    <Grid container alignItems={'center'}  className='Navbar--container'>
      <Grid item xs={2}>
        <Logo />
      </Grid>
      <Grid item xs={7} display='flex' justifyContent='center' className='Navbar--links'>
        <Box p={4}>Home</Box>
        <Box p={4}>FAQ</Box>
        <Box p={4}>Events</Box>
      </Grid>
      <Grid item xs={3} display='flex' justifyContent='flex-end' className='Navbar--links'>
      <Box p={2}><ShoppingCartOutlinedIcon/></Box>
      <Box p={2}><LogoutOutlinedIcon/></Box>
      </Grid>
    </Grid>
  )
}

export default Navbar