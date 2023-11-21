import React, { useState } from "react";
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';

export default function Exercises() {
    const [filterCategory, setFilterCategory] = React.useState("all");
    const [filterEquipment, setFilterEquipment] = useState("all");
    const [getUp, setGetUp] = useState({
        name: "Getting up from a fall",
        link: "https://youtu.be/2Z46M1WvmvQ",
        //thumbnail: "https://example.com/getUpThumbnail.jpg"
    });

    const data = [
        { name: "Crumbling a Piece of Paper", category: "Hand, Shoulder", link: "https://youtu.be/gqBHIX-2xHY", equipement: "Paper" },
        { name: "Resisted Surpine Diagonal Shoulder Flexion", category: "Arm, Shoulder", link: "https://youtu.be/MS2hx7dOAes", equipement: "Resistance band" },
        { name: "Shoulder Horizontal Range of Motion", category: "Shoulder", link: "https://youtu.be/BVDOcQJ-1v8", equipement: "None" },
        { name: "Shoulder Range of Motion", category: "Shoulder", link: "https://youtu.be/BVDOcQJ-1v8", equipement: "None" },
        { name: "Sitting Trunk Rotations", category: "Torso", link: "https://youtu.be/dekQnnbLyus", equipement: "Chair" },
        { name: "Sitting Weight Bearing Elbow Flexion and Extension", category: "Arm, Shoulder", link: "https://youtu.be/5rYDXxXO09U", equipement: "None" },
        { name: "Supine Elbow Flexion/Extension", category: "Arm", link: "https://youtu.be/dfBBBIlBmP4", equipement: "Small Towel" },
        { name: "Supine Shoulder Flexion AROM", category: "Shoulder", link: "https://youtu.be/6iEEWUjOkC0", equipement: "None" },
        { name: "Supported Reaching and Grasping", category: "Arm, Hand, Shoulder", link: "https://youtu.be/-hise8ZUIAk", equipement: "Chair, Table" },
        { name: "Bridge Weight Shifts", category: "Balance, Leg", link: "https://youtu.be/vT0tcOv4Zeo", equipement: "None" },
        { name: "Calf Stretch", category: "Ankle", link: "https://youtu.be/j4ytUXLf_1w", equipement: "Chair" },
        { name: "Mini Lunge", category: "Hip, Leg", link: "https://youtu.be/R3YEDs3Y7MI", equipement: "None" },
        { name: "Side-Lying Knee Flexion", category: "Hip, Knee", link: "https://youtu.be/nJ128SOjSDU", equipement: "None" },
        { name: "Single-Leg Mini Squats with Support", category: "Knee, Leg", link: "https://youtu.be/L7wvxXBvnzc", equipement: "Table" },
        { name: "Small Step-Ups with Support", category: "Hip, Leg", link: "https://youtu.be/rFJ8JJCdYx0", equipement: "Steps" },
        { name: "Standing Hip Abduction with Support", category: "Hip, Leg", link: "https://youtu.be/6z2BSlkkwgg", equipement: "Table" },
        { name: "Supine Heel Slides", category: "Hip, Knee, Leg", link: "https://youtu.be/Awtwxl3xd0U", equipement: "None" },
        { name: "Supine Knees Side to Side (Trunk Rotation)", category: "Hip, Knee, Torse", link: "https://youtu.be/MzRmK2IK3-Q", equipement: "None" },
        { name: "Supine Leg Crossing", category: "Hip", link: "https://youtu.be/bWUrxgAE-do", equipement: "None" },
        { name: "Supported Mini Squats", category: "Leg", link: "https://youtu.be/gfzxMtHnRpI", equipement: "Chair" },
        { name: "Dynamic Weight Shifts", category: "Balance", link: "https://youtu.be/BEd-TMi7Le0", equipement: "Chair" },
        { name: "Quadruped Weight Shifts", category: "Balance", link: "https://youtu.be/h-DPiXhyDv8", equipement: "None" },
        { name: "Single Leg Stance", category: "Balance", link: "https://youtu.be/78PpqNX_t0w", equipement: "None" },
        { name: "Sit to Stand", category: "Balance, Leg", link: "https://youtu.be/FgzjxOnWYvA", equipement: "Chair" },
        { name: "Staggered Stance", category: "Balance", link: "https://youtu.be/YU0xhG3R92c", equipement: "None" },
        { name: "Standing - Feet Together, Eyes Open/Closed", category: "Balance", link: "https://youtu.be/STBFBCCMXIA", equipement: "None" },
        { name: "Swiss Ball Weight Shifts", category: "Balance", link: "https://youtu.be/YyDhtHNwDKc", equipement: "Chair, Exercise Ball" },
        { name: "Knee Extensions", category: "Knee, Leg", link: "https://youtu.be/-rwby0zA6Vs", equipement: "Chair" },
        { name: "Seated Marching", category: "Hip", link: "https://youtu.be/-rwby0zA6Vs", equipement: "Chair" },
        { name: "Ankle Dorsiflexion Exercise", category: "Ankle", link: "https://youtu.be/-rwby0zA6Vs", equipement: "Chair" },
        { name: "Knee to Chest", category: "Balance, Core", link: "https://youtu.be/dGBqTLtdVuA", equipement: "None" },
        { name: "Toe Tap Core Exercise", category: "Balance, Core", link: "https://youtu.be/dGBqTLtdVuA", equipement: "None" },
        { name: "Tabletop Circle Exercise", category: "Arm", link: "https://youtu.be/kuuGlz_ddOM", equipement: "Table, Water bottle" },
        { name: "Unweighted Bicep Curls", category: "Arm", link: "https://youtu.be/kuuGlz_ddOM", equipement: "Table" },
        { name: "Open Arm Exercise", category: "Arm", link: "https://youtu.be/kuuGlz_ddOM", equipement: "Water bottle" },
        { name: "Weight Bearing Lean", category: "Shoulder", link: "https://youtu.be/kuuGlz_ddOM", equipement: "Small Towel" },
        { name: "Tabletop Lateral Pushing Exercise", category: "Shoulder", link: "https://youtu.be/kuuGlz_ddOM", equipement: "Table, Water bottle" },
        { name: "Tabletop Forward Pushing Exercise", category: "Shoulder", link: "https://youtu.be/kuuGlz_ddOM", equipement: "Table, Water bottle" },
        { name: "Wrist Flexion and Extension", category: "Wrist", link: "https://youtu.be/i0JYsLyJEnE", equipement: "None" },
        { name: "Wrist Windshield Wipers", category: "Hand, Wrist", link: "https://youtu.be/i0JYsLyJEnE", equipement: "Table" },
        { name: "Wrist Curl Exercise", category: "Wrist", link: "https://youtu.be/i0JYsLyJEnE", equipement: "Water bottle" },
        { name: "Hand Rolling Movement", category: "Hand", link: "https://youtu.be/i0JYsLyJEnE", equipement: "Table, Water bottle" },
        { name: "Pen Spin", category: "Fingers, Hand", link: "https://youtu.be/i0JYsLyJEnE", equipement: "Pen, Table" },
        { name: "Palm Up and Down", category: "Hand", link: "https://youtu.be/i0JYsLyJEnE", equipement: "Table" },
        { name: "Cane Stretch", category: "Balance, Shoulder", link: "https://youtu.be/i0JYsLyJEnE", equipement: "Cane, Chair" },
    ];

    const filteredData = data.filter(item => (
        (filterCategory === "all" || item.category === filterCategory) &&
        (filterEquipment === "all" || item.equipment === filterEquipment)
    ));

    const categories = Array.from(new Set(data.map(item => item.category)));

    return (
        <div>
            <div>
                <h2>{getUp.name}</h2>
                <a href={getUp.link} target="_blank" rel="noopener noreferrer">
                    {/*<img src={getUp.thumbnail} alt={`${getUp.name} Thumbnail`} />*/}
                </a>
            </div>

            {/* Filter dropdowns */}
            <div>
                <FormLabel>
                    Select Category and/or Equipment:
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
            <table>
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
                            <td>{item.link}</td>
                            <td>{item.equipment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
