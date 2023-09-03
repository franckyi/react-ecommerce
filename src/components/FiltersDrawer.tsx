import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PriceSlider from './common/PriceSlider';

type Anchor = 'Filter products';

export default function FiltersDrawer() {
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <div>
            {(['bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant="contained" onClick={toggleDrawer(anchor, true)} sx={{ position: 'fixed', bottom: 0 }}><ArrowUpwardIcon />Filter products</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        className='drawer'
                    >
                        <PriceSlider />
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}