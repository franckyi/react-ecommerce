import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CategoriesChipProps } from '../../types/categoriesChipProps';

export default function CategoriesChip({filters, setFilters}: CategoriesChipProps) {
    // TODO: SET REACT EVENT TYPE
    const handleClick = (e) => {
        setFilters({
            ...filters,
            category: e.target.textContent
        })
    };

    return (
        <Stack sx={{ textTransform: 'capitalize', marginBottom: '1rem' }} direction="row" spacing={1} className='categories-chip'>
            <Chip label="All" variant={filters.category === 'All' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="electronics" variant={filters.category === 'electronics' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="jewelery" variant={filters.category === 'jewelery' ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="men's clothing" variant={filters.category === `men's clothing` ? 'filled' : 'outlined'} onClick={handleClick} />
            <Chip label="women's clothing" variant={filters.category === `women's clothing` ? 'filled' : 'outlined'} onClick={handleClick} />
        </Stack>
    );
}