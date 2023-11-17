import React from "react";

export default function Exercises() {
    return (
        <div>
            <h1>This is the exercises page (Under Construction)</h1>

            {/* Table */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Exercise 1</td>
                        <td>Category A</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Exercise 2</td>
                        <td>Category B</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}
