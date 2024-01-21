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
    id: '5',
    stock: 150,
    name: 'صابونة المسك الاسود', 
    description: `صابونة المسك الأسود" هي تحفة فاخرة في عالم العناية بالبشرة، حيث تجمع بين روعة رائحة المسك الأسود الفاخرة وفوائد تنظيف عميقة. تم اختيار أفخر المكونات لتركيب هذه الصابونة لتمنحك تجربة استحمام فاخرة ومميزة. يعتبر المسك الأسود من بين أثمن الروائح التي تضفي على البشرة لمسة من الأناقة والجاذبية. تعمل هذه الصابونة على تنظيف البشرة بلطف، مع الحفاظ على توازن الزيوت الطبيعية وترطيبها. اجعلي "صابونة المسك الأسود" جزءًا من روتين العناية بالجسم اليومي لتستمتعي ببشرة ناعمة ورائحة فريدة تميزك بأناقة.
`,
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption:`
    صابونة المسك الأسود" هي تحفة فاخرة تجمع بين سحر رائحة المسك الأسود وقوة التنظيف الفعّالة. تم اختيار أرقى المكونات لإبتكار هذه الصابونة الفاخرة التي تمنح تجربة استحمام استثنائية. رائحة المسك الأسود تضفي على البشرة لمسة من الأناقة والجاذبية، بينما يقوم الصابون بتنظيف البشرة بلطف والمحافظة على توازنها الطبيعي. اجعل "صابونة المسك الأسود" رفيقًا لا غنى عنه في روتين العناية بالجسم، حيث تمنحك بشرة ناعمة ومشعة بالأناقة والجمال.
    `,
    coverUrl: '/assets/images/misk/stickMaron/2.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/blackSavon/1.png', '/assets/images/misk/blackSavon/2.png','/assets/images/misk/blackSavon/3.png', '/assets/images/misk/blackSavon/4.png'],
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
              id={5}
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
                { label: 'الرقم التسلسلي', value: '85696726685911' },
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
