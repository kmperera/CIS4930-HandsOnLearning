import React from "react"
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';
import { useState } from "react";

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

    const [list, setList] = useState(<li></li>);
    const [typeValue, setType] = useState("-");
    const [sortValue, setSort] = useState("-");
    const [helpValue, setHelp] = useState("-");

    const handleTypeChange = (event) => {
        setType(event.target.innerText);
        console.log(event.target.innerText)
    }


    // this isn't working properly
    function alterList(t, s, h) {
        if ((t == "-" || t == "") && (s == "-" || s == "") && (h == "-" || h == "")) {
            let listItems = AllItems.map((d) => <li key={d.name}>
                <h2>{d.name}</h2>
                <img
                    className="avatar"
                    src={d.imageUrl}
                    alt={'Photo of ' + d.name}
                    style={{
                        width: d.imageSize,
                        height: d.imageSize
                    }}
                />
                <p>{d.description}</p>
                <p>${d.price} at {d.link}</p>
            </li>);
        }
        let items = AllItems;
        if (t !== "-") {
            // loop through all items
            console.log('value of T: ' + t)
            items.forEach((item) => {
                if (t !== item.type) {
                    items.pop(items);
                }
            })
        }
        if (s !== "-") {
            // sort elements of items
        }
        if (h !== "-") {
            // loop thorugh all itmes and see if h apears in description
        }
        let listItems = items.map((d) => <li key={d.name}>
            <h2>{d.name}</h2>
            <img
                className="avatar"
                src={d.imageUrl}
                alt={'Photo of ' + d.name}
                style={{
                    width: d.imageSize,
                    height: d.imageSize
                }}
            />
            <p>{d.description}</p>
            <p>${d.price} at {d.link}</p>
        </li>);
        setList(listItems);
        console.log(listItems);
    };


    // this isn't working properly
    function search() {
        { alterList(typeValue, sortValue, helpValue) }
    }

    

    return (
        <div>
            <h1>Useful Equipment & Applications (Under Construction)</h1>
            <FormLabel>
                <FormLabel>Type:
                    <Select name="type" onChange = {handleTypeChange}>
                        <Option value="empty">-</Option>
                        <Option value="equipment">Equipment</Option>
                        <Option value="applications">Applications</Option>
                    </Select>
                </FormLabel>
                <FormLabel>Sort:
                    <Select name="sort">
                        <Option value="empty">-</Option>
                        <Option value="p_low">Price: low-to-high</Option>
                        <Option value="p_high">Price: high-to-low</Option>
                    </Select>
                </FormLabel>
                <FormLabel>Need help with:
                    <Select name="help">
                        <Option value="empty">-</Option>
                        <Option value="cognitive">Cognitive</Option>
                        <Option value="muscleA">Muscle Group A</Option>
                        <Option value="muscleB">Muscle Group B</Option>
                    </Select>
                </FormLabel>
                <Button onClick={() => search()}>Search</Button>
            </FormLabel>
            {list}
        </div>
    );
}