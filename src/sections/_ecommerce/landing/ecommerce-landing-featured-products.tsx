import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _products } from 'src/_mock';

import EcommerceProductItemHot from '../product/item/ecommerce-product-item-hot';
import EcommerceProductItemCountDown from '../product/item/ecommerce-product-item-count-down';

// ----------------------------------------------------------------------

const staticProducts = [
  {
    id: '1',
    stock: 10,
    name: 'ﺷﺎﻣﺒﻮ اﻟﻤﺴﻚ اﻷﺳﻮد', description: '  جل الاستحمام الكريمي برائحة المسك هو تجربة حمام فاخرة تمزج بين نعومة الجل ورقة الكريم، مع رائحة المسك الساحرة. يمنحك هذا الجل تنظيفًا فعّالًا وفاخرًا لبشرتك، في حين يترك رائحة المسك الرائعة تحفز حواسك وتمنحك لحظات استرخاء لا مثيل لها. استمتع بتجربة الاستحمام الفاخرة مع هذا الجل الكريمي الذي يضفي لمسة من الفخامة إلى روتينك اليومي,',
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption: 'Featured Product',
    coverUrl: '/assets/images/misk/champo/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 19.99,
    images: ['image1.jpg', 'image2.jpg'],
  },

  {
    id: '2',
    stock: 10,
    name: 'جل استحمام كريمي برائحة المسك',
    description: 'جل الاستحمام الكريمي برائحة المسك هو تجربة حمام فاخرة تمزج بين نعومة الجل ورقة الكريم، مع رائحة المسك الساحرة. يمنحك هذا الجل تنظيفًا فعّالًا وفاخرًا لبشرتك، في حين يترك رائحة المسك الرائعة تحفز حواسك وتمنحك لحظات استرخاء لا مثيل لها. استمتع بتجربة الاستحمام الفاخرة مع هذا الجل الكريمي الذي يضفي لمسة من الفخامة إلى روتينك اليومي',
    category: 'Category 1',
    price: 179.99,
    sold: 5,
    caption: 'Featured Product',
    coverUrl: '/assets/images/misk/geldoush/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 19.99,
    images: ['image1.jpg', 'image2.jpg'],
  },
  
  // Add more static products as needed
];

const staticHotProducts = [
  {
    id: '3',
    stock: 10,
    name: ' ﻣﺴﺖ ﺑﺎﻟﻤﺴﻚ اﻷﺳﻮد ﻟﻠﺠﺴﻢ واﻟﺸﻌر', description: '  جل الاستحمام الكريمي برائحة المسك هو تجربة حمام فاخرة تمزج بين نعومة الجل ورقة الكريم، مع رائحة المسك الساحرة. يمنحك هذا الجل تنظيفًا فعّالًا وفاخرًا لبشرتك، في حين يترك رائحة المسك الرائعة تحفز حواسك وتمنحك لحظات استرخاء لا مثيل لها. استمتع بتجربة الاستحمام الفاخرة مع هذا الجل الكريمي الذي يضفي لمسة من الفخامة إلى روتينك اليومي,',
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption: 'Featured Product',
    coverUrl: '/assets/images/misk/stickMaron/2.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 19.99,
    images: ['image1.jpg', 'image2.jpg'],
  },

  {
    id: '4',
    stock: 10,
    name: 'مناديل-مبللة-لإزالة-العرق',
    description: 'جل الاستحمام الكريمي برائحة المسك هو تجربة حمام فاخرة تمزج بين نعومة الجل ورقة الكريم، مع رائحة المسك الساحرة. يمنحك هذا الجل تنظيفًا فعّالًا وفاخرًا لبشرتك، في حين يترك رائحة المسك الرائعة تحفز حواسك وتمنحك لحظات استرخاء لا مثيل لها. استمتع بتجربة الاستحمام الفاخرة مع هذا الجل الكريمي الذي يضفي لمسة من الفخامة إلى روتينك اليومي',
    category: 'Category 1',
    price: 179.99,
    sold: 5,
    caption: 'Featured Product',
    coverUrl: '/assets/images/misk/stick/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 19.99,
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    id: '2',
    stock: 10,
    name: 'شامبو للمحجبات بالمسك الاسود', 
    description: 'شامبو للمحجبات بالمسك الأسود يقدم رعاية فائقة لشعرك. تركيبته الفريدة تجمع بين فوائد تنظيف عميقة ورعاية متخصصة، مما يساعد على الحفاظ على صحة الشعر بشكل مثالي. يحتوي الشامبو على مستخلصات المسك الأسود التي تعزز لمعان الشعر وتمنحه رائحة جذابة ودائمة. تصميمه خصيصاً لتلبية احتياجات المحجبات، يساعد في تحقيق توازن مثالي بين النظافة والترطيب، مما يجعل شعرك يبدو صحيًا وجميلاً في كل مرة تستخدمين فيها الشامبو. افتحي أبواب العناية الفعّالة لشعرك مع هذا الشامبو الذي يعتني بجمالك الطبيعي.', 
    category: 'Category 1',
    price: 179.99,
    sold: 5,
    caption: 'Featured Product',
    coverUrl: '/assets/images/misk/champohijab/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 19.99,
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    id: '5',
    stock: 10,
    name: 'صابونة المسك الاسود', 
    description: 'صابونة المسك الأسود تعتبر رفيقًا فاخرًا في روتين العناية بالبشرة. تمتاز بتركيبتها الغنية والفاخرة التي تجمع بين فوائد فعّالة لتنظيف البشرة وتغذيتها. تحتوي الصابونة على رائحة المسك الأسود الفريدة، مما يمنح تجربة استحمام غنية بالحس الفاخر والجاذبية.', 
    category: 'Category 1',
    price: 179.99,
    sold: 5,
    caption: 'Featured Product',
    coverUrl: '/assets/images/misk/blackSavon/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 120.99,
    images: ['image1.jpg', 'image2.jpg'],
  },
  
  // Add more static products as needed
];
export default function EcommerceLandingFeaturedProducts() {
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
        المنتجات المميّزة
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} lg={8}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            {staticProducts.map((product, index) => (
              <EcommerceProductItemCountDown
                key={product.id}
                product={product}
                color={index === 0 ? 'primary' : 'secondary'}
              />
            ))}
          </Box>
        </Grid>

        <Grid xs={12} lg={4}>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(2, 1fr)',
            }}
          >
            {staticHotProducts.map((product) => (
              <EcommerceProductItemHot key={product.id} product={product} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
