import React,{useState} from 'react';
import './App.css';
import Login from './components/Login';
import DashboardMain from './layouts/DashboardMain';
import Signup from './components/Signup';


function App() {
  const [login, setlogin] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  return (
      <div className='font-sans'>
        {(() => {
          if(login === false){
            return(
              <div>
                {createAccount? <Signup setCreateAccount={ setCreateAccount }/> : <Login setlog={setlogin} setCreateAccount={setCreateAccount} /> }
              </div>
            )
          }
          else if(login === true){
            return(
              <div>
                <DashboardMain/>
              </div>
            )
          }
        })()}
        
      </div>
  );
}

export default App;
