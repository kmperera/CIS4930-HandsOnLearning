import React from "react"
import { useState, useEffect, useMemo } from "react";
import LocationComponent from './LocationComponent'
import Motivation from "./Motivation";

export default function StayConnected() {
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