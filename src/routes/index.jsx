import DashboardLayout from '../layout/DashboardLayout';
import DASHBOARD_ROUTES from './DashboardRoutes';

const Routes = () => [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [...DASHBOARD_ROUTES],
  },
];

export default Routes;
