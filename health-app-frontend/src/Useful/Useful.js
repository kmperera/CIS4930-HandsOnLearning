import React from "react"
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';
import { useState } from "react";
import Input from '@mui/joy/Input';

// when creating new items put them in alphabetically
const a1 = {
    name: 'Application A',
    imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
    imageSize: 90,
    type: 'Application',
    description: 'useful for ...',
    price: 4.25,
    link: 'get the product here',
};

const e1 = {
    name: 'Equipment A',
    imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
    imageSize: 90,
    type: 'Equipment',
    description: 'useful for ...',
    price: 15.25,
    link: 'get the product here',
};

const AllItems = [a1, e1];

export default function Useful() {
    const [list, setList] = useState(AllItems);
    const [typeValue, setType] = useState("");

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const search = () => {
        let filteredItems = AllItems;

        if (typeValue !== "") {
            // Filter items based on the selected type
            filteredItems = AllItems.filter((item) => typeValue === item.type);
        }

        setList(filteredItems);
    };

    return (
        <div>
            <h1>Useful Equipment & Applications (Under Construction)</h1>
            <Input
                label="Type"
                value={typeValue}
                onChange={handleTypeChange}
            />
            <Button onClick={search}>Search</Button>
            <ul>
                {list.map((item) => (
                    <li key={item.name}>
                        <h2>{item.name}</h2>
                        {/* <h2>{item.imageUrl}</h2>
                        <h2>{item.imageSize}</h2>
                        <h2>{item.description}</h2>
                        <h2>{item.price}</h2>
                        <h2>{item.link}</h2> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
