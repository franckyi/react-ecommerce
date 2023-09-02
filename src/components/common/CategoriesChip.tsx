import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FiltersContext } from '../../model/filterContext';

const ALL = `electronics jewelery men's clothing women's clothing`;

export default function CategoriesChip() {
    const { filters, setFilters } = React.useContext(FiltersContext);

    const handleClick = (e) => {
        console.info('You clicked the Chip.');
        console.info('event innerHTML:', e.target.innerHTML);
        console.info('event:', e);
        setFilters({
            ...filters,
            category: e.target.innerHTML
        })
    };

    return (
        <Stack direction="row" spacing={1} className='categories-chip'>
            <Chip label="All" onClick={handleClick} />
            <Chip label="Electronics" variant="outlined" onClick={handleClick} />
            <Chip label="Jewelery" variant="outlined" onClick={handleClick} />
            <Chip label="Men's clothing" variant="outlined" onClick={handleClick} />
            <Chip label="Women's clothing" variant="outlined" onClick={handleClick} />
        </Stack>
    );
}