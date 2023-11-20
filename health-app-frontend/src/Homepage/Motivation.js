import React from 'react';
import './Motivation.css';

const Motivation = ({ message, onClose }) => (
  <div className="toast-container">
    <div className="toast">
      {message}
    </div>
  </div>
);

export default Motivation;