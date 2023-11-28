import React from 'react';
import Slider from '@mui/joy/Slider';
import Typography from '@mui/joy/Typography';
import './Evaluations.css'
import Box from '@mui/joy/Box';

export default function SliderChoice({ questionName, value, onChange}) {

    const titleStyle = {
        fontFamily: 'Inter, sans-serif'
    };

    const sliderMarks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 10,
            label: '10',
        },
    ];

    return (
        <Box sx={{marginBottom: '20px'}}>
            <h4>{questionName}</h4>
            <Slider
                defaultValue={5}
                min={1}
                max={10}
                step={0.01}
                marks={sliderMarks}
                value={value}
                onChange={onChange}
                aria-label="Rating"
                sx={{
                    width: '200px',
                    '--Slider-track-height': '8px',
                    '--Slider-thumb-size': '16px',
                    '--Slider-mark-label-font-family': 'Inter, sans-serif',
                }}
            />

        </Box>
    );
};