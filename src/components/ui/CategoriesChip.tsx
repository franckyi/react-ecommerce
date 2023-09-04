import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FiltersContext } from '../../context/filterContext';

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
            <Chip label="All" variant={filters.category === 'All' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="Electronics" variant={filters.category === 'Electronics' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="Jewelery" variant={filters.category === 'Jewelery' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="Men's clothing" variant={filters.category === `Men's clothing` ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="Women's clothing" variant={filters.category === `Women's clothing` ? 'filled' : 'outlined'} onClick={handleClick} />
        </Stack>
    );
}