import React, { useState } from "react";

export default function Exercises() {
    const [filterCategory, setFilterCategory] = useState("all");
    const [filterID, setFilterID] = useState("all");

    const data = [
        { id: 1, name: "Exercise 1", category: "Category A" },
        { id: 2, name: "Exercise 2", category: "Category B" },
        // Add more data as needed
    ];

    const filteredData = data.filter(item => (
        (filterCategory === "all" || item.category === filterCategory) &&
        (filterID === "all" || item.id === parseInt(filterID))
    ));

    const categories = Array.from(new Set(data.map(item => item.category)));
    const ids = Array.from(new Set(data.map(item => item.id)));

    return (
        <div>
            {/* Filter dropdown */}
            <label>
                Filters: 
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <select
                    value={filterID}
                    onChange={(e) => setFilterID(e.target.value)}
                >
                    <option value="all">All IDs</option>
                    {ids.map(id => (
                        <option key={id} value={id}>{id}</option>
                    ))}
                </select>
            </label>

            {/* Table */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Exercise</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
