import React, { useState } from "react";
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';

export default function Exercises() {
    const [filterCategory, setFilterCategory] = React.useState("all");
    const [getUp, setGetUp] = useState({
        name: "Getting up from a fall",
        link: "https://youtu.be/2Z46M1WvmvQ",
        thumbnail: "https://example.com/getUpThumbnail.jpg"
    });

    const data = [
        { name: "Exercise 1", category: "Category A", link: "https://www.youtube.com/watch?v=1UaJ9K7X7OY" },
        { name: "Exercise 2", category: "Category B", link: "https://www.youtube.com/watch?v=1UaJ9K7X7OY" },
        // Add more data as needed
    ];

    const filteredData = data.filter(item => (
        (filterCategory === "all" || item.category === filterCategory)
    ));

    const categories = Array.from(new Set(data.map(item => item.category)));

    return (
        <div>
            <div>
                <h2>{getUp.name}</h2>
                <a href={getUp.link} target="_blank" rel="noopener noreferrer">
                    <img src={getUp.thumbnail} alt={`${getUp.name} Thumbnail`} />
                </a>
            </div>

            {/* Filter dropdowns */}
            <div>
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
            </div>

            {/* Table */}
            <table>
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Category</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
