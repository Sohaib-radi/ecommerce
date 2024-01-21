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
    id: '1',
    stock: 150,
    name: 'ﺷﺎﻣﺒﻮ اﻟﻤﺴﻚ اﻷﺳﻮد', 
    description: '   تم تصميم شامبو المسك الأسود الأصلي للعناية بالشعر لتزويدك بتجربة ممتعة فريدة من نوعها للعناية بالشعر. يتكون هذا المزيج الفعال من المسك الأسود الأصلي وزيت الأرغان ، ويعمل بشكل متناغم لتغذية وتجديد شباب شعرك. تضفي إضافة المسك الأسود الخام لمسة من الفخامة ورائحة ساحرة ، بينما يرطب زيت الأرجان خيوط شعرك بعمق ، ويتركها كالحرير والنعومة وسهلة التصفيف. بمكوناته الطبيعية وتركيزه على تعزيز صحة فروة الرأس ونمو الشعر ، يقدم شامبو المسك الأسود الأصلي خياراً فاخراً ومثالياً لمن يبحثون عن روتين جديد ومبتكر للعناية بالشعر.    ',
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption: 'شامبو المسك الأسود الأصلي للعناية بالشعر لتزويدك بتجربة ممتعة فريدة من نوعها للعناية بالشعر. يتكون هذا المزيج الفعال من المسك الأسود الأصلي وزيت الأرغان ،',
    coverUrl: '/assets/images/misk/stickMaron/2.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/champo/1.png', '/assets/images/misk/champo/2.png','/assets/images/misk/champo/3.png', '/assets/images/misk/champo/4.png'],
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
              name: 'ﻣﺴﺖ ﺑﺎﻟﻤﺴﻚ اﻷﺳﻮد ﻟﻠﺠﺴﻢ واﻟﺸﻌر',
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
              id={1}
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
                { label: 'الرقم التسلسلي', value: '358607726380311' },
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
