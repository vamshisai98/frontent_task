import { useRoutes } from 'react-router-dom';
import Routes from './routes';

import './App.css';

const App = () => {
  const routing = useRoutes(Routes());
    return <div>{routing}</div>;
};

export default App;