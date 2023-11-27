import React from "react"
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { useState, useEffect, useMemo } from "react";
import Input from '@mui/joy/Input';
import Motivation from "./Motivation";

// listed in alphabetical order
const AllItems = [
    {
        name: 'Arm Peddlers',
        description: 'Arm Peddlers are equipment that focus of arm or leg movement. Provides bilateral exercise.',
        price: 36.99, 
        link: 'https://www.amazon.com/s?k=arm+peddler&ref=nb_sb_noss_1'
    }, {
        name: 'Arm Skates',
        description: 'Arm Skates are equipment that help with range-of-motion. Limit amount of work required. Helps reintroduce movement to the affected arm.',
        price: 21.00, 
        link: 'https://www.amazon.com/s?k=arm+skate&ref=nb_sb_noss_2'
    }, {
        name: 'Balance Boards',
        description: 'Balance Boards are equipment that work on balance. Targets the vestibular system and improves walking ability. Balance boards with ricking bases have more stability than other types.',
        price: 15.99, 
        link: 'https://www.amazon.com/Yes4All-Wooden-Wobble-Balance-Board/dp/B00WJJJX2Q/?th=1'
    }, {
        name: 'Brain Out',
        description: 'Brain Out is an application that improves cognitive ability. Stimulates the brain. Cognitive Training app.',
        price: 0 + " FREE",
        link: 'https://apps.apple.com/us/app/brain-out-tricky-riddle-games/id1477841973'
    }, {
        name: 'Calm',
        description: 'Calm is an application that improves sleep and reduces depression and anxiety. Uses meditation to help those struggling with post-stroke depression, anxiety, and insomnia. Meditation app.',
        price: 0 + ' FREE',
        link: 'https://www.calm.com/'
    }, {
        name: 'Clock Yourself',
        description: 'Clock Yourself is an application that improves coordination and balance. Activities progressively increase in complexity. Helps with quicker reaction times. Physiotherapy.',
        price: 1.99,
        link: 'https://www.clockyourself.com.au/'
    }, {
        name: 'CT Speech and Cognitive Therapy App',
        description: 'CT Speech and Cognitive Therapy App is an application that improves speech and cognitive abilities. Assesses ability level and assigns proper exercise (out of thousands available). Your speech therapist can assign exercises through the app.',
        price: 29.99 + ' a month', 
        link: 'https://www.flintrehab.com/product/speech-therapy/?utm_source=Blog&utm_medium=Speech%20Article&utm_content=CT%20App'
    }, {
        name: 'Dumbbells and Wrist/Ankle Weights',
        description: 'Dumbbells and Wrist/Ankle Weights are equipment that improves strength. Addresses muscle atrophy and increases arm and leg strength. Stimulates muscle growth and the brain.',
        price: 12.49,
        link: 'https://www.amazon.com/s?k=adjustable+wrist+weights&crid=ZEQFDWW1QQ50&sprefix=adjustable+wrist%2Csporting%2C245&ref=nb_sb_ss_ts-doa-p_1_16'
    }, {
        name: 'Electrical Stimulation Machine',
        description: 'Electrical Stimulation Machine is equipment that focuses on muscle weakness. Helps with paralysis and severe muscle weakness. Sends gentle electrical stimulation to the desired muscles, which helps them contract. Introduces movement and stimulate the brain. IMPORTANT: to work with a therapist to safely operate.',
        price: 23.99, 
        link: 'https://www.amazon.com/s?k=electrical+stimulation+for+rehab&ref=nb_sb_noss'
    }, {
        name: 'ELEVATE',
        description: 'ELEVATE is an application that improves cognitive function and memory. Uses educational games and is most helpful with consistent repetition. Brain training app.',
        price: 0 + ' FREE',
        link: 'https://elevateapp.com/'
    }, {
        name: 'FitMi Full-Body Home Therapy',
        description: 'FitMi Full-Body Home Therapy is equipment that helps motivate full-body exercise and tracks your progress. It is an interactive neuro-rehab tool that lets you choose that muscle group you want to target. Helps with abilities like walking, driving, typing, etc.',
        price: 369.00,
        link: 'https://www.flintrehab.com/product/fitmi/?utm_source=Blog&utm_medium=FitMi%20Inside%20Article'
    }, {
        name: 'Hand Exercise Balls with Extension Add-On',
        description: 'Hand Exercise Balls with Extension Add-On are equipment that targets finger flexibility and extension. Average stress balls work too, but the extension offers more rehabilitation exercise options.',
        price: 24.95, 
        link: 'https://www.amazon.com/Handmaster-Plus-Physical-Therapy-Exerciser/dp/B00CTG3TQU/'
    }, {
        name: 'Language Therapy 4-in-1',
        description: 'Language Therapy 4-in-1 is an application that improves cognitive ability. Helps with reading, writing, speaking, and listening through comprehension, naming, reading, and writing, therapies.',
        price: 64.99,
        link: 'https://apps.apple.com/us/app/language-therapy-4-in-1/id525278822?mt=8&ct=1link&pt=565195'
    }, {
        name: 'Lumosity',
        description: 'Lumosity is an application that improves cognitive function. Designed for adults of all ages. Cognitive Training App.',
        price: 11.99 + " a month",
        link: 'https://www.lumosity.com/en/'
    }, {
        name: 'Mirror Box',
        description: 'Mirror Box is equipment that helps with hand rehabilitation. “Tricks” that brain into thinking both hands are moving, which helps neuroplasticity and encourages movement. Helps with hand paralysis and severe spasticity.',
        price: 59.99, 
        link: 'https://www.amazon.com/s?k=mirror+therapy&ref=nb_sb_noss_1'
    }, {
        name: 'MusicGlove Hand Therapy',
        description: 'MusicGlove Hand Therapy is equipment that improves hand function. Music-based therapy device that motivates you to exercise using a musical game. Stimulate the brain and promotes neuroplasticity.',
        price: 369.00, 
        link: 'https://www.flintrehab.com/product/musicglove-hand-therapy/?utm_source=Blog&utm_medium=MusicGlove%20Inside%20Article'
    }, {
        name: 'Proloquo2Go',
        description: 'Proloquo2Go is an application that helps patients who can’t talk. Provides needed communication with quick access to symbols of “core words”.',
        price: 249,
        link: 'https://www.assistiveware.com/products/proloquo2go'
    }, {
        name: 'Recognize',
        description: 'Recognize is an application that helps with differentiation between left and right. Also improves motor imagery with mirror therapy. Tests you on left/right discrimination. Rehabilitation app.',
        price: 9.99 + " per application",
        link: 'https://www.noigroup.com/product/recogniseapp/'
    }, {
        name: 'Stability Balls',
        description: 'Stability Balls are equipment that work on balance. Safer than balance boards. Commonly used for core rehab exercises. Used to improve balance and ability to walk.',
        price: 11.99,
        link: 'https://www.amazon.com/s?k=stability+ball&ref=nb_sb_noss_2'
    }, {
        name: 'Stationary Recumbent Bikes',
        description: 'Stationary Recumbent Bikes are equipment that build walking skills. Encourages bilateral movement and stimulates the brain. Offers more support and an easier experience than regular stationary bikes.',
        price: 219.99, 
        link: 'https://www.amazon.com/s?k=recumbent+bike&ref=nb_sb_noss_2'
    }, {
        name: 'Therapy Putty',
        description: 'Therapy Putty is equipment that improves fine motor coordination, strength, and range-of-motion. Many available exercises for various improvements.',
        price: 9.29,
        link: 'https://www.amazon.com/s?k=therapy+putty&ref=nb_sb_noss_2'
    }, {
        name: 'Trivia Crack',
        description: 'Trivia Crack is an application that improves cognitive ability. Comes in over 20 languages and stimulates the brain. Cognitive Training app.',
        price: 0 + " FREE",
        link: 'https://apps.apple.com/us/app/trivia-crack/id651510680'
    }, {
        name: 'What\'s the Difference?',
        description: 'What\'s the Difference is an application that improves cognitive function and visual skills. Helps with attention and visual scanning.',
        price: 0 + ' FREE',
        link: 'https://apps.apple.com/us/app/whats-the-difference-spot-it/id820452091'
    }, {
        name: 'What\'s the Saying?',
        description: 'Whats\’s the Saying is an application that improves cognitive function, memory, and recall. Brain-stimulating word game that helps critical thinking skills.',
        price: 0 + ' FREE',
        link: 'https://apps.apple.com/us/app/whats-the-saying-logic-riddles-brain-teasers/id633197707'
    }, {
        name: 'Wordscapes',
        description: 'Wordscapes is an application that improves cognitive ability. Offers a variety of word games and stimulates the brain. Cognitive Training app.',
        price: 0 + ' FREE',
        link: 'https://apps.apple.com/us/app/wordscapes/id1207472156'
    }/*, {
        name: '',
        description: '',
        price: ,
        link: ''
    }, */ 
];

