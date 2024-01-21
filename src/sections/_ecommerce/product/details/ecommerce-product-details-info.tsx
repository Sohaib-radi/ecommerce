import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import ProductPrice from '../../common/product-price';
import ProductColorPicker from '../../common/product-color-picker';
import ProductOptionPicker from '../../common/product-option-picker';
import { useCart } from 'src/app/context/CartContext';
// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

type Props = {
  id:number;
  name: string;
  price: number;
  ratingNumber: number;
  totalReviews: number;
  priceSale: number;
  caption: string;
};

export default function EcommerceProductDetailsInfo({
  id,
  name,
  price,
  ratingNumber,
  totalReviews,
  priceSale,
  caption,
}: Props) {
  const { addToCart } = useCart();
  const mdUp = useResponsive('up', 'md');
  const [color, setColor] = useState('red');
  const [memory, setMemory] = useState('128gb');
  const [quantity,setQuantity] = useState(1);
 
  const handleAddToCart = () => {
    // Create a CartItem with necessary details
  
    const newItem = {
      id,
      name,
      quantity, // Assuming a default quantity of 1 for simplicity
    };
    addToCart(newItem);
  };
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value)); // Update the quantity state when the user selects a value
  };
  const handleChangeColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  }, []);

  const handleChangeMemory = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMemory((event.target as HTMLInputElement).value);
  }, []);

  return (
    <>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {name} </Typography>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Rating size="small" value={ratingNumber} readOnly precision={0.5} />

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            ({totalReviews} reviews)
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h5' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {caption}
        </Typography>
      </Stack>

      <Stack spacing={3} sx={{ my: 5 }}>
        
      </Stack>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <TextField
          select
          onChange={handleQuantityChange}
          hiddenLabel
          SelectProps={{
            native: true,
          }}
          sx={{
            minWidth: 100,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleAddToCart}
            fullWidth={!mdUp}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          >
            أضف إلى السلة

          </Button>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            fullWidth={!mdUp}
            size="large"
            color="primary"
            variant="contained"
          >
            شراء المنتج الآن
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

  
    </>
  );
}
