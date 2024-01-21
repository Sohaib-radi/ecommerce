import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function CareerContactForm() {
  const CareerContactSchema = Yup.object().shape({
    fullName: Yup.string().required('الإسم الكامل ضروري'),
    email: Yup.string().required('البريد الالكتروني مطلوب').email('هذه ليست رسالة بريد إلكتروني'),
    subject: Yup.string().required('الموضوع مطلوب'),
    message: Yup.string().required('الرسالة مطلوبة'),
  });

  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(CareerContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container
      sx={{
        py: 5,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid xs={12} md={8}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h3">أترك لنا رسالة </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            نرد عادةً خلال يومي عمل
            </Typography>
          </Stack>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5}>
              <RHFTextField name="fullName" label="الإسم الكامل" />

              <RHFTextField name="email" label="البريد الالكتروني" />

              <RHFTextField name="subject" label="الموضوع" />

              <RHFTextField name="message" multiline rows={4} label="الرسالة" sx={{ pb: 2.5 }} />

              <Stack alignItems="center" width={1}>
                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                >
                  أرسل رسالة
                </LoadingButton>
              </Stack>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
