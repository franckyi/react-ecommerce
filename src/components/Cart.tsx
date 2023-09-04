import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Badge, Button, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../context/cartContext';
import { CartItem } from './CartItem';

export default function Cart({ products }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const { cartItems, totalQuantity } = useCart();

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 400 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Button onClick={toggleDrawer(anchor, false)} variant="outlined" color="primary">Close</Button>
            <List>
                {cartItems.map(item => {
                    return <CartItem currentItem={item} products={products} />
                })}
            </List>
            <Divider />
            <Button variant="contained" color="primary">Checkout</Button>
        </Box>
    );

    return (
        <div className="cart">
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        onClick={toggleDrawer(anchor, true)}
                        size="large"
                        aria-label="new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={totalQuantity > 0 ? totalQuantity : '0'} color="error">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}