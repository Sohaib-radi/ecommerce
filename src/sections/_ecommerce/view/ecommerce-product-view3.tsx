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
    name: 'ﻣﺴﺖ ﺑﺎﻟﻤﺴﻚ اﻷﺳﻮد ﻟﻠﺠﺴﻢ واﻟﺸﻌر', 
    description: `مست المسك الأسود" هو منتج فريد يجمع بين رائحة المسك الأسود الفاخرة وفوائد مستخلصات الأعشاب الطبيعية. تم اختيار أفخر أنواع المسك الأسود بعناية فائقة لتقديم تجربة فاخرة للعناية بالجسم.

    تمتاز هذه التركيبة برائحة المسك الأسود الفريدة التي تضفي على بشرتك لمسة من الأناقة والجاذبية. يمنحك "مست المسك الأسود" إحساسًا بالانتعاش والنعومة، مع الاستمتاع بتأثيرات مهدئة للحواس.
    
    استخدم "مست المسك الأسود" لتجربة استحمام مميزة، حيث يترك بشرتك ناعمة ومعطرة برائحة المسك الأسود الفاخرة، مما يضفي لمسة من الفخامة والجمال على روتين العناية بالجسم اليومي.
    `,
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption:`
    استخدم "مست المسك الأسود" لتجربة استحمام مميزة، حيث يترك بشرتك ناعمة ومعطرة برائحة المسك الأسود الفاخرة، مما يضفي لمسة من الفخامة والجمال على روتين العناية بالجسم اليومي. اختبر جمال الراحة والانغماس في عالم من الهدوء، مع كل قطرة من "مست المسك الأسود" التي تلامس بشرتك كأنها لحن هادئ يلامس أعماق القلب.    `,
    coverUrl: '/assets/images/misk/stickMaron/2.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/stickMaron/1.png', '/assets/images/misk/stickMaron/2.png','/assets/images/misk/stickMaron/3.png', '/assets/images/misk/stickMaron/4.png'],
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
              id={3}
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
