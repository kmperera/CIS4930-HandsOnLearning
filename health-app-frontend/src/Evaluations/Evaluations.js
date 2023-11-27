import React, { useState } from "react"
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Input from "@mui/joy/Input";
import Typography from '@mui/joy/Typography';
import MultipleChoice from "./MultipleChoice";
import './Evaluations.css';
import { useTheme } from '@mui/material/styles';
import SliderChoice from './SliderChoice';
import Navbar from "../Navbar";

function calculateResults(one, two, three) {
    return 1 + 2 + 3;
}


export default function Evaluations() {

    const [Q1, setQ1] = useState("No Choice Selected");
    const [Q2, setQ2] = useState("No Choice Selected");
    const [Q3, setQ3] = useState(1);
    const [Q4, setQ4] = useState(1);
    const [total, setTotal] = useState(-1);

    const [quizFinished, setQuizFinished] = useState(false)
    const handleQ1 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ1(value);
        console.log('Q1 Value: ' + Q1);
    };

    const handleQ2 = (newValue) => {
        let value = newValue.target.defaultValue;
        setQ2(value);
        console.log('Q2 Value: ' + Q2);
    };

    const handleQ3 = (event, newValue) => {
        setQ3(newValue);
    };

    const handleQ4 = (event, newValue) => {
        setQ4(newValue);
    };

    const handleSubmit = () => {
        console.log(Q1);
        console.log(Q2);
        console.log(Q3);
        console.log(calculateResults(Q1, Q2, Q3));
        setQuizFinished(true);
        setTotal(-1);
    }

    return (
        <div>
            <div className='flex-wrapper'>
                <div>
                    <Navbar />

                    <div className="body">
                        {quizFinished ? (
                            (total == 1) ? (<><p>total was equal to one.</p></>
                            ) : (
                                <>Progress Level - Low-Moderate Progress</>
                            )
                        ) : (<div>
                            <h1>Stroke Recovery Questionnare</h1>
                            <MultipleChoice
                                value={Q1}
                                onChange={handleQ1}
                                questionName="1. How long has it been since your stroke?"
                                options={['<1 month', '<3 months', '<1 year', '>1 year']}
                            />
                            <MultipleChoice
                                value={Q2}
                                onChange={handleQ2}
                                questionName="Which type of stroke did you experience?"
                                options={[' Ischemic Stroke', 'Hemorrhagic Stroke', 'Transient Ischemic Attack', 'Unsure']}
                            />
                            <MultipleChoice
                                questionName="Which side of your body had the largest post-stroke decline?"
                                options={['Right', 'Left', 'Both', 'No significant decline']}
                            />
                            <MultipleChoice
                                questionName="Which forms of therapy have you recieved during the recovery process?"
                                options={['Physical Therapy', 'Occupational Therapy', 'Both Physical and Occupational Therapy', 'None']}
                            />
                            <MultipleChoice
                                questionName="How independent are you in performing daily activities?"
                                options={['Fully independent', 'Mostly independent, some assistance needed', 'Dependent on assistance for many activities', 'Fully dependent on others']}
                            />
                            <MultipleChoice
                                value={Q2}
                                onChange={handleQ2}
                                questionName="Have you experienced any changes in your emotional or mental health since your stroke?"
                                options={['No noticeable changes', ' Mild changes', 'Significant changes', 'Severe changes']}
                            />
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate your current mobility?"
                                value={Q3}
                                onChange={handleQ3}
                            ></SliderChoice>
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate your current communication effectiveness? "
                                value={Q4}
                                onChange={handleQ4}
                            ></SliderChoice>
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate your current stroke-related pain level?"
                                value={Q3}
                                onChange={handleQ3}
                            ></SliderChoice>
                            <SliderChoice
                                questionName="On a scale of 1 to 10, how would you rate the level of support you recieve from family and friends?"
                                value={Q3}
                                onChange={handleQ3}
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
        </div>
    );
}