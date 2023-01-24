import React,{useState} from 'react';
import './App.css';
import Login from './components/Login';
import DashboardMain from './layouts/DashboardMain';


function App() {
  const [login, setlogin] = useState(false);
  return (
      <div>
        {login? <DashboardMain/> : <Login setlog={setlogin} /> }
      </div>
  );
}

export default App;
