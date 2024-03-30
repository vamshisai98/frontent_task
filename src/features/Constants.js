import AddIcon from '@mui/icons-material/Add';
import * as Yup from 'yup';

export const AVATARS = [
    { alt: 'Add', icon: <AddIcon />, color: 'orange' },
    { alt: 'Remy Sharp', src: '/static/images/avatar/1.jpg' ,color: 'pink'},
    { alt: 'Travis Howard', src: '/static/images/avatar/2.jpg' ,color: 'lightBlue'}
  ];

export const COLOR_TONES = ['#F2D0B4', '#F5C6A4', '#EFC9B6', '#D3996E', '#BC7657', '#9E5E47', '#814539'];


export const validationSchema =  Yup.object({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.string().required('DOB is required'),
  });


export const INITIAL_VALUES = { name: '',gender:'male',firstAidInfo:'',dob:'' }