'use client';

import MainLayout from 'src/layouts/main';
import EcommerceLayout from 'src/layouts/ecommerce';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CartProvider } from 'src/app/context/CartContext';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
  
    <MainLayout>
      <EcommerceLayout>
        <LocalizationProvider dateAdapter={AdapterDayjs}> 
            
              {children}
           
        </LocalizationProvider>
      </EcommerceLayout>
    </MainLayout>
     
  );
}
