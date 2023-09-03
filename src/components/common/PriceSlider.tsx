import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FiltersContext, initialState } from '../../model/filterContext';

const marks = [
    {
        value: 1,
        label: '$1',
    },
    {
        value: 500,
        label: '$500',
    },
    {
        value: 2000,
        label: '$2.000',
    }
];

function valuetext(value: number) {
    return `$${value}`;
}

export default function PriceSlider() {
    const { filters, setFilters } = React.useContext(FiltersContext);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setFilters({
            ...filters,
            price: {
                min: newValue[0],
                max: newValue[1],
            }
        })
    };

    return (
        <Box sx={{ width: 300, display: 'flex', gap: '15px' }}>
            <span>Price: </span>
            <Slider
                aria-label="Always visible"
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