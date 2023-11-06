import "./Homepage.css"
import React from 'react'

export default function Homepage() {
 return (
    <header className='App-header'>
    <p>
      Welcome to APP TITLE, click a category to get started!
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      // button link need to be edited
    >
      Rehabilitation Exercises
    </a>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      // button link need to be edited
    >
      Evaluate
    </a>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      // button link need to be edited
    >
      Stay Connected
    </a>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      // button link need to be edited
    >
      Useful Equiment & Applications
    </a>
    </header>
 );
}