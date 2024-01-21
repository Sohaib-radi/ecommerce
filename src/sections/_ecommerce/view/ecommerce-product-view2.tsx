'use client';

import { useEffect } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import { _products } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ReviewEcommerce from '../../review/ecommerce/review-ecommerce';
import EcommerceProductDetailsInfo from '../product/details/ecommerce-product-details-info';
import EcommerceProductDetailsCarousel from '../product/details/ecommerce-product-details-carousel';
import EcommerceProductDetailsDescription from '../product/details/ecommerce-product-details-description';

// ----------------------------------------------------------------------

const _mockProduct = {
    id: '2',
    stock: 150,
    name: 'شامبو للمحجبات بالمسك الاسود', 
    description: `
      شامبو للمحجبات بالمسك الأسود" هو منتج مصمم خصيصًا لتلبية احتياجات الشعر المحجب. 
      يتميز بتركيبة فريدة تجمع بين خصائص تنظيف عميقة والعناية بالشعر. يحتوي على مستخلصات المسك الأسود التي تضفي 
      على الشعر لمعانًا جميلاً وتمنحه رائحة فاخرة وجذابة. /n

      تعمل هذه التركيبة على تنظيف فروة الرأس بلطف، مع الحفاظ على توازن الزيوت الطبيعية للشعر. يساعد في ترطيب 
      الشعر وتقويته، مما يسهم في تحسين ملمسه وسهولة تصفيفه.

      استخدام "شامبو للمحجبات بالمسك الأسود" سيمنحك تجربة استحمام لطيفة وفاخرة، مع الاستفادة من فوائد المسك 
      الأسود للحصول على شعر صحي وجميل.
    `,
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption:'شامبو للمحجبات بالمسك الأسود هو منتج مصمم خصيصًا لتلبية احتياجات الشعر المحجب. يتميز بتركيبة فريدة تجمع بين خصائص تنظيف عميقة والعناية بالشعر. يحتوي على مستخلصات المسك الأسود التي تضفي على الشعر لمعانًا جميلاً وتمنحه رائحة فاخرة وجذابة.',
    coverUrl: '/assets/images/misk/stickMaron/2.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/champohijab/1.png', '/assets/images/misk/champohijab/2.png','/assets/images/misk/champohijab/3.png', '/assets/images/misk/champohijab/4.png'],
}


export default function EcommerceProductView() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            {
              name: 'الصفحة الرئيسية',
            },
            {
              name: _mockProduct.name,
            },
          ]}
          sx={{ my: 5 }}
        />

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsCarousel images={_mockProduct.images} />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <EcommerceProductDetailsInfo
              id={2}
              name={_mockProduct.name}
              price={_mockProduct.price}
              caption={_mockProduct.caption}
              priceSale={_mockProduct.priceSale}
              ratingNumber={_mockProduct.ratingNumber}
              totalReviews={_mockProduct.totalReviews}
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsDescription
              description={_mockProduct.description}
              specifications={[
               
                { label: 'صنع في', value: 'تركيا' },
                { label: 'طريقه الدفع', value: 'الدفع عند الاستلام' },
                { label: 'الرقم التسلسلي', value: '658607726685911' },
                { label: 'يشحن من', value: 'تركيا' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>

      <ReviewEcommerce />
    </>
  );
}
