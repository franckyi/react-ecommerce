import { Button, ListItem, ListItemText } from "@mui/material";
import { useCart } from "../context/cartContext";

export function CartItem({ allProducts, currentItem }) {
    const { decrementItemQuantity } = useCart();
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
            <ListItemText primary={item.title} />
            <Button onClick={() => decrementItemQuantity(item.id)} variant="contained" color="error">-</Button>
        </ListItem>
    )
}