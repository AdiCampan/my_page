import React from 'react';
import './NavBar.css';
import {
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  // const navClass = (isActive) => {
  //   return isActive ? "active" : "";
  // }
  return (
    <><BrowserRouter>
      <Button as={NavLink} to='/' variant="primary" >Home</Button>
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes> */}
    </BrowserRouter>
    </>
  )
}

export default Navigation;