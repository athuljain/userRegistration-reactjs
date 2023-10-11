
import './App.css';
import Register from './Component/Register';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { myContext } from "./Component/Context";
import { useState } from 'react';
import Login from './Component/Login';
import Home from './Component/Home';

function App() {

  const [user, setUser] = useState([]);

  const values={
    user, setUser
  }

  // console.log(user);


  return (
    <div className="App">
  
<BrowserRouter>
<myContext.Provider value={values}>
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </myContext.Provider>
</BrowserRouter>

    </div>
  );
}

export default App;
