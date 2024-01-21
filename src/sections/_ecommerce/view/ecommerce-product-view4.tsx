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
    id: '4',
    stock: 150,
    name: 'ﻣﺴﺖ ﺑﺎﻟﻤﺴﻚ اﻷﺳﻮد ﻟﻠﺠﺴﻢ واﻟﺸﻌر', 
    description: `
    مناديل مبللة لإزالة العرق من مسك مثالية للاستخدام اليومي ، فهي تقضي بشكل فعال على العرق والروائح الكريهة. تشتمل تركيبتها الفريدة على مزيج غني من المكونات التي لا تنظف البشرة فحسب ، بل توفر أيضًا ترطيبًا للبشرة. يساهم مستخلص ساليكس ألبا في إشراق البشرة ومرونتها ، مما يضمن بشرة صحية وحيوية.
تم تصنيع هذه المناديل بعناية مع مجموعة مختارة من المعادن مثل المغنيسيوم والبوتاسيوم والكالسيوم المشتقة من مستخلص ملح البحر الطبيعي. تلبي هذه المعادن المتطلبات المعدنية للبشرة ، وتعزز صحتها بشكل عام. سواء كان لديك اجتماع مهم أو وجدت نفسك في مناسبة طارئة ، فإن مناديل مسك المزيلة للعرق هي رفيقك الموثوق به
باستخدام مناديل مبللة لإزالة العرق من مسك ، يمكنك التخلص من رائحة العرق المزعجة بكل سهولة والاستمتاع بالانتعاش الفوري أينما كنت. إنها توفر حلاً مناسبًا وعمليًا للحفاظ على النظافة الشخصية وتعزيز ثقتك بنفسك طوال اليوم ..
`,
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption:`
    تحقيق التحكم الفعّال في العرق والرائحة يميز مناديل مسك المزيلة للعرق، حيث تعزز الانتعاش الفوري والنشاط بمجرد مسح سريع. العبوة المحمولة تجعلها حلاً مثاليًا للاستخدام أثناء التنقل، مما يجعلها رفيقة مثالية في السفر أو في العمل أو أثناء التمارين الرياضية. تم تصنيع المناديل بمكونات مرطبة تساهم في ترطيب وتغذية البشرة، في حين يترك عبير المسك الأسود الفاخر رائحة لطيفة تدوم طويلاً، وتجعلها مناسبة للاستخدام من قبل الجنسين.

    `,
    coverUrl: '/assets/images/misk/stickMaron/2.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/langete/1.png', '/assets/images/misk/langete/2.png','/assets/images/misk/langete/3.png', '/assets/images/misk/langete/4.png'],
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
              id={4}
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
