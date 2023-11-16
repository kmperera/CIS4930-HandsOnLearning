import React from "react"
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';

// when creating new items put them in alphabetically
const a1 = {
    name: 'Application A',
    imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
    imageSize: 90,
    type: 'application',
    description: 'useful for ...',
    price: 4.25,
    link: 'get the product here',
};

const e1 = {
    name: 'Equipment A',
    imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
    imageSize: 90,
    type: 'equipment',
    description: 'useful for ...',
    price: 15.25,
    link: 'get the product here',
};

const items = [a1, e1];
const listItems = items.map((d) => <li key={d.name}>
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

// this isn't working properly
function alterList(t, s, h) {
    if(t !== "-") {
        // loop through all items
        items.forEach((item) => {
            if(t !== item.type) {
                items.pop(items);
            }
        })
    }
    if(s !== "-") {
        // sort elements of items
    }
    if(h !== "-") {
        // loop thorugh all itmes and see if h apears in description
    }
    // listItems;
};

export default function Useful() {
    // this isn't working properly
    function search() {
        {alterList("application", "-", "-")}
    }
    
    return (
        <div>
            <h1>Useful Equipment & Applications (Under Construction)</h1>
            <FormLabel>
                <FormLabel>Type:
                    <Select name="type">
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
            {listItems}
        </div>
    );
}