import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutPersonalDetails() {
  const passwordShow = useBoolean();

  return (
    <>
     

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <RHFTextField name="firstName" label="الاسم الأول" />

        <RHFTextField name="lastName" label="اسم العائلة" />

        

        <RHFTextField name="phoneNumber" label="رقم الهاتف" />

       
      </Box>
    </>
  );
}
