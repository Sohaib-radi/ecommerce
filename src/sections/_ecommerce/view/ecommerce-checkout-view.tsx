'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { _products } from 'src/_mock';

import Iconify from 'src/components/iconify';
import FormProvider from 'src/components/hook-form';

import EcommerceCheckoutNewCardForm from '../checkout/ecommerce-checkout-new-card-form';
import EcommerceCheckoutOrderSummary from '../checkout/ecommerce-checkout-order-summary';
import EcommerceCheckoutPaymentMethod from '../checkout/ecommerce-checkout-payment-method';
import EcommerceCheckoutShippingMethod from '../checkout/ecommerce-checkout-shipping-method';
import EcommerceCheckoutShippingDetails from '../checkout/ecommerce-checkout-shipping-details';
import EcommerceCheckoutPersonalDetails from '../checkout/ecommerce-checkout-personal-details';
import staticProducts, { Product } from 'src/_mock/myProduct';
import { useEffect, useState } from 'react';
import { CartProvider, useCart } from 'src/app/context/CartContext'; 


// ----------------------------------------------------------------------

const SHIPPING_OPTIONS = [
  
  
  {
    label: 'شحن سريع',
    value: 'express',
    description: '5-7 أيام عمل ',
    price: 0,
  },
];

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
    description: '**** **** **** 1234',
  },
  {
    label: 'MasterCard',
    value: 'mastercard',
    description: '**** **** **** 3456',
  },
  {
    label: 'Visa',
    value: 'visa',
    description: '**** **** **** 6789',
  },
];

// ----------------------------------------------------------------------

export default function EcommerceCheckoutView() {
  const { resetCart } = useCart();
  const router = useRouter();

  const formOpen = useBoolean();
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
              console.log("item id is:"+item.id +"--- staticProduct is:" + staticProduct.id)
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
  const EcommerceCheckoutSchema = Yup.object().shape({
    firstName: Yup.string().required('الإسم الأول مطلوب'),
    lastName: Yup.string().required('إسم العائلة مطلوب'),
    phoneNumber: Yup.string().required('رقم الهاتف مطلوب'),
    streetAddress: Yup.string().required('العنوان مطلوب  '),
    city: Yup.string().required('المدينة مطلوبة'),

  });

  const defaultValues = {
    firstName: 'Jayvion',
    lastName: 'Simon',
    emailAddress: 'nannie_abernathy70@yahoo.com',
    phoneNumber: '365-374-4961',
    password: '',
    confirmPassword: '',
    streetAddress: '',
    city: '',
    country: '',
    zipCode: '',
    shipping: 'free',
    paymentMethods: 'mastercard',
    newCard: {
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      ccv: '',
    },
  };

  const methods = useForm({
    resolver: yupResolver(EcommerceCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Assuming matchedProducts is an array of items
      const productsToAdd = matchedProducts.map(product => ({
        id: product.id,
        quantity: product.quantity,
        name:product.name,
        price:product.price
      }));
  
      // Assuming your API endpoint is '/api/addOrder'
      const response = await fetch('/api/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderData: data, // Assuming data is the order-related information
          products: productsToAdd,
        }),
      });
  
      if (response.ok) {
        await response.json(); // You can handle the response if needed
        // Reset the form and navigate to the order completed page
        resetCart();
        reset();
        router.push(paths.eCommerce.orderCompleted);
        console.log('Order successfully added:', data);
      } else {
        console.error('Failed to add order:', response.statusText);
      }
    } catch (error) {
      console.error('Error during order submission:', error);
    }
  });

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }}>
        Checkout
      </Typography>

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={8}>
            <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
              <div>
                <StepLabel title="تفاصيل الزبون" step="1" />
                <EcommerceCheckoutPersonalDetails />
              </div>

              <div>
                <StepLabel title="تفاصيل الشحن" step="2" />
                <EcommerceCheckoutShippingDetails />
              </div>

              <div>
                <StepLabel title="طريقة الشحن" step="3" />
                <EcommerceCheckoutShippingMethod options={SHIPPING_OPTIONS} />
              </div>

            
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <EcommerceCheckoutOrderSummary
              tax={0}
              total={ammountTotal}
              subtotal={ammountTotal}
              shipping={0}
              discount={16.17}
              products={matchedProducts}
              loading={isSubmitting}
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}

// ----------------------------------------------------------------------

type StepLabelProps = {
  step: string;
  title: string;
};

function StepLabel({ step, title }: StepLabelProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 3, typography: 'h6' }}>
      <Box
        sx={{
          mr: 1.5,
          width: 28,
          height: 28,
          flexShrink: 0,
          display: 'flex',
          typography: 'h6',
          borderRadius: '50%',
          alignItems: 'center',
          bgcolor: 'primary.main',
          justifyContent: 'center',
          color: 'primary.contrastText',
        }}
      >
        {step}
      </Box>
      {title}
    </Stack>
  );
}
