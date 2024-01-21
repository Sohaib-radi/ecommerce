import { add } from 'date-fns';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';

import ProductColorPicker from '../common/product-color-picker';
import ProductOptionPicker from '../common/product-option-picker';
import ProductCountdownBlock from '../common/product-countdown-block';

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

export default function EcommerceLandingSpecialOffer() {
  const [color, setColor] = useState('red');

  const [memory, setMemory] = useState('128gb');

  const handleChangeColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  }, []);

  const handleChangeMemory = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMemory((event.target as HTMLInputElement).value);
  }, []);

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        فرصة خاصة
      </Typography>

      <Box
        gap={{ xs: 5, md: 8 }}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        <SpecialOfferCountdown
          label="جديد 2024"
          name="بوكس زفاف من مسك"
          price="فقط  $199"
          expired={add(new Date(), { days: 1, hours: 8 })}
        />

        <Box sx={{ borderRadius: 1.5, bgcolor: 'background.neutral' }}>
          <Image src='/assets/images/misk/mariage.png' />
        </Box>

        <SpecialOfferBuyNow
          color={color}
          memory={memory}
          onChangeColor={handleChangeColor}
          onChangeMemory={handleChangeMemory}
        />
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

interface SpecialOfferCountdownProps extends StackProps {
  expired: Date;
  label: string;
  name: string;
  price: string;
}

function SpecialOfferCountdown({
  expired,
  label,
  name,
  price,
  sx,
  ...other
}: SpecialOfferCountdownProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        borderRadius: 2,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z24,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        {label}
      </Typography>

      <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>
        {name}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          px: 2,
          py: 1,
          borderRadius: 1,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }}
      >
        199$
      </Typography>

      <Divider sx={{ borderStyle: 'dashed', my: 3, width: 1 }} />

      <Typography variant="body2" sx={{ mb: 2 }}>
      ينتهي العرض في :
      </Typography>

      <ProductCountdownBlock
        expired={expired}
        sx={{
          '& .value': {
            color: 'text.primary',
            bgcolor: 'transparent',
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
          },
          '& .label': { color: 'text.secondary' },
          '& .separator': { color: 'inherit' },
        }}
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

interface SpecialOfferBuyNowProps extends StackProps {
  color: string;
  memory: string;
  onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMemory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SpecialOfferBuyNow({
  color,
  memory,
  onChangeColor,
  onChangeMemory,
  ...other
}: SpecialOfferBuyNowProps) {
  return (
    <Stack spacing={3} alignItems="flex-start" {...other}>
      <Stack spacing={1}>
        <Typography variant="h3">بوكس زفاف من مسك</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <ul>
            <li>
            ١/٢ تولة مسك غزال مُركز

            </li>
            <li>
            ٥ مناديل مسك الطهارة للمناطق الحساسة

            </li>
            <li>
            ٥ مناديل مسك المزيلة للعرق

            </li>
            <li>
            ٢ سائل الاستحمام بالمسك الأسود

            </li>
            <li>
            ١ معطر الشعر والجسم بالمسك الأسود

            </li>
            <li>
            ١ صابونة المسك الأسود بالفحم المنشط

            </li>
            <li>
            ١ شامبو بالمسك الأسود

            </li>
            <li>
            ١ شامبو المحجبات بالمسك الأسود

            </li>
          </ul>
        </Typography>
      </Stack>

      
      <Button size="large" color="inherit" variant="contained">
        Buy Now
      </Button>
    </Stack>
  );
}
