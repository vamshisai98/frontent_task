import React from 'react'
import { Formik, Form,Field } from 'formik';

import { Grid, Box, Avatar, Stack } from '@mui/material';
import './AddForm.scss'
import { COLOR_TONES, AVATARS, validationSchema, INITIAL_VALUES } from './Constants';
import InputField from '../common/FormFields/InputField/InputField';
import GenderRadioGroup from './GenderRadioGroup';
import MyDateTimePicker from './DateTimePicker';


const AddForm = () => {

  return (
    <Grid container>
      <Grid item xs={12} textAlign={'center'} className='AddForm__heading'> Add children/adult details </Grid>
      <Grid item xs={12} py={2} display='flex' justifyContent={'center'} >
        <Box className='AddForm__container'>
          <Box>Select an avatar or add a photo</Box>
          <Box py={2}> <Stack direction="row" spacing={2}>
            {AVATARS.map((avatar, index) => (
              <Avatar
                key={index}
                src={avatar.src}
                sx={{ bgcolor: avatar.color }}
              >
                {avatar.icon}
              </Avatar>
            ))}
          </Stack></Box>
          <Box display="flex" alignItems="center">
            {COLOR_TONES.map((color, index) => (
              <Box key={index} sx={{ width: 25, height: 25, bgcolor: color, marginRight: 2, borderRadius: '50%', }} />
            ))}
          </Box>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={6} className='AddForm--form' >
                  <InputField label="Name" name="name" />
                </Grid>
                <Grid item xs={12} sm={6} className='AddForm--form'>
                <Field name="gender">
                {({ field }) => <GenderRadioGroup {...field} />}
              </Field>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className='AddForm--form' >
                  <InputField label="First Aid Information" name="firstAidInfo" placeholder='Allergies?'/>
                </Grid>
                <Grid item xs={12} sm={6} className='AddForm--form' display={'flex'} alignItems='end'>
                <MyDateTimePicker name="dob" label="Select Date and Time" />
                </Grid>
              </Grid>


              <Grid container spacing={2}>
                <Grid item xs={6}  >
                <button type="submit">Submit</button>
                </Grid>

              </Grid>

            </Form>

          </Formik>

        </Box>
      </Grid>
    </Grid>
  )
}

export default AddForm