export default function Useful() {
    const messages = useMemo(() => [
        "Embrace your inner strength.",
        "Progress, not perfection.", 
        "Healing begins with self love.", 
        "One step at a time.", 
        "Your strength is beyond inspiring.",
        "Hope is stronger than fear.",
        "Discover your true resilience.",
        "Positivity is the greatest super power.",
        "Courage and perserverance daily.",
        "You are so loved."
      ], []); 
    
      const [currentMes, setMessageIndex] = useState(0);
    
    useEffect(() => {
        const showToast = () => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setTimeout(showToast, 8000); 
        };
    
        setTimeout(showToast, 10000); 
    
        return () => {
            clearTimeout(); 
        };
    }, [currentMes, messages]);
    
    const currentMessage = messages[currentMes];

    const [list, setList] = useState(AllItems);
    const [SearchTerm, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const search = () => {
        let filteredItems = AllItems;

        if (SearchTerm !== "") {
            // Filter items based on the description
            filteredItems = AllItems.filter((item) => item.description.toLowerCase().includes(SearchTerm.toLowerCase()));
        }

        setList(filteredItems);
    };

    return (
        <div>
            <Motivation message={currentMessage} />
            <h1>Useful Rehabilitation Tools</h1>
            <Input
                label="search"
                value={SearchTerm}
                onChange={handleChange}
            />
            <Button onClick={search}>Search</Button>
            <ul>
                {list.map((item) => (
                    <li key={item.name}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price} at {item.link}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}