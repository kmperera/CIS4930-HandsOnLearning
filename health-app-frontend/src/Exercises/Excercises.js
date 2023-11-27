import React, { useState, useEffect, useMemo } from "react";
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';
import Motivation from "./Motivation";
import './Excercises.css';

export default function Exercises() {
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
            setTimeout(showToast, 5000); 
        };
    
        setTimeout(showToast, 5000); 
    
        return () => {
            clearTimeout(); 
        };
    }, [currentMes, messages]);
    
    const currentMessage = messages[currentMes];

    const [filterCategory, setFilterCategory] = React.useState("all");
    const [filterEquipment, setFilterEquipment] = useState("all");
    const [getUp, setGetUp] = useState({
        name: "Getting up from a fall",
        link: "https://youtu.be/2Z46M1WvmvQ"
    });

    const data = [
        { name: "Crumbling a Piece of Paper", category: "Hand, Shoulder", link: "https://youtu.be/gqBHIX-2xHY", equipment: "Paper" },
        { name: "Resisted Surpine Diagonal Shoulder Flexion", category: "Arm, Shoulder", link: "https://youtu.be/MS2hx7dOAes", equipment: "Resistance band" },
        { name: "Shoulder Horizontal Range of Motion", category: "Shoulder", link: "https://youtu.be/BVDOcQJ-1v8", equipment: "None" },
        { name: "Shoulder Range of Motion", category: "Shoulder", link: "https://youtu.be/BVDOcQJ-1v8", equipment: "None" },
        { name: "Sitting Trunk Rotations", category: "Torso", link: "https://youtu.be/dekQnnbLyus", equipement: "Chair" },
        { name: "Sitting Weight Bearing Elbow Flexion and Extension", category: "Arm, Shoulder", link: "https://youtu.be/5rYDXxXO09U", equipment: "None" },
        { name: "Supine Elbow Flexion/Extension", category: "Arm", link: "https://youtu.be/dfBBBIlBmP4", equipment: "Small Towel" },
        { name: "Supine Shoulder Flexion AROM", category: "Shoulder", link: "https://youtu.be/6iEEWUjOkC0", equipment: "None" },
        { name: "Supported Reaching and Grasping", category: "Arm, Hand, Shoulder", link: "https://youtu.be/-hise8ZUIAk", equipment: "Chair, Table" },
        { name: "Bridge Weight Shifts", category: "Balance, Leg", link: "https://youtu.be/vT0tcOv4Zeo", equipment: "None" },
        { name: "Calf Stretch", category: "Ankle", link: "https://youtu.be/j4ytUXLf_1w", equipment: "Chair" },
        { name: "Mini Lunge", category: "Hip, Leg", link: "https://youtu.be/R3YEDs3Y7MI", equipment: "None" },
        { name: "Side-Lying Knee Flexion", category: "Hip, Knee", link: "https://youtu.be/nJ128SOjSDU", equipment: "None" },
        { name: "Single-Leg Mini Squats with Support", category: "Knee, Leg", link: "https://youtu.be/L7wvxXBvnzc", equipment: "Table" },
        { name: "Small Step-Ups with Support", category: "Hip, Leg", link: "https://youtu.be/rFJ8JJCdYx0", equipment: "Steps" },
        { name: "Standing Hip Abduction with Support", category: "Hip, Leg", link: "https://youtu.be/6z2BSlkkwgg", equipment: "Table" },
        { name: "Supine Heel Slides", category: "Hip, Knee, Leg", link: "https://youtu.be/Awtwxl3xd0U", equipment: "None" },
        { name: "Supine Knees Side to Side (Trunk Rotation)", category: "Hip, Knee, Torse", link: "https://youtu.be/MzRmK2IK3-Q", equipment: "None" },
        { name: "Supine Leg Crossing", category: "Hip", link: "https://youtu.be/bWUrxgAE-do", equipment: "None" },
        { name: "Supported Mini Squats", category: "Leg", link: "https://youtu.be/gfzxMtHnRpI", equipment: "Chair" },
        { name: "Dynamic Weight Shifts", category: "Balance", link: "https://youtu.be/BEd-TMi7Le0", equipment: "Chair" },
        { name: "Quadruped Weight Shifts", category: "Balance", link: "https://youtu.be/h-DPiXhyDv8", equipment: "None" },
        { name: "Single Leg Stance", category: "Balance", link: "https://youtu.be/78PpqNX_t0w", equipment: "None" },
        { name: "Sit to Stand", category: "Balance, Leg", link: "https://youtu.be/FgzjxOnWYvA", equipment: "Chair" },
        { name: "Staggered Stance", category: "Balance", link: "https://youtu.be/YU0xhG3R92c", equipment: "None" },
        { name: "Standing - Feet Together, Eyes Open/Closed", category: "Balance", link: "https://youtu.be/STBFBCCMXIA", equipment: "None" },
        { name: "Swiss Ball Weight Shifts", category: "Balance", link: "https://youtu.be/YyDhtHNwDKc", equipment: "Chair, Exercise Ball" },
        { name: "Knee Extensions", category: "Knee, Leg", link: "https://youtu.be/-rwby0zA6Vs", equipment: "Chair" },
        { name: "Seated Marching", category: "Hip", link: "https://youtu.be/-rwby0zA6Vs", equipment: "Chair" },
        { name: "Ankle Dorsiflexion Exercise", category: "Ankle", link: "https://youtu.be/-rwby0zA6Vs", equipment: "Chair" },
        { name: "Knee to Chest", category: "Balance, Core", link: "https://youtu.be/dGBqTLtdVuA", equipment: "None" },
        { name: "Toe Tap Core Exercise", category: "Balance, Core", link: "https://youtu.be/dGBqTLtdVuA", equipment: "None" },
        { name: "Tabletop Circle Exercise", category: "Arm", link: "https://youtu.be/kuuGlz_ddOM", equipment: "Table, Water bottle" },
        { name: "Unweighted Bicep Curls", category: "Arm", link: "https://youtu.be/kuuGlz_ddOM", equipment: "Table" },
        { name: "Open Arm Exercise", category: "Arm", link: "https://youtu.be/kuuGlz_ddOM", equipment: "Water bottle" },
        { name: "Weight Bearing Lean", category: "Shoulder", link: "https://youtu.be/kuuGlz_ddOM", equipment: "Small Towel" },
        { name: "Tabletop Lateral Pushing Exercise", category: "Shoulder", link: "https://youtu.be/kuuGlz_ddOM", equipment: "Table, Water bottle" },
        { name: "Tabletop Forward Pushing Exercise", category: "Shoulder", link: "https://youtu.be/kuuGlz_ddOM", equipment: "Table, Water bottle" },
        { name: "Wrist Flexion and Extension", category: "Wrist", link: "https://youtu.be/i0JYsLyJEnE", equipment: "None" },
        { name: "Wrist Windshield Wipers", category: "Hand, Wrist", link: "https://youtu.be/i0JYsLyJEnE", equipment: "Table" },
        { name: "Wrist Curl Exercise", category: "Wrist", link: "https://youtu.be/i0JYsLyJEnE", equipment: "Water bottle" },
        { name: "Hand Rolling Movement", category: "Hand", link: "https://youtu.be/i0JYsLyJEnE", equipment: "Table, Water bottle" },
        { name: "Pen Spin", category: "Fingers, Hand", link: "https://youtu.be/i0JYsLyJEnE", equipment: "Pen, Table" },
        { name: "Palm Up and Down", category: "Hand", link: "https://youtu.be/i0JYsLyJEnE", equipment: "Table" },
        { name: "Cane Stretch", category: "Balance, Shoulder", link: "https://youtu.be/i0JYsLyJEnE", equipment: "Cane, Chair" },
    ];

    const filteredData = data.filter(item => (
        (filterCategory === "all" || item.category === filterCategory) &&
        (filterEquipment === "all" || item.equipment === filterEquipment)
    ));

    const categories = Array.from(new Set(data.map(item => item.category)));

    return (
        <div class="pad">
            <Motivation message={currentMessage} />
            <div className="featured-exercise">
            <h2>
                <a href={getUp.link} target="_blank" rel="noopener noreferrer">
                    {getUp.name}
                </a>
            </h2>
            </div>

            <div className="filters">
                {/* Filter dropdowns */}
                <FormLabel>
                    Select Category:
                    <Select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <Option value="all">All Categories</Option>
                        {categories.map(category => (
                            <Option key={category} value={category}>{category}</Option>
                        ))}
                    </Select>
                </FormLabel>

                <FormLabel>
                    Select Equipment:
                    <Select
                        value={filterEquipment}
                        onChange={(e) => setFilterEquipment(e.target.value)}
                    >
                        <Option value="all">All Equipment</Option>
                        {Array.from(new Set(data.map(item => item.equipment))).map(equipment => (
                            <Option key={equipment} value={equipment}>{equipment}</Option>
                        ))}
                    </Select>
                </FormLabel>
            </div>

            {/* Table */}
            <table className="exercise-table">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Category</th>
                        <th>Link</th>
                        <th>Equipment</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td><a href={item.link} target="_blank" rel="noopener noreferrer">Watch Video</a></td>
                            <td>{item.equipment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
