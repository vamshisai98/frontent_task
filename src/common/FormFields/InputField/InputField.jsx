import React from 'react';
import { useField } from 'formik';
import { TextField, Typography, Box } from '@mui/material';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <Box>
      <Typography variant="subtitle1">{label}</Typography>
      <TextField
        {...field}
        {...props}
        fullWidth
        variant="outlined"
        error={Boolean(error)}
        helperText={error}
        sx={{ mt: 1 }}
      />
    </Box>
  );
};

export default InputField;
