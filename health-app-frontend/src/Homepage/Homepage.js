// import "./Homepage.css"
// import React from 'react'


// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function Homepage() {
//     //we use this for routing using the buttons
//     const navigate = useNavigate();

//     //handles the click 
//     function handleClick(input) {
//         navigate(input);
//       }


//  return (
//     <header className='App-header'>
//     <p>
//       Welcome to NeuroNurture, click a category to get started!
//     </p>
//     <Link
//       onClick={handleClick('Excercises')}
//     >
//       Rehabilitation Exercises
//     </Link>
//     <Link
//       onClick={handleClick('Evaluations')}
//       // button link need to be edited
//     >
//       Evaluate
//     </Link>
//     <Link
//       onClick={handleClick('StayConnected')}
//       // button link need to be edited
//     >
//       Stay Connected
//     </Link>
//     <Link
//       onClick={handleClick('Useful')}
//       // button link need to be edited
//     >
//       Useful Equiment & Applications
//     </Link>
//     </header>
//  );
// }

/* TESTING */

// Homepage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  // Use this for routing using the buttons
  const navigate = useNavigate();

  // Handles the click
  function handleClick(input) {
    navigate(input);
  }

  return (
    <div>
      <div className='Header-container'>
        <h1>Welcome to NeuroNurture, click a category to get started!</h1>
      </div>

      <div className='App-header'>
        <div className='Link'>
          <Link to='/Excercises' className='category-link' onClick={() => handleClick('Excercises')}>
            <h3>Rehabilitation Exercises</h3>
          </Link>
          <Link to='/Evaluations' className='category-link' onClick={() => handleClick('Evaluations')}>
            <h3>Evaluate</h3>
          </Link>
        </div>

        <div className='Link'>
          <Link to='/StayConnected' className='category-link' onClick={() => handleClick('StayConnected')}>
            <h3>Stay Connected</h3>
          </Link>
          <Link to='/Useful' className='category-link' onClick={() => handleClick('Useful')}>
            <h3>Useful Equipment & Applications</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}