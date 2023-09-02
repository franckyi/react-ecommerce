import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CategoriesChip() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
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