import React from "react"
import { useState, useEffect, useMemo } from "react";
import LocationComponent from './LocationComponent'
import Motivation from "./Motivation";

export default function StayConnected() {
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
            <Motivation message={currentMessage} />
            <h1>Stay Connected!</h1>
            <p>current location</p>
            <LocationComponent />
            {/* maybe use the current location to get nearby hospitals, ERs, doctors, support groups ...? */}
        </div>
    );
}