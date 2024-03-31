import { useRoutes } from 'react-router-dom';
import Routes from './routes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

import './App.css';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const App = () => {
  const routing = useRoutes(Routes());
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
       <div>{routing}</div>
    </LocalizationProvider>
  );

};

export default App;