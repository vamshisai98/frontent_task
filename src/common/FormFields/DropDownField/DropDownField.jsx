import React from 'react';
import { useField } from 'formik';
import { Select, MenuItem, Typography, Box } from '@mui/material';

const DropDownField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <Box>
      <Typography variant="subtitle1">{label}</Typography>
      <Select
        {...field}
        {...props}
        variant="outlined"
        error={Boolean(error)}
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <Typography variant="subtitle2" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default DropDownField;
