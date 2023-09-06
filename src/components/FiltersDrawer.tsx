import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PriceSlider from './ui/PriceSlider';
import CategoriesChip from './ui/CategoriesChip';
import RatingSlider from './ui/RatingSlider';
import { FiltersDrawerProps } from '../types/filtersDraweProps';

export default function FiltersDrawer({ handleResetFilters }: FiltersDrawerProps) {
    const [state, setState] = React.useState({ bottom: false });

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, 'bottom': open });
            };

    return (
        <>
            <Button variant="contained" onClick={toggleDrawer(true)} sx={{ position: 'fixed', bottom: 0 }}><ArrowUpwardIcon />Show filters</Button>
            <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                className='drawer'
            >
                <div className="d-flex">
                    <PriceSlider />
                    <RatingSlider />
                </div>
                <CategoriesChip />
                {/* <Button onClick={handleResetFilters} sx={{ textTransform: 'capitalize' }}>Reset filters</Button> */}
            </SwipeableDrawer>
        </>
    );
}