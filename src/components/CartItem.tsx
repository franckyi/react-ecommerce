import { Button, ListItem, Typography } from "@mui/material";
import { useCart } from "../context/cartContext";
import { Product } from "../types/product";

type CartItemProps = {
    allProducts: Product[]
    currentItem: Product
}

export function CartItem(props: CartItemProps) {
    const { currentItem, allProducts } = props;
    const { getItemQuantity, handleDecrementClick, handleIncrementClick } = useCart();
    const item = allProducts.find(item => item.id === currentItem.id);
    if (item == null) return null;

    return (
        <ListItem disablePadding>
            <img
                className="product-thumb"
                src={item.image}
                alt={item.title}
                width="30"
                draggable="false"
            />
            <Typography sx={{ fontSize: 15, marginLeft: '10px', marginRight: '15px' }}>{item.title.substring(0, 25)}</Typography>
            <Typography sx={{ fontSize: 15, marginLeft: '10px', marginRight: '15px' }}>({getItemQuantity(item.id)}) <b>$ {getItemQuantity(item.id) * item.price}</b></Typography>
            <Button onClick={() => handleDecrementClick(item.id, item.price, getItemQuantity(item.id))} sx={{ fontSize: 12, padding: 0, width: '10px' }} variant="outlined" color="primary">-</Button>
            <Button onClick={() => handleIncrementClick(item.id, item.price, getItemQuantity(item.id))} sx={{ fontSize: 12, padding: 0, width: '10px', marginLeft: '5px' }} variant="outlined" color="primary">+</Button>
        </ListItem>
    )
}