import React, { useState } from "react";

export default function Exercises() {
    const [filterCategory, setFilterCategory] = useState("all");

    const data = [
        { id: 1, name: "Exercise 1", category: "Category A" },
        { id: 2, name: "Exercise 2", category: "Category B" },
        // Add more data as needed
    ];

    const filteredData = filterCategory === "all"
        ? data
        : data.filter(item => item.category === filterCategory);

    const categories = Array.from(new Set(data.map(item => item.category)));

    return (
        <div>
            <h1>This is the exercises page (Under Construction)</h1>

            {/* Filter dropdown */}
            <label>
                Filter by Category:
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
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
