import React, {useState} from "react"
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Input from "@mui/joy/Input";
import Typography from '@mui/joy/Typography';
import MultipleChoice from "./MultipleChoice";
import './Evaluations.css';
import { useTheme } from '@mui/material/styles';
import SliderChoice from './SliderChoice';


export default function Evaluations() {
    const theme = useTheme();

    const [Q1, setQ1] = useState(1);
    const [Q2, setQ2] = useState(2);
    const [Q3, setQ3] = useState(3);
    const [Q4, setQ4] = useState(4);

    
    return (
        <div>
            <div className='flex-wrapper'>
                <div>
                    <div className="head"></div>
                    <div className="body">

                        <h1>Stroke Recovery Questionnare</h1>
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <MultipleChoice
                            questionName="1. What is your favorite color?"
                            options={['Red', 'Green', 'Blue', 'Yellow']}
                        />
                        <SliderChoice questionName ="1. What is your favorite color?"></SliderChoice>

                        <Button sx={{ width: '120px', marginTop: '20px', marginLeft: '-10px', marginBottom: '30px' }}>See Results</Button>

                    </div>
                </div>
                <Box component="footer" className="footer" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: 'background.footer',
                    color: '#FFFFFF'
                }}>
                    <Typography level="body2" component="p" fontFamily={'Inter'}>
                        © 2023 Your Company Name
                    </Typography>
                    <Typography level="body2" component="p" fontFamily={'Inter'}>
                        All rights reserved.
                    </Typography>
                </Box>
            </div>
        </div>
    );
}