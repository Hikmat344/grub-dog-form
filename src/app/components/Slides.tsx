'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Your Dog',
  },
  {
    value: 33,
    label: 'Meel Selection',
  },
  {
    value: 66,
    label: 'You',
  },
  {
    value: 100,
    label: 'Summary',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function Slide() {
  return (
    <div className='flex justify-center items-center w-auto'>
      <Box sx={{ width: 600, position: 'absolute' ,}}>
        <Slider
          className='rounded h-3'
          aria-label="Restricted values"
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          marks={marks}
        />
      </Box>
    </div>
  );



}


