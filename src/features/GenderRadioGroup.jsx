import React from 'react';
import { RadioGroup, FormControlLabel, Radio, Typography, Box, Grid } from '@mui/material';

import './GenderRadioGroup.scss'

const GenderRadioGroup = ({ value, onChange }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Gender</Typography>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={value}
        onChange={onChange}
        row
      >
        <Grid container spacing={3}>
          <Grid item xs={6} >
            <FormControlLabel value="male" control={<Radio sx={{ color: 'white !important' }}/>} label="Male" sx={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              width: '100%',
              background:'#50A7DA',
              padding:'7px',
              marginLeft:0,
              borderRadius:'4px',
              color:'white'
            }}
              labelPlacement="start" />
          </Grid>
          <Grid item xs={6}>

            <FormControlLabel value="female" control={<Radio sx={{ color: 'white !important' }} />} label="Female" sx={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              width: '100%',
              background: '#F8BBD0',
              padding:'7px',
              marginLeft:0,
              borderRadius:'4px',
              color:'white'
            }}
              labelPlacement="start" />
          </Grid>
        </Grid>
      </RadioGroup>
    </Box>
  );
};

export default GenderRadioGroup;
