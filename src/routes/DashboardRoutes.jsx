import { Navigate } from 'react-router-dom';
import AddForm from '../features/AddForm';


const DASHBOARD_ROUTES = [
  {
    path: '',
    element: <Navigate to="home" />,
  },
  {
    path: 'home',
    element: <AddForm />,
  },
];

export default DASHBOARD_ROUTES;
