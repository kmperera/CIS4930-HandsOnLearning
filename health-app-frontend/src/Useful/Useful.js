import React from "react"

export default function Useful() {
    return (
        <div>
            <h1>Useful Equipment & Applications (Under Construction)</h1>
            <label>Filter
                <label>Type:
                    <select>
                        <option value="empty">-</option>
                        <option value="equipment">Equipment</option>
                        <option value="applications">Applications</option>
                    </select>
                </label>
                <label>Sort:
                    <select>
                        <option value="rating">Rating</option>
                        <option value="p_low">Price: low-to-high</option>
                        <option value="p_high">Price: high-to-low</option>
                    </select>
                </label>
                <label>Need help with:
                    <select>
                        <option value="empty">-</option>
                        <option value="cognitive">Cognitive</option>
                        <option value="muscleA">Muscle Group A</option>
                        <option value="muscleB">Muscle Group B</option>
                    </select>
                </label>
                <button type="search">Search</button>
            </label>
        </div>
        // each block has image, name, type, description, link (price?)
    );
}