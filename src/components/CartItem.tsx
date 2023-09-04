import { Button, ListItem, ListItemText, Typography } from "@mui/material";
import { useCart } from "../context/cartContext";

export function CartItem({ allProducts, currentItem }) {
    const { getItemQuantity, incrementItemQuantity, decrementItemQuantity } = useCart();
    const item = allProducts.find(item => item.id === currentItem.id);
    if (item == null) return null;

    return (
        <ListItem key={item.id} {...item} disablePadding>
            <img
                className="product-thumb"
                src={item.image}
                alt={item.title}
                width="30"
                draggable="false"
            />
            <Typography sx={{ fontSize: 14, marginLeft: '10px', marginRight: '15px' }}>{item.title.substring(0, 25)} ({getItemQuantity(item.id)})</Typography>
            <Button onClick={() => decrementItemQuantity(item.id)} sx={{ fontSize: 12, padding: 0, width: '10px' }} variant="outlined" color="primary">-</Button>
            <Button onClick={() => incrementItemQuantity(item.id)} sx={{ fontSize: 12, padding: 0, width: '10px', marginLeft: '5px' }} variant="outlined" color="primary">+</Button>
        </ListItem>
    )
}