'use client';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _products } from 'src/_mock';

import Iconify from 'src/components/iconify';

import EcommerceCartList from '../cart/ecommerce-cart-list';
import EcommerceCartSummary from '../cart/ecommerce-cart-summary';
import { useEffect, useState } from 'react';
import { AnyAaaaRecord } from 'dns';
import staticProducts, { Product } from 'src/_mock/myProduct';
// ----------------------------------------------------------------------

export default function EcommerceCartView() {
  const [matchedProducts, setMatchedProducts] = useState<any[]>([]);
  const [ammountTotal, setAmmountTotal] = useState(0);

useEffect(() => {
  const totalSum = matchedProducts.reduce((sum, item) => {
    // Ensure that item.price and item.quantity are valid numbers
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.quantity) || 0;

    // Add the product of price and quantity to the running sum
    return sum + price * quantity;
  }, 0);

  // Set the calculated totalSum in the state
  setAmmountTotal(totalSum);
}, [matchedProducts]);
  useEffect(() => {
    
    const getItemFromLocalStorage = () => {
      if (typeof window !== 'undefined') {
        const storedItems = localStorage.getItem('cartItems');
        const matchingProducts = [];

        if (storedItems) {
          const items = JSON.parse(storedItems);

          // Filter staticProducts based on the IDs in local storage
          for (const staticProduct of staticProducts) {
            // Loop through each item in local storage
            for (const item of items) {
               
              // Check if the IDs match
              if ((String(item.id) === String(staticProduct.id))) {
                // If match found, add the staticProduct to matchingProducts
                staticProduct.quantity = item.quantity;
                matchingProducts.push(staticProduct);
                break; // Break the inner loop, as we found a match
              }
            }
          }
        }

        return matchingProducts;
      }

      return [];
    };

    const productsFromLocalStorage = getItemFromLocalStorage();
    setMatchedProducts(productsFromLocalStorage);
  }, []); 
  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }}>
        سلة المشتريات  
      </Typography>

      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={8}>
          <EcommerceCartList products={matchedProducts} />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceCartSummary
            tax={0}
            total={ammountTotal}
            subtotal={ammountTotal}
            shipping={0}
            discount={0}
          />
        </Grid>
      </Grid>

      <Button
        component={RouterLink}
        href={paths.eCommerce.products}
        color="inherit"
        startIcon={<Iconify icon="carbon:chevron-left" />}
        sx={{ mt: 3 }}
      >
        إضافة منتجات أخرى  
      </Button>
    </Container>
  );
}
