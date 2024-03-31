import AddIcon from '@mui/icons-material/Add';
import * as Yup from 'yup';

export const AVATARS = [
    { alt: 'Add', icon: <AddIcon />, color: 'orange' },
    { alt: 'Remy Sharp', src: '/static/images/avatar/1.jpg' ,color: 'pink'},
    { alt: 'Travis Howard', src: '/static/images/avatar/2.jpg' ,color: 'lightBlue'}
  ];

export const SKIN_COLOR_TONES = ['#F2D0B4', '#F5C6A4', '#EFC9B6', '#D3996E', '#BC7657', '#9E5E47', '#814539'];


export const validationSchema =  Yup.object({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.date().required('Dob is required'),
    address: Yup.string().required('Address is required'),
    pCode: Yup.string().required('Postal Code is required'),
    sAddress:Yup.string().required('Street Address is required')
  });


export const INITIAL_VALUES = { name: '',gender:'male',firstAidInfo:'',dob:null,address:'',pCode:'',sAddress:'' }
export const COLOR_TONES = ['#4FC3F7', '#00CED1', '#87CEEB', '#A6C9E2', '#FF69B4', '#F8BBD0', '#F8BBD0'];