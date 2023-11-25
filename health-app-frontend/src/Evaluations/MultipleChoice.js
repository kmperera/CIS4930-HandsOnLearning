import React from "react"
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Evaluations.css'


export default function MultipleChoice({ questionName, options }) {
    return (

        <div>
            <h4>{questionName}</h4>
            <RadioGroup name="question" className='question-box'>
                {options.map((option, index) => (
                    <FormControlLabel className='form-label'
                        key={index}
                        value={option}
                        label={option}
                        control={<Radio />}
                    />
                ))}
            </RadioGroup>
        </div>
    );
}