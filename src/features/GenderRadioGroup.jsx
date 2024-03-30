import React from 'react';
import { RadioGroup, FormControlLabel, Radio, Typography, Box } from '@mui/material';

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
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </Box>
  );
};

export default GenderRadioGroup;
