import React from "react"
import { useState, useEffect, useMemo } from "react";
import LocationComponent from './LocationComponent'
import Motivation from "./Motivation";
import './StayConnected.css';

export default function StayConnected() {
    const messages = useMemo(() => [
        "Triumph over adversity.",
        "Your spirit is stronger than your challenge.", 
        "Every step forward is a victory.", 
        "Resilience drives recovery.",
        "Thrive in this journey.",
        "Your masterpiece is in progress.",
        "You have the power inside.",
        "Your unwavering spirit inspires.",
        "Your courage is a guiding light.",
        "The world is so thankful for you."
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
        <div class="pad">
            <Motivation message={currentMessage} />
            <h1>Stay Connected!</h1>
            <p>current location</p>
            <LocationComponent />
            {/* maybe use the current location to get nearby hospitals, ERs, doctors, support groups ...? */}
        </div>
    );
}