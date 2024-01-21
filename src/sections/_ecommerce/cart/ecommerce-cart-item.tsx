import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

import { IProductItemProps } from 'src/types/product';

// ----------------------------------------------------------------------

type Props = {
  product: any;
  wishlist: boolean;
};

export default function EcommerceCartItem({ product, wishlist }: Props) {
  
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 3,
        minWidth: 720,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" gap={2} flexGrow={1}>
        <Image
          src={product.coverUrl}
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        {product.name}
      </Stack>

      <Stack sx={{ width: 120 }}>
       <label>{product.quantity}</label>
      </Stack>

      <Stack sx={{ width: 120, typography: 'subtitle2' }}> ${parseFloat(product.price) * parseFloat(product.quantity)} </Stack>

      <IconButton>
        <Iconify icon="carbon:trash-can" />
      </IconButton>

      {wishlist && (
        <IconButton>
          <Iconify icon="carbon:shopping-cart-plus" />
        </IconButton>
      )}
    </Stack>
  );
}
