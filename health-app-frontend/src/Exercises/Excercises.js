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
        { name: "Crumbling a Piece of Paper", category: "Shoulder, Hand", link: "https://youtu.be/gqBHIX-2xHY", equipement: "Paper" },
        { name: "Resisted Surpine Diagonal Shoulder Flexion", category: "Shoulder, Arm", link: "https://youtu.be/MS2hx7dOAes", equipement: "Resistance band" },
        { name: "Shoulder Horizontal Range of Motion", category: "Shoulder", link: "https://youtu.be/BVDOcQJ-1v8", equipement: "None" },
        { name: "Shoulder Range of Motion", category: "Shoulder", link: "https://youtu.be/BVDOcQJ-1v8", equipement: "None" },
        { name: "Sitting Trunk Rotations", category: "Torso", link: "https://youtu.be/dekQnnbLyus", equipement: "Chair" },
        { name: "Sitting Weight Bearing Elbow Flexion and Extension", category: "Shoulder, Arm", link: "https://youtu.be/5rYDXxXO09U", equipement: "None" },
        { name: "Supine Elbow Flexion/Extension", category: "Arm", link: "https://youtu.be/dfBBBIlBmP4", equipement: "Small Towel" },
        { name: "Supine Shoulder Flexion AROM", category: "Shoulder", link: "https://youtu.be/6iEEWUjOkC0", equipement: "None" },
        { name: "Supported Reaching and Grasping", category: "Shoulder, Arm, Hand", link: "https://youtu.be/-hise8ZUIAk", equipement: "Chair, Table" },
        { name: "Bridge Weight Shifts", category: "Balance, Leg", link: "https://youtu.be/vT0tcOv4Zeo", equipement: "None" },
        { name: "Calf Stretch", category: "Ankle", link: "https://youtu.be/j4ytUXLf_1w", equipement: "Chair" },
        { name: "Mini Lunge", category: "Hip, Leg", link: "https://youtu.be/R3YEDs3Y7MI", equipement: "None" },
        { name: "Side-Lying Knee Flexion", category: "Knee, Hip", link: "https://youtu.be/6BzBTUPqOPE", equipement: "None" },
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
