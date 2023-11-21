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

<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  // Use this for routing using the buttons
  const navigate = useNavigate();

=======
import React, { useState, useEffect, useMemo }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Motivation from './Motivation';

export default function Homepage() {
  //popup motivation functionality
  const messages = useMemo(() => [
    "Progress, not perfection.", 
    "Healing begins with self love.", 
    "One step at a time.", 
    "Your strength is beyond inspiring.",
    "Hope is stronger than fear.",
    "Discover your true resilience.",
    "Positivity is the greatest super power.",
    "Embrace your inner strength.",
    "Courage and perserverance daily.",
    "You are so loved."
  ], []); 

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const showToast = () => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setTimeout(showToast, 10000); 
    };

    setTimeout(showToast, 10000); 

    return () => {
      clearTimeout(); 
    };
  }, [currentMessageIndex, messages]);

  const currentMessage = messages[currentMessageIndex];

  // Use this for routing using the buttons
  const navigate = useNavigate();

>>>>>>> upstream/main
  // Handles the click
  function handleClick(input) {
    navigate(input);
  }
<<<<<<< HEAD
=======

  return (
    <div>
      <div>
        <Motivation message={currentMessage} />
      </div>

      <div className='Header-container'>
        <h1>Welcome to NeuroNurture, click a category to get started!</h1>
      </div>

      <div className='App-header'>
        <div className='Link'>
          <Link to='/Exercises' className='category-link'>
            <h3>Rehabilitation Exercises</h3>
          </Link>
          <Link to='/Evaluations' className='category-link'>
            <h3>Evaluate</h3>
          </Link>
        </div>

        <div className='Link'>
          <Link to='/StayConnected' className='category-link'>
            <h3>Stay Connected</h3>
          </Link>
          <Link to='/Useful' className='category-link'>
            <h3>Useful Equipment & Applications</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> upstream/main

  return (
    <div>
      <div className='Header-container'>
        <h1>Welcome to NeuroNurture, click a category to get started!</h1>
      </div>

<<<<<<< HEAD
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
=======
>>>>>>> upstream/main
