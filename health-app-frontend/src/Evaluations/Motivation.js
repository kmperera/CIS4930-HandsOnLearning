import React from 'react';
import './Motivation.css';

const Motivation = ({ message }) => (
  <div className="toast-container">
    <div className="toast">
      {message}
    </div>
  </div>
);

export default Motivation;