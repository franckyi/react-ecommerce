import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FiltersContext } from '../../model/filterContext';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 5,
        label: '5',
    }
];

function valuetext(value: number) {
    return `${value}`;
}

export default function RatingSlider() {
    const { filters, setFilters } = React.useContext(FiltersContext);
    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log('changed price range:', newValue)
        setFilters({
            ...filters,
            rating: {
                min: newValue[0],
                max: newValue[1],
            }
        })
    };

    return (
        <Box sx={{ width: 300, height: 200, display: 'flex', gap: '15px' }}>
            <span>Rating: </span>
            <Slider
                aria-label="Always visible"
                getAriaValueText={valuetext}
                step={.5}
                marks={marks}
                valueLabelDisplay="on"
                value={[filters.rating.min, filters.rating.max]}
                onChange={handleChange}
                min={0}
                max={5}
            />
        </Box>
    );
}