import React from 'react';
import { useField } from 'formik';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography, Box } from '@mui/material';
import dayjs from 'dayjs';

import './DateTimePicker.scss';

const DateTimePicker = ({ name, label, ...rest }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;


  const handleChange = (value) => {
    const formattedDate = dayjs(field.value.$d).format('MM/DD/YYYY');
    setValue(formattedDate);
  };

  // Convert the date value to a Day.js object


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display={'flex'} flexDirection='column' sx={{ width: '100%' }}>
        <DatePicker
          {...field}
          {...rest}
          label={label}
          value={dayjs(field.value || null)}
          onChange={handleChange}
        />
        {meta.touched && meta.error && (
          <Box>
            <Typography variant="subtitle2" color="error" position={'absolute'}>
              {meta.error}
            </Typography>
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
