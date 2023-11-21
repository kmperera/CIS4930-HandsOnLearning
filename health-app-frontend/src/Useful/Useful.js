import React from "react"
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import FormLabel from '@mui/joy/FormLabel';
import Option from '@mui/joy/Option';
import { useState } from "react";

// when creating new items put them in alphabetically
// const a1 = {
//     name: 'Application A',
//     imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
//     imageSize: 90,
//     type: 'Application',
//     description: 'useful for ...',
//     price: 4.25,
//     link: 'get the product here',
// };

// const e1 = {
//     name: 'Equipment A',
//     imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
//     imageSize: 90,
//     type: 'Equipment',
//     description: 'useful for ...',
//     price: 15.25,
//     link: 'get the product here',
// };

// const AllItems = [a1, e1];


export default function Useful() {

    // const [list, setList] = useState(<li></li>);
    // const [typeValue, setType] = useState("-");
    // const [sortValue, setSort] = useState("-");
    // const [helpValue, setHelp] = useState("-");

    // const handleTypeChange = (event) => {
    //     setType(event.target.innerText);
    //     console.log(event.target.innerText)
    // }

    // // this isn't working properly
    // function alterList(t, s, h) {
    //     if ((t == "-" || t == "") && (s == "-" || s == "") && (h == "-" || h == "")) {
    //         let listItems = AllItems.map((d) => <li key={d.name}>
    //             <h2>{d.name}</h2>
    //             <img
    //                 className="avatar"
    //                 src={d.imageUrl}
    //                 alt={'Photo of ' + d.name}
    //                 style={{
    //                     width: d.imageSize,
    //                     height: d.imageSize
    //                 }}
    //             />
    //             <p>{d.description}</p>
    //             <p>${d.price} at {d.link}</p>
    //         </li>);
    //     }
    //     else {
    //         let items = AllItems;
    //         if (t !== "-" && t !== "") {
    //             // loop through all items
    //             console.log('value of T: ' + t)
    //             items.forEach((item) => {
    //                 if (t !== item.type) {
    //                     items.pop(item);
    //                 }
    //             })
    //         }
    //         if (s !== "-" && s !== "") {
    //             // sort elements of items
    //         }
    //         if (h !== "-" && h !== "") {
    //             // loop thorugh all itmes and see if h apears in description
    //         }
    //         let listItems = items.map((d) => <li key={d.name}>
    //             <h2>{d.name}</h2>
    //             <img
    //                 className="avatar"
    //                 src={d.imageUrl}
    //                 alt={'Photo of ' + d.name}
    //                 style={{
    //                     width: d.imageSize,
    //                     height: d.imageSize
    //                 }}
    //             />
    //             <p>{d.description}</p>
    //             <p>${d.price} at {d.link}</p>
    //         </li>);
    //         setList(listItems);
    //         console.log(listItems);
    //     }
    // };


    // // this isn't working properly
    // function search() {
    //     { alterList(typeValue, sortValue, helpValue) }
    // }

    let [selectedType, setSelectedType] = useState('empty');
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Application A',
            imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
            imageSize: 90,
            type: 'Application',
            description: 'useful for ...',
            price: 4.25,
            link: 'get the product here'
        },
        {
            id: 2,
            name: 'Equipment A',
            imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
            imageSize: 90,
            type: 'Equipment',
            description: 'useful for ...',
            price: 15.25,
            link: 'get the product here'
        }
    ])
    
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }

    const handleSearch = () => {
        let filteredItems;
        if(selectedType != 'empty') {
            filteredItems = items.filter((item) =>
                item.type.toLowerCase().includes(selectedType));
        }
        else {
            filteredItems = items;
        }
        let listItems = filteredItems.map((d) => <li key={d.name}>
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
        
        // console.log('Selected Type: ', selectedType);
        
        // if ((selectedType == 'empty' || selectedType == '')) {
        //     let listItems = AllItems.map((d) => <li key={d.name}>
        //         <h2>{d.name}</h2>
        //         <img
        //             className="avatar"
        //             src={d.imageUrl}
        //             alt={'Photo of ' + d.name}
        //             style={{
        //                 width: d.imageSize,
        //                 height: d.imageSize
        //             }}
        //         />
        //         <p>{d.description}</p>
        //         <p>${d.price} at {d.link}</p>
        //     </li>);
        // }
        // else {
        //     let items = AllItems;
        //     if (selectedType !== 'empty' && selectedType !== '') {
        //         // loop through all items
        //         console.log('value of T: ' + selectedType)
        //         items.forEach((item) => {
        //             if (selectedType !== item.type) {
        //                 items.pop(item);
        //             }
        //         })
        //     }
        //     // if (s !== "-" && s !== "") {
        //     //     // sort elements of items
        //     // }
        //     // if (h !== "-" && h !== "") {
        //     //     // loop thorugh all itmes and see if h apears in description
        //     // }
        //     let listItems = items.map((d) => <li key={d.name}>
        //         <h2>{d.name}</h2>
        //         <img
        //             className="avatar"
        //             src={d.imageUrl}
        //             alt={'Photo of ' + d.name}
        //             style={{
        //                 width: d.imageSize,
        //                 height: d.imageSize
        //             }}
        //         />
        //         <p>{d.description}</p>
        //         <p>${d.price} at {d.link}</p>
        //     </li>);
        //     console.log(listItems);
        // }
    }

    return (
        <div>
            <h1>Useful Equipment & Applications (Under Construction)</h1>
            <FormLabel>
                <FormLabel>Type:
                    <Select value={selectedType} onChange = {handleTypeChange}>
                        <Option value="empty">-</Option>
                        <Option value="equipment">Equipment</Option>
                        <Option value="applications">Applications</Option>
                    </Select>
                </FormLabel>
                {/* <FormLabel>Sort:
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
                </FormLabel> */}
                <Button onClick={handleSearch}>Search</Button>
            </FormLabel>
            {/* {list} */}
        </div>
    );
}