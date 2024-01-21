import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerContactInfo() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 2 },
        textAlign: { xs: 'center', md: 'center' },
      }}
    >
      <Typography variant="h2">ابقى على تواصل</Typography>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          mb: { xs: 3, md: 5 },
        }}
      >{`سنكون سعداء بخدمتكم، سنجيب على كل تساؤلاتكم`}</Typography>

      <Stack justifyContent={'center'} alignItems={'between'} spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }} textAlign={{ xs: 'center', md: 'center' }}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">بريد إلكتروني</Typography>

          <Link variant="body2" color="inherit" href="contact@themisk.com">
            contact@themisk.com
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">الهاتف </Typography>

          <Typography variant="body2">(+90) 5360231109</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">العنوان </Typography>

          <Typography variant="body2">ساناي، تكنوبارك بوليفارد رقم: 1 د:9أ، 34906 بنديك/اسطنبول</Typography>
        </Stack>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'center' }}>
          <Typography variant="subtitle2">تابعنا</Typography>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="inherit">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
