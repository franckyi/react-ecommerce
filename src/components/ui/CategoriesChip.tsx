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
            <Chip label="electronics" variant={filters.category === 'electronics' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="jewelery" variant={filters.category === 'jewelery' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="men's clothing" variant={filters.category === `men's clothing` ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="women's clothing" variant={filters.category === `women's clothing` ? 'filled' : 'outlined'} onClick={handleClick} />
        </Stack>
    );
}