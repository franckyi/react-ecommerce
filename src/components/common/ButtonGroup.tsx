import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
// import { useContext } from 'react';

export default function BasicButtonGroup() {
    const [counter, setCounter] = useState(1);
    // const { order, setOrder } = useContext(OrderContext);

    return (
        <ButtonGroup variant="outline" aria-label="outlined primary button group">
            <Button onClick={() => setCounter(counter - 1)}>-</Button>
            <span>{counter}</span>
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
        </ButtonGroup>
    );
}