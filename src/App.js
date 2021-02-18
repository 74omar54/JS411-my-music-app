import React, { useState } from 'react';
// import NavBar from './components/NavBar'
import LogIn from './components/Login'
import DashBoard from './components/DashBoard';


 function App () {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const [isOnline, setIsOnline] = useState(true)
   

  if (isLoggedIn) {
    return (
      <div className='App'>
        <DashBoard switchButton={setIsOnline} state={isOnline} />
      </div>

    )
  } else {
    return (
      <div className="App">
        {/* <NavBar/> */}
        <br/>
        <LogIn loginButton={setIsLoggedIn} />
      </div>
    )
  }
  
}

export default App;