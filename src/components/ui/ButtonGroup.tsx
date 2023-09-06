import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCart } from '../../context/cartContext';
import { BasicButtonGroupProps } from '../../types/basicButtonGroupProps';

export default function BasicButtonGroup({ currentProduct }: BasicButtonGroupProps) {
    const { getItemQuantity, handleDecrementClick, handleIncrementClick } = useCart();
    const quantity = getItemQuantity(currentProduct.id);

    return (
        <ButtonGroup aria-label="outlined primary button group">
            <Button variant="text" disabled={quantity < 1} onClick={() => handleDecrementClick(currentProduct.id, currentProduct.price, quantity)}>-</Button>
            {quantity > 0 && <span>{quantity}</span>}
            <Button variant="text" onClick={() => handleIncrementClick(currentProduct.id, currentProduct.price, quantity)}>+</Button>
        </ButtonGroup>
    )
}