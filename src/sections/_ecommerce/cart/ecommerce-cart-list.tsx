import Stack from '@mui/material/Stack';

import Scrollbar from 'src/components/scrollbar';

import { IProductItemProps } from 'src/types/product';

import EcommerceCartItem from './ecommerce-cart-item';
import { Key, useEffect, useState } from 'react';

// ----------------------------------------------------------------------

type Props = {
  products: any;
  wishlist?: boolean;
};

export default function EcommerceCartList({ products, wishlist = false }: Props) {

  return (
    <Scrollbar>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          py: 2,
          minWidth: 720,
          typography: 'subtitle2',
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Stack flexGrow={1}>المنتج</Stack>
        <Stack sx={{ width: 120 }}>الكمية  </Stack>
        <Stack sx={{ width: 120 }}>المجموع </Stack>
        <Stack sx={{ width: 36 }} />
        {wishlist && <Stack sx={{ width: 36 }} />}
      </Stack>

      {products.map((product: { id: Key | null | undefined; }) => (
        <EcommerceCartItem key={product.id}  product={product} wishlist={wishlist} />
      ))}
    </Scrollbar>
  );
}
