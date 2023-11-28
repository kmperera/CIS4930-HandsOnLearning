import React, { useState, useEffect, useMemo } from "react"
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Input from "@mui/joy/Input";
import Typography from '@mui/joy/Typography';
import MultipleChoice from "./MultipleChoice";
import './Evaluations.css';
import { useTheme } from '@mui/material/styles';
import SliderChoice from './SliderChoice';
import Motivation from "./Motivation";
import Navbar from "../Navbar";
import './Evaluations.css';

const answers = {

    "less than one month": 0,
    "1-3 months ago": 2,
    "3-6 months ago": 3,
    "More than 6 months ago": 4,

    "Ischemic Stroke": 1,
    "Hemorrhagic Stroke": 2,
    "Transient Ischemic Attack": 3,
    "Unsure": 4,

    "Right": 1,
    "Left": 1,
    "Both": 3,
    "No significant decline": 4,

    "Fully independent": 10,
    "Mostly independent, some assistance needed": 5,
    "Dependent on assistance for many activities": 3,
    "Fully dependent on others": -30,

    "Physical Therapy": 3,
    "Occupational Therapy": 3,
    "Both Physical and Occupational Therapy": 6,
    "None": 3,

    "No noticeable changes": 5,
    "Mild changes": 2,
    "Significant changes": 0,
    "Severe changes": 0,

    "No Choice Selected": -1,
};


function calculateResults(one, two, three, four, five, six, seven, eight, nine, ten) {
    let value = seven / 4 + eight / 4 + nine / 4 + ten / 4;
    console.log(one);
    value += answers[one];
    console.log("value swag " + answers[one]);
    value += answers[two];
    value += answers[three];
    value += answers[four];
    value += answers[five];
    value += answers[six];

    console.log('results: ' + value)
}


