import briefcaseIcon from './img/icons/briefcase-icon.png';
import userIcon from './img/icons/user-icon.png'
import dropdownIcon from './img/icons/down-arrow-icon.png'
import './App.css';
import { useState } from 'react';


function App() {

  return (
    <>
      <div className="ultrawide-container">
        <div className='header'>
          <div className='logo'>
            <img src={briefcaseIcon} alt='Briefcase Logo'/>
            <h1>Resumify</h1>
          </div>
          <div className='user-tab'>
            <p>John Doe</p>
            <img className='user-icon' src={userIcon} alt='User Profile Icon'/>
            <img className='dropdown-icon' src={dropdownIcon} alt='More' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
