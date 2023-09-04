import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Badge, Button, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItem } from './cartItem';

export default function CartPreview({ products }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const { cartItems } = useCart();
    const { getItemQuantity, incrementItemQuantity, decrementItemQuantity, removeFromCart } = useCart();
    // TODO: FIX ID
    // const quantity = getItemQuantity(id);

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
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
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
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        onClick={toggleDrawer(anchor, true)}
                        size="large"
                        aria-label="new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={cartItems.quantity > 0 ? cartItems.quantity : '0'} color="error">
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