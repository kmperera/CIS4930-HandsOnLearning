import React from "react"
import { useState } from "react";
import LocationComponent from './LocationComponent'

export default function StayConnected() {
    return (
        <div>
            <h1>This is the stay connected page (Under Construction)</h1>
            <p>current location</p>
            <LocationComponent />
            {/* maybe use the current location to get nearby hospitals, ERs, doctors, support groups ...? */}
        </div>
    );
}