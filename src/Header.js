import React from 'react'
import './Header.css';

const Header = () => {
  const date = new Date().toDateString();
  return (
    <>
      <header className="App-header">
      <div className='title'>
      <h4>My personal page</h4>
    </div>
        <div className='name'> ADRIAN CAMPAN</div>
        {/* <div>{date}</div> */}
      </header>
    </>
  )
}

export default Header