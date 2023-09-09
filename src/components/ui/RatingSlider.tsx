import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { marks } from '../../model/ratingSlider';
import { TFilters } from '../../types/filters';
import { SliderProps } from '../../types/sliderProps';

function valuetext(value: number) {
    return `${value}`;
}

export default function RatingSlider({filters, setFilters}: SliderProps) {

    const handleChange = (event, newValue: number | number[]) => {
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