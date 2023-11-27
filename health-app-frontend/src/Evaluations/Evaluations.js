import React from "react"
import Button from '@mui/joy/Button';
import Motivation from "./Motivation";
import { useState, useEffect, useMemo } from "react";


export default function Evaluations() {
    const messages = useMemo(() => [
        "Strength comes from will.",
        "One more step each day.", 
        "Surround yourself with those you love.", 
        "Faith is stronger than fear.",
        "Your comeback is stronger than your setback.",
        "Take a deep breath.",
        "Gratitude is medicine.",
        "Share your smile with the world.",
        "Your bravery is so admired.",
        "Your story inspires many."
      ], []); 

      const [currentMes, setMessageIndex] = useState(0);
    
      useEffect(() => {
          const showToast = () => {
              setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
              setTimeout(showToast, 8000); 
          };
      
          setTimeout(showToast, 10000); 
      
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