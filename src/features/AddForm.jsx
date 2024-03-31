import React from 'react'
import { Formik, Form, Field } from 'formik';

import { Grid, Box, Avatar, Stack, Link,Button } from '@mui/material';
import './AddForm.scss'
import { COLOR_TONES, AVATARS, validationSchema, INITIAL_VALUES, SKIN_COLOR_TONES } from './Constants';
import InputField from '../common/FormFields/InputField/InputField';
import GenderRadioGroup from './GenderRadioGroup';
import MyDateTimePicker from '../common/FormFields/DateTimeField/DateTimePicker';
import DropDownField from '../common/FormFields/DropDownField/DropDownField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PostCode from './PostCode';


const AddForm = () => {
  const countries = [
    { value: 'India', label: 'India' },
    { value: 'UK', label: 'United Kingdom' }
  ];

  const addresses = [
    { value: '123 Main St, Bangalore, Karnataka, India', label: '123 Main St, Bangalore, Karnataka, India' },
    { value: '456 Elm St, London, England, UK', label: '456 Elm St, London, England, UK' },
    { value: '789 Oak St, Manchester, England, UK', label: '789 Oak St, Manchester, England, UK' }
  ];

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
            {SKIN_COLOR_TONES.map((color, index) => (
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
                  <InputField label="First Aid Information" name="firstAidInfo" placeholder='Allergies?' />
                </Grid>
                <Grid item xs={12} sm={6} className='AddForm--form' display={'flex'} alignItems='end'>
                  <MyDateTimePicker name="dob" label="DOB" />
                </Grid>
              </Grid>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={6} className='AddForm--form' >
                  <DropDownField options={countries} label="Address Details" name="address" />
                </Grid>
                <Grid item xs={12} sm={6} className='AddForm--form' display={'flex'} alignItems={'end'} >
                  <PostCode name='pCode' />
                </Grid>
              </Grid>

              <Grid container my={1}>
                <Grid item xs={12} sm={12} className='AddForm--form' pb={2}>
                  <DropDownField options={addresses} label="" name="sAddress" placeholder='Select Address' />
                </Grid>
                <Link href="#" underline="always" color="#000000" >
                  Enter address manually
                </Link>
              </Grid>
              <Grid container>
              <Grid display="flex"  alignItems="center" flexWrap={'wrap'}>
                {COLOR_TONES.map((color, index) => (
                  <Grid  key={index} sx={{ width: 40, height: 40, bgcolor: color, marginRight: 2, marginBottom:2, borderRadius: '50%', }} />
                ))}
              </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth type="submit" p={1} disableElevation sx={{borderRadius:'32px', textTransform:'capitalize'}}>Add</Button>
                  <Button variant='text' fullWidth type="submit" my={1} p={1} disableElevation sx={{borderRadius:'32px', textTransform:'capitalize', color:'black'}}><ArrowBackIcon/> Back</Button>
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