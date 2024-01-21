import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IProductItemProps } from 'src/types/product';

import EcommerceProductViewListItem from '../item/ecommerce-product-view-list-item';
import EcommerceProductViewGridItem from '../item/ecommerce-product-view-grid-item';
import EcommerceProductViewListItemSkeleton from '../item/ecommerce-product-view-list-item-skeleton';
import EcommerceProductViewGridItemSkeleton from '../item/ecommerce-product-view-grid-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemProps[];
  viewMode: string;
  loading?: boolean;
};

const staticProducts = [
  {
    id: '1',
    stock: 150,
    name: 'ﺷﺎﻣﺒﻮ اﻟﻤﺴﻚ اﻷﺳﻮد', 
    description: '   تم تصميم شامبو المسك الأسود الأصلي للعناية بالشعر لتزويدك بتجربة ممتعة فريدة من نوعها للعناية بالشعر. يتكون هذا المزيج الفعال من المسك الأسود الأصلي وزيت الأرغان ، ويعمل بشكل متناغم لتغذية وتجديد شباب شعرك. تضفي إضافة المسك الأسود الخام لمسة من الفخامة ورائحة ساحرة ، بينما يرطب زيت الأرجان خيوط شعرك بعمق ، ويتركها كالحرير والنعومة وسهلة التصفيف. بمكوناته الطبيعية وتركيزه على تعزيز صحة فروة الرأس ونمو الشعر ، يقدم شامبو المسك الأسود الأصلي خياراً فاخراً ومثالياً لمن يبحثون عن روتين جديد ومبتكر للعناية بالشعر.    ',
    category: 'Category 1',
    price: 179,
    sold: 5,
    caption: 'شامبو المسك الأسود الأصلي للعناية بالشعر لتزويدك بتجربة ممتعة فريدة من نوعها للعناية بالشعر. يتكون هذا المزيج الفعال من المسك الأسود الأصلي وزيت الأرغان ،',
    coverUrl: '/assets/images/misk/champo/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/champo/1.png', '/assets/images/misk/champo/2.png','/assets/images/misk/champo/3.png', '/assets/images/misk/champo/4.png'],
},
  {
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
    coverUrl: '/assets/images/misk/champohijab/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'New Arrival',
    priceSale: 299,
    images: ['/assets/images/misk/champohijab/1.png', '/assets/images/misk/champohijab/2.png','/assets/images/misk/champohijab/3.png', '/assets/images/misk/champohijab/4.png'],
},
  {
    id: '3',
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
    coverUrl: '/assets/images/misk/stickMaron/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'NEW',
    priceSale: 299,
    images: ['/assets/images/misk/stickMaron/1.png', '/assets/images/misk/stickMaron/2.png','/assets/images/misk/stickMaron/3.png', '/assets/images/misk/stickMaron/4.png'],
},
  {
    id: '4',
    stock: 150,
    name: 'مناديل مسك المزيلة للعرق', 
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
    coverUrl: '/assets/images/misk/langete/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'NEW',
    priceSale: 299,
    images: ['/assets/images/misk/langete/1.png', '/assets/images/misk/langete/2.png','/assets/images/misk/langete/3.png', '/assets/images/misk/langete/4.png'],
},
  {
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
    coverUrl: '/assets/images/misk/blackSavon/1.png',
    ratingNumber: 4.5,
    totalReviews: 10,
    label: 'NEW',
    priceSale: 299,
    images: ['/assets/images/misk/blackSavon/1.png', '/assets/images/misk/blackSavon/2.png','/assets/images/misk/blackSavon/3.png', '/assets/images/misk/blackSavon/4.png'],
},

]


export default function EcommerceProductList({ loading, viewMode, products }: Props) {
  return (
    <>
      {viewMode === 'grid' ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {(loading ? [...Array(5)] : staticProducts).map((product, index) =>
            product ? (
              <EcommerceProductViewGridItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewGridItemSkeleton key={index} />
            )
          )}
        </Box>
      ) : (
        <Stack spacing={4}>
          {(loading ? [...Array(5)] : staticProducts).map((product, index) =>
            product ? (
              <EcommerceProductViewListItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewListItemSkeleton key={index} />
            )
          )}
        </Stack>
      )}

      
    </>
  );
}
