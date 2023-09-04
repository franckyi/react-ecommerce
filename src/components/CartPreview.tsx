import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Badge, Button, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from '../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartPreview() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const { cart, setCart } = React.useContext(CartContext);

    const handleAddItem = () => {
        console.log('handleAddItem()')
        console.log('counter:', counter)
        console.log('cart:', cart)
        setCart({
            ...cart,
            products: cart.products.slice().push(props.item),
        })
    }

    const handleRemoveItem = () => {
        console.log('handleRemoveItem()')
    }

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
                {cart.products.map(item => (
                    <ListItem key={item.id} disablePadding>
                        <img
                            className="product-thumb"
                            src={item.image}
                            alt={item.title}
                            width="40"
                            draggable="false"
                        />
                        <ListItemText primary={item.title} />
                        <Button onClick={handleRemoveItem} variant="contained" color="error" startIcon={<DeleteIcon />}>Remove</Button>
                    </ListItem>
                ))}
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
                        <Badge badgeContent={cart.counter > 0 ? cart.counter : '0'} color="error">
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