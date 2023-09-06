import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FiltersContext } from '../../context/filterContext';
import { marks } from '../../model/rating';
import { TFilters } from '../../types/filters';

function valuetext(value: number) {
    return `${value}`;
}

export default function RatingSlider() {
    const { filters, setFilters } = React.useContext(FiltersContext);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(newValue)
        setFilters({
            ...filters,
            rating: {
                min: newValue[0],
                max: newValue[1],
            }
        } as TFilters)
    };

    return (
        <Box sx={{ width: 320, display: 'flex', gap: '15px' }}>
            <span>Rating: </span>
            <Slider
                getAriaLabel={() => "Always visible"}
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