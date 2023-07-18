import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} limit={2} />
      <Dashboard/>
    </>
  );
}

export default App;
