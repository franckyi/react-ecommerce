import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCart } from '../../context/cartContext';

export default function BasicButtonGroup({ currentProduct }) {
    const { getItemQuantity, incrementItemQuantity, decrementItemQuantity } = useCart();
    const quantity = getItemQuantity(currentProduct.id);

    return (
        <ButtonGroup variant="outline" aria-label="outlined primary button group">
            <Button disabled={quantity < 1} onClick={() => decrementItemQuantity(currentProduct.id)}>-</Button>
            {quantity > 0 && <span>{quantity}</span>}
            <Button onClick={() => incrementItemQuantity(currentProduct.id)}>+</Button>
        </ButtonGroup>
    )
}