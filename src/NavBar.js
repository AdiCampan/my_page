import React from 'react';
import './NavBar.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  // const navClass = (isActive) => {
  //   return isActive ? "active" : "";
  // }
  return (
    <><BrowserRouter>
      <Button as={NavLink}  to='/' variant="primary" >Home</Button>
     {/* <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes> */}
    </BrowserRouter>
    </>
  )
}

export default Navigation;