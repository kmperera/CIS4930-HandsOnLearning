import React from "react"
import Button from '@mui/joy/Button';
import Motivation from "./Motivation";
import { useState, useEffect, useMemo } from "react";


export default function Evaluations() {
    const messages = useMemo(() => [
        "Strength grows from challenge.",
        "Every challenge in an opportunity.", 
        "Strive for progress over perfection.", 
        "Your potential is boundless.",
        "Create your dream reality.",
        "Celebrate each step.",
        "Healing is a journey.",
        "The power is within you.",
        "Own your discipline towards progress.",
        "Respond to your challenges optimistically."
      ], []); 

      const [currentMes, setMessageIndex] = useState(0);
    
      useEffect(() => {
          const showToast = () => {
              setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
              setTimeout(showToast, 5000); 
          };
      
          setTimeout(showToast, 5000); 
      
          return () => {
              clearTimeout(); 
          };
      }, [currentMes, messages]);
      
      const currentMessage = messages[currentMes];
    
    return (
        <div>
            <Motivation message={currentMessage}/>
        </div>
    );
}