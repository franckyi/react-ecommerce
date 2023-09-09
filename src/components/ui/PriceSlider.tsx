import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TFilters } from '../../types/filters';
import { marks } from '../../model/priceSlider';
import {SliderProps } from '../../types/sliderProps';

function valuetext(value: number) {
    return `$${value}`;
}

export default function PriceSlider({filters, setFilters}: SliderProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number[]) => {
        setFilters({
            ...filters,
            price: {
                min: newValue[0],
                max: newValue[1],
            }
        } as TFilters)
    };

    return (
        <Box sx={{ width: 300, display: 'flex', gap: '15px' }}>
            <span>Price: </span>
            <Slider
                getAriaLabel={() => "Always visible"}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
                value={[filters.price.min, filters.price.max]}
                onChange={handleChange}
                min={1}
                max={2000}
            />
        </Box>
    );
}