import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function ProductCard(props) {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Card sx={{ maxWidth: 320 }} className='product-list__item'>
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
        <Rating
          name="simple-controlled"
          value={props.item.rating.rate}
          size="small"
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardContent>
      <CardActions className='product-list__item--cta'>
        <Typography gutterBottom variant="span" component="div" className='product-list__item--price'>
          $ {props.item.price}
        </Typography>
        <Button size="small" color="primary" variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
}