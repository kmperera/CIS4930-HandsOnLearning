import React, { useState, useEffect } from "react";
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';

const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your YouTube API key

export default function Exercises() {
    const [filterCategory, setFilterCategory] = useState("all");
    const [getUp, setGetUp] = useState({
        name: "Getting up from a fall",
        link: "https://youtu.be/2Z46M1WvmvQ",
        thumbnail: "" // Will be fetched dynamically
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

    useEffect(() => {
        // Fetch the thumbnail for the getUp video
        const fetchThumbnail = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${getVideoId(getUp.link)}&key=${API_KEY}`
                );

                const data = await response.json();
                const thumbnailUrl = data.items[0]?.snippet.thumbnails.medium.url;

                setGetUp(prevState => ({ ...prevState, thumbnail: thumbnailUrl }));
            } catch (error) {
                console.error("Error fetching YouTube video thumbnail:", error);
            }
        };

        fetchThumbnail();
    }, [getUp.link]);

    const getVideoId = (url) => {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return videoIdMatch ? videoIdMatch[1] : null;
    };

    return (
        <div>
            {/* "getUp" section */}
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
                        <th>Thumbnail</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={getVideoId(item.link) ? `https://img.youtube.com/vi/${getVideoId(item.link)}/mqdefault.jpg` : ''} alt={`${item.name} Thumbnail`} />
                                </a>
                            </td>
                            <td>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
