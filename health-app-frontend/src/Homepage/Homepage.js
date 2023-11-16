import "./Homepage.css"
import React from 'react'


import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Homepage() {
    //we use this for routing using the buttons
    const navigate = useNavigate();

    //handles the click 
    function handleClick(input) {
        navigate(input);
      }


 return (
    <header className='App-header'>
    <p>
      Welcome to NeuroNurture, click a category to get started!
    </p>
    <Link
      to = "/exercises"
    >
      Rehabilitation Exercises
    </Link>
    <Link
      to = "/evaluations"
      // button link need to be edited
    >
      Evaluate
    </Link>
    <Link
      to = "/stayconnected"
      // button link need to be edited
    >
      Stay Connected
    </Link>
    <Link
      to = "/useful"

      // button link need to be edited
    >
      Useful Equiment & Applications
    </Link>
    </header>
 );
}