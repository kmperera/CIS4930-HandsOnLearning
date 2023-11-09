import React from "react"

const item1 = {
    name: 'Equipment A',
    imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
    imageSize: 90,
    type: 'equipment',
    description: 'useful for ...',
    price: 15.25,
    link: 'get the produce here',
};
const item2 = {
    name: 'Application A',
    imageUrl: 'http://i.imgur.com/yX0vd0Ss.jpg',
    imageSize: 90,
    type: 'application',
    description: 'useful for ...',
    price: 15.25,
    link: 'get the produce here',
};

const items = [item1, item2];
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
        if(t !== item1.type) {
            items.pop(item1);
        }
        if(t !== item2.type) {
            items.pop(item2);
        }
    }
    if(s !== "-") {
        // sort elements of items
    }
    if(h !== "-") {
        // loop thorugh all itmes and see if h apears in description
    }
};

export default function Useful() {
    // this isn't working properly
    function search() {
        {alterList("application", "-", "-")}
    }
    
    return (
        <div>
            <h1>Useful Equipment & Applications (Under Construction)</h1>
            <label>Filter
                <label>Type:
                    <select name="type">
                        <option value="empty">-</option>
                        <option value="equipment">Equipment</option>
                        <option value="applications">Applications</option>
                    </select>
                </label>
                <label>Sort:
                    <select name="sort">
                        <option value="empty">-</option>
                        <option value="p_low">Rating (maybe take this one out)</option>
                        <option value="p_low">Price: low-to-high</option>
                        <option value="p_high">Price: high-to-low</option>
                    </select>
                </label>
                <label>Need help with:
                    <select name="help">
                        <option value="empty">-</option>
                        <option value="cognitive">Cognitive</option>
                        <option value="muscleA">Muscle Group A</option>
                        <option value="muscleB">Muscle Group B</option>
                    </select>
                </label>
                <button onClick={() => search()}>Search</button>
            </label>
            {listItems}
        </div>
    );
}