export default function Evaluations() {

    const messages = useMemo(() => [
        "Strength grows from challenge.",
        "Every challenge in an opportunity.",
        "Strive for progress over perfection.",
        "Your potential is boundless.",
        "Create your dream reality.",
        "Celebrate each step.",
        "Healing is a journey.",
        "The power is within you.",
        "Own your discipline towards progress.",
        "Respond to your challenges optimistically."
    ], []);

    const [currentMes, setMessageIndex] = useState(0);

    useEffect(() => {
        const showToast = () => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        };

        const intervalId = setInterval(showToast, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentMes, messages]);

    const currentMessage = messages[currentMes];

    const [Q1, setQ1] = useState("No Choice Selected");
    const [Q2, setQ2] = useState("No Choice Selected");
    const [Q3, setQ3] = useState("No Choice Selected");
    const [Q4, setQ4] = useState("No Choice Selected");
    const [Q5, setQ5] = useState("No Choice Selected");
    const [Q6, setQ6] = useState("No Choice Selected");
    const [Q7, setQ7] = useState(1);
    const [Q8, setQ8] = useState(1);
    const [Q9, setQ9] = useState(1);
    const [Q10, setQ10] = useState(1);
    const [total, setTotal] = useState(-1);


    const [quizFinished, setQuizFinished] = useState(false)
    const handleQ1 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ1(value);
        console.log('Q1 Value: ' + Q1);
    };

    const handleQ2 = (newValue) => {
        console.log(newValue);
        let value = newValue.target.defaultValue;
        setQ2(value);
        console.log('Q2 Value: ' + Q2);
    };

    const handleQ3 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ3(value);
        console.log('Q3 Value: ' + Q3);
    };

    const handleQ4 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ4(value);
        console.log('Q4 Value: ' + Q4);
    };

    const handleQ5 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ5(value);
    };

    const handleQ6 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ6(value);
    };


    const handleQ7 = (event, newValue) => {
        setQ7(newValue);
        console.log('Q7 Value: ' + Q7);
    };

    const handleQ8 = (event, newValue) => {
        setQ8(newValue);
    };

    const handleQ9 = (event, newValue) => {
        setQ9(newValue);
    };

    const handleQ10 = (event, newValue) => {
        setQ10(newValue);
    };

    const handleSubmit = () => {
        console.log(Q1);
        console.log(Q2);
        console.log(Q3);
        console.log(calculateResults(Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10));

        setQuizFinished(true);
        setTotal(calculateResults(Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10));
    }

    return (
        <div>
            <div className='flex-wrapper'>
                <Motivation message={currentMessage} />
                <div>
                    <Navbar />

                    <div className="body">
                        {quizFinished ? (
                            (total > 0) ? (
                                (total > 10) ? (
                                    (total > 20) ? (
                                        <div>
                                            <h1>Stage 3/4 - Good Progress</h1>
                                            <h2>Reccommended Exercises- </h2>
                                            <ul>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <div>
                                            <h1>Stage 3/4 - Good Progress</h1>
                                            <h2>Reccommended Exercises- </h2>
                                            <ul>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                                <li>
                                                    <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                ) : (
                                    <div>
                                        <h1>Stage 2/4 - Medium Progress</h1>
                                        <h2>Reccommended Exercises- </h2>
                                        <ul>
                                            <li>
                                                <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                            </li>
                                            <li>
                                                <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                            </li>
                                            <li>
                                                <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                            </li>
                                            <li>
                                                <p>Jumping Jacks (<a href='google.com'>link</a>)</p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            ) : (
                                <div>
                                    <h1>Stage 1/4 - Mild Progress</h1>
                                    <p>This is the first state of stroke recovery, and may usually come with limited moovement. </p>
                                    <h2>Reccommended Exercises- </h2>
                                    <ul>
                                        <li>
                                            <p>Wrist Curl Exercise (<a href='https://www.youtube.com/watch?v=i0JYsLyJEnE'>link</a>)</p>
                                        </li>
                                        <li>
                                            <p>Crumbling a Piece of Paper (<a href='https://www.youtube.com/watch?v=gqBHIX-2xHY'>link</a>)</p>
                                        </li>
                                        <li>
                                            <p>Hand Rolling Movement (<a href='https://www.youtube.com/watch?v=i0JYsLyJEnE'>link</a>)</p>
                                        </li>
                                        <li>
                                            <p>Palms Up and Down (<a href='https://www.youtube.com/watch?v=i0JYsLyJEnE'>link</a>)</p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        ) : (<div>
                            <h1>Stroke Recovery Questionnare</h1>
                            <MultipleChoice
                                value={Q1}
                                onChange={handleQ1}
                                questionName="1. How long has it been since your stroke?"
                                options={['less than one month', '1-3 months ago', '3-6 months ago', 'More than 6 months ago']}
                            />
                            <MultipleChoice
                                value={Q2}
                                onChange={handleQ2}
                                questionName="Which type of stroke did you experience?"
                                options={[' Ischemic Stroke', 'Hemorrhagic Stroke', 'Transient Ischemic Attack', 'Unsure']}
                            />
                            <MultipleChoice
                                value={Q3}
                                onChange={handleQ3}
                                questionName="Which side of your body had the largest post-stroke decline?"
                                options={['Right', 'Left', 'Both', 'No significant decline']}
                            />
                            <MultipleChoice
                                value={Q4}
                                onChange={handleQ4}
                                questionName="Which forms of therapy have you recieved during the recovery process?"
                                options={['Physical Therapy', 'Occupational Therapy', 'Both Physical and Occupational Therapy', 'None']}
                            />
                            <MultipleChoice
                                value={Q5}
                                onChange={handleQ5}
                                questionName="How independent are you in performing daily activities?"
                                options={['Fully independent', 'Mostly independent, some assistance needed', 'Dependent on assistance for many activities', 'Fully dependent on others']}
                            />
                            <MultipleChoice
                                value={Q6}
                                onChange={handleQ6}
                                questionName="Have you experienced any changes in your emotional or mental health since your stroke?"
                                options={['No noticeable changes', ' Mild changes', 'Significant changes', 'Severe changes']}
                            />
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate your current mobility?"
                                value={Q7}
                                onChange={handleQ7}
                            ></SliderChoice>
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate your current communication effectiveness? "
                                value={Q8}
                                onChange={handleQ8}
                            ></SliderChoice>
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate your current stroke-related pain level?"
                                value={Q9}
                                onChange={handleQ9}
                            ></SliderChoice>
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate the level of support you recieve from family and friends?"
                                value={Q10}
                                onChange={handleQ10}
                            ></SliderChoice>

                            <Button sx={{ width: '120px', marginTop: '20px', marginLeft: '-10px', marginBottom: '30px' }} onClick={() => { handleSubmit() }}>See Results</Button>
                        </div>)}
                    </div>
                </div>
                <Box component="footer" className="footer" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: '#262626',
                    color: '#FFFFFF'
                }}>
                    <Typography level="body2" component="p" fontFamily={'Inter'}>
                        NeuroNurture (2023)
                    </Typography>
                    <Typography level="body2" component="p" fontFamily={'Inter'}>
                        Made by Skylar, Sebastian, Katie, Kelsey, and Maya.
                    </Typography>
                </Box>
            </div>
        </div >
    );
}

/* 
Google scholar links



*/