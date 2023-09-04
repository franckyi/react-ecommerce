import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BasicButtonGroup from './ButtonGroup';
import { CartContext } from '../../context/cartContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductCard(props) {
  const [value, setValue] = React.useState<number | null>(2);
  const [counter, setCounter] = React.useState(1);
  const { cart, setCart } = React.useContext(CartContext);
  const [newItem, setNewItem] = React.useState(null);

  // MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddItem = () => {
    console.log('handleAddItem()')
    console.log('counter:', counter)
    console.log('cart:', cart)
    // let newItem = cart.products.slice().concat(props.item);
    // console.log('newItem:', newItem)

    // IDENTIFY AND SET NEW ITEM
    setNewItem(props.item)

    // THEN CONCAT THAT ITEM TO CURRENT ARRAY

    // LASTLY SET THAT ARRAY AS PRODUCTS IN SETCART

    // setCart({
    //   ...cart,
    //   products: ,
    // })
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-box">
          <div className="col">
            <Typography id="modal-modal-title" sx={{ fontSize: 18, fontWeight: 800, maxWidth: '70%' }} component="h3">
              {props.item.title}
            </Typography>
            <img
              className="product-img"
              src={props.item.image}
              alt={props.item.title}
              height="350"
              draggable="false"
            />
          </div>
          <div className="col">
            <div className="rating">
              <Rating
                name="simple-controlled"
                value={props.item.rating.rate}
                size="small"
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography id="modal-modal-rating" sx={{ fontSize: 12, display: 'inline', ml: 2 }}>
                voted by {props.item.rating.count} users
              </Typography>
            </div>
            <p>Categories / <span className="label">{props.item.category}</span></p>
            <Typography id="modal-modal-description" sx={{ fontSize: 14 }}>
              {props.item.description}
            </Typography>
            <div className="d-flex">
              <BasicButtonGroup counter={counter} setCounter={setCounter} />
              <Typography gutterBottom variant="span" component="div" className='product-list__item--price'>
                $ {(props.item.price * counter).toFixed(2)}
              </Typography>
            </div>
            // TODO
            <Button size="small" color="primary" variant="contained">Add to cart</Button>
            <img
              src="payments.png"
              alt="Our payment methods"
              width="300"
              draggable="false"
            />
          </div>
        </Box>
      </Modal>

      <Card sx={{ maxWidth: 320 }} className='product-list__item'>
        <div onClick={handleOpen} className="product-list__upper-part-modal">
          <CardMedia
            component="img"
            alt={props.item.title}
            height="220"
            image={props.item.image}
          />
          <CardContent className='product-list__item--content'>
            <Typography gutterBottom variant="span" component="div" className='product-list__item--title'>
              {props.item.title}
            </Typography>
            <div className='d-flex'>
              <Rating
                name="simple-controlled"
                value={props.item.rating.rate}
                size="small"
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography gutterBottom variant="span" component="div" className='product-list__item--price'>
                $ {(props.item.price * counter).toFixed(2)}
              </Typography>
            </div>
          </CardContent>
        </div>
        <CardActions className='product-list__item--cta'>
          <BasicButtonGroup counter={counter} setCounter={setCounter} />
          <Button onClick={handleAddItem} size="small" color="primary" variant="outlined">Add to cart</Button>
        </CardActions>
      </Card>
    </>
  );
}