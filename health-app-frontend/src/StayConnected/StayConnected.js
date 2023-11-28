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
        };
    
        const intervalId = setInterval(showToast, 5000);

        return () => {
            clearInterval(intervalId);
        };
        }, [currentMes, messages]);
    
    const currentMessage = messages[currentMes];
    
    const [support, setSupport] = useState({
        name: "Find a support group near you",
        link: "https://www.stroke.org/en/stroke-support-group-finder"
    });
    
    const BigSquareButton = () => {
        return (
            <a className="big-square-button" href={support.link} target="_blank" rel="noopener noreferrer">
                {support.name}
            </a>
        );
      };

    const [start, setStart] = useState({
        name: "Create your own group",
        link: "https://www.meetup.com/how-to-group-start/"
    });
    const StartGroup = () => {
        return (
            <a className="big-square-button" href={start.link} target="_blank" rel="noopener noreferrer">
                {start.name}
            </a>
        );
      };

    // return (
    //     <div class="pad">
    //         <Motivation message={currentMessage} />
    //         <h1>Stay Connected!</h1>
    //         <p>current location</p>
    //         <LocationComponent />
    //         {/* maybe use the current location to get nearby hospitals, ERs, doctors, support groups ...? */}
    //     </div>
    // );
    const headingStyle = {
        color: 'white', // Change this to the color you desire
    };

    return (
        <div class="pad">
            <Motivation message={currentMessage} />
            <h1 style={headingStyle}>Stay Connected!</h1>
            <div class="App">
            <div className="two-sections-container">
      <div className="section">
        <h2>JOIN</h2>
        <p>Social connection is a key factor for improvement in stroke recovery.
        </p>
        <p>Take the opportunity to cross journeys with other survivors.
        </p>
        <p>Visit the American Stroke Association to connect with a support group in your area!
        </p>
        <BigSquareButton />
      </div>
      <div className="section">
        <h2>LEAD</h2>
        <p>Don't see a group that fits your needs?
        </p>
        <p>Want to take initiative in being a group leader?
        </p>
        <p>Start your own support group today with Meetup!
        </p>
        <StartGroup />
      </div>
    </div>
            </div>
        </div>
    );
}