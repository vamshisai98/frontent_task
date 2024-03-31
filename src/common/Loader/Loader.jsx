import React from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Loader = ({loading}) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
      }}
    >
      <Grid item sx={{background:'white', borderRadius:'0.5rem', width:'10%'}} p={2} textAlign='center' >
        {loading ? (<>
        <CircularProgress sx={{color:"#F39200"}} size={60} />
        <Typography variant="body1" color="textPrimary" align="center" mt={2}>
          Loading...
        </Typography>
        </>):
        <>
        <CheckCircleIcon sx={{color:'orange',height:75,width:75}}/>
        <Typography variant="body1" color="textPrimary" align="center" mt={2}>
          Added
        </Typography>
        </>

        }
      </Grid>
    </Grid>
  );
};

export default Loader;
