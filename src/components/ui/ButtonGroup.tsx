import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCart } from '../../context/cartContext';
// import { useState } from 'react';
// import { useContext } from 'react';

export default function BasicButtonGroup({ currentProduct }) {
    const { getItemQuantity, incrementItemQuantity, decrementItemQuantity, removeFromCart } = useCart();
    const quantity = getItemQuantity(currentProduct.id);

    return (
        <ButtonGroup variant="outline" aria-label="outlined primary button group">
            {/* <Button disabled={counter < 2} onClick={() => setCounter(counter - 1)}>-</Button>
            <span>{counter}</span>
            <Button onClick={() => setCounter(counter + 1)}>+</Button> */}
            <Button disabled={quantity < 1} onClick={() => decrementItemQuantity(currentProduct.id)}>-</Button>
            {quantity > 0 && <span>{quantity}</span>}
            <Button onClick={() => incrementItemQuantity(currentProduct.id)}>+</Button>
        </ButtonGroup>
    )
}