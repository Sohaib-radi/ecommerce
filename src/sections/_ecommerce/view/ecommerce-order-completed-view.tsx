'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function EcommerceOrderCompletedView() {
  return (
    <Container
      component={MotionContainer}
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <m.div variants={varBounce().in}>
        <Box sx={{ fontSize: 128 }}>🎉</Box>
      </m.div>

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h3">لقد تم إستلام طلبكم بنجاح !!!</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
        سيتواصل معكم قسم المبيعات في أقرب وقت، لتأكيد معلوماتكم
        </Typography>
      </Stack>

      <Button
        component={RouterLink}
        href={paths.eCommerce.products}
        size="large"
        color="inherit"
        variant="contained"
        startIcon={<Iconify icon="carbon:chevron-left" />}
      >
       العودة إلى المتجر 


      </Button>
    </Container>
  );
}
