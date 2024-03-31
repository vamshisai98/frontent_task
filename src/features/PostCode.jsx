import React from 'react';
import { useField } from 'formik';
import { Grid, TextField, Box } from '@mui/material';

const PostCode = (...props) => {
    const [field, meta] = useField('pCode');
    const error = meta.touched && meta.error;

    return (
        <Grid container>
            <Grid item xs={8}>
                <TextField
                    {...field}
                    {...props}
                    placeholder="Post Code"
                    error={Boolean(error)}
                    fullWidth
                    helperText={error}
                />
            </Grid>
            <Grid item xs={4}>
                <Box className="AddForm--post-code" sx={{ position: 'relative', marginLeft: 'auto', maxHeight: '1.2rem' }}>
                    Find Address
                </Box>
            </Grid>


        </Grid>

    );
};

export default PostCode;
