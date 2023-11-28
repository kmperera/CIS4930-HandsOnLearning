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

import React, { useState, useEffect, useMemo }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Motivation from './Motivation';
import { Box, Typography } from '@mui/joy';

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
    };
  
    const intervalId = setInterval(showToast, 5000);
  
    return () => {
        clearInterval(intervalId);
    };
  }, [currentMessageIndex, messages]);

  const currentMessage = messages[currentMessageIndex];

  // Use this for routing using the buttons
  const navigate = useNavigate();

  // Handles the click
  function handleClick(input) {
    navigate(input);
  }

  return (
    <div>
      <div>
        <Motivation message={currentMessage} />
      </div>

      <div className='Header-container'>
        <h1 className = 'header-homepage'>Welcome to NeuroNurture, click a category to get started!</h1>
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
      <Box component="footer" className="footer" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: '#262626',
                    color: '#FFFFFF'
                }}>
                    <Typography level="body2" component="p" fontFamily={'Inter'}>
                        NeuroNurture (2023)
                    </Typography>
                    <Typography level="body2" component="p" fontFamily={'Inter'}>
                        Made by Skylar, Sebastian, Katie, Kelsey, and Maya.
                    </Typography>
                </Box>
    </div>
  );
}