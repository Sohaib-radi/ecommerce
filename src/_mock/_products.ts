import { _mock } from './_mock';

// ----------------------------------------------------------------------

const NAME = [
  'شامبو للمحجبات بالمسك الاسود',
  'صابونة المسك الاسود',
  'جل استحمام كريمي برائحة المسك',
  'ﺷﺎﻣﺒﻮ اﻟﻤﺴﻚ اﻷﺳﻮد',
  'ﻣﺴﺖ ﺑﺎﻟﻤﺴﻚ اﻷﺳﻮد ﻟﻠﺠﺴﻢ واﻟﺸﻌر',
  'ﻣﺴﻚ اﻟﻐﺰال – اﻟﻤﺴﻚاﻷﺳﻮد',
  'مناديل المسك الأسود',
  'مناديل مبللة لإزالة العرق',
  'بوكس هدية من مسك ٣',
  'Bose QuietComfort',
  'Canon EOS',
  'HP Spectre',
  'LG OLED',
  'Rolex Submariner',
  'Chanel No.5',
  'Louis Vuitton Speedy',
  'Gucci Ace',
  'Ray-Ban Aviator',
  'Herschel Little America',
  'Le Creuset Dutch Oven',
  'Yeti Tumbler',
  'Patagonia Nano Puff',
  'Lululemon Align Leggings',
  'Allbirds Wool Runners',
];

const CATEGORIES = [
  'Electronics',
  'Fashion and Apparel',
  'Home and Garden',
  'Beauty and Personal Care',
  'Health and Wellness',
  'Toys and Games',
  'Sports and Outdoors',
  'Baby and Kids',
  'Automotive and Industrial',
  'Pet Supplies',
  'Food and Beverage',
  'Office and School Supplies',
  'Jewelry and Accessories',
  'Arts and Crafts',
  'Books and Media',
  'Travel and Luggage',
  'Gifts and Flowers',
  'Musical Instruments',
  'Party Supplies',
  'Business and Industrial Supplies',
  'Tools and Hardware',
  'Electronics Accessories',
  'Furniture and Decor',
  'Computer and Software',
];

const DESCRIPTION = `
<p>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>

<br/>
<ul>
  <li> Updated with a more matte texture, perfect for casual styling. </li>
  <li> Durable water-repellent coating. </li>
  <li> dsdsds </li>
  <li> dsdsds </li>
  <li> Anti-static lining. </li>
</ul>
<br/>

<p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money..</p>
`;

// ----------------------------------------------------------------------

export const _productsTable = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  orderId: `#011120${index + 1}`,
  item: NAME[index],
  deliveryDate: _mock.time(index),
  price: _mock.number.price(index),
  status: ['Completed', 'To Process', 'Cancelled', 'Return'][index] || 'Completed',
}));


const staticData = [
  { id: 1, name: 'ﺷﺎﻣﺒﻮ اﻟﻤﺴﻚ اﻷﺳﻮد', description: '  جل الاستحمام الكريمي برائحة المسك هو تجربة حمام فاخرة تمزج بين نعومة الجل ورقة الكريم، مع رائحة المسك الساحرة. يمنحك هذا الجل تنظيفًا فعّالًا وفاخرًا لبشرتك، في حين يترك رائحة المسك الرائعة تحفز حواسك وتمنحك لحظات استرخاء لا مثيل لها. استمتع بتجربة الاستحمام الفاخرة مع هذا الجل الكريمي الذي يضفي لمسة من الفخامة إلى روتينك اليومي,', imageUrl:'/assets/images/misk/champo/1.png' },
  { id: 2, name: 'شامبو للمحجبات بالمسك الاسود', 
  description: 'شامبو للمحجبات بالمسك الأسود يقدم رعاية فائقة لشعرك. تركيبته الفريدة تجمع بين فوائد تنظيف عميقة ورعاية متخصصة، مما يساعد على الحفاظ على صحة الشعر بشكل مثالي. يحتوي الشامبو على مستخلصات المسك الأسود التي تعزز لمعان الشعر وتمنحه رائحة جذابة ودائمة. تصميمه خصيصاً لتلبية احتياجات المحجبات، يساعد في تحقيق توازن مثالي بين النظافة والترطيب، مما يجعل شعرك يبدو صحيًا وجميلاً في كل مرة تستخدمين فيها الشامبو. افتحي أبواب العناية الفعّالة لشعرك مع هذا الشامبو الذي يعتني بجمالك الطبيعي.', 
  imageUrl: '/assets/images/misk/champohijab/1.png' },
  { id: 3, name: 'صابونة المسك الاسود', 
  description: 'صابونة المسك الأسود تعتبر رفيقًا فاخرًا في روتين العناية بالبشرة. تمتاز بتركيبتها الغنية والفاخرة التي تجمع بين فوائد فعّالة لتنظيف البشرة وتغذيتها. تحتوي الصابونة على رائحة المسك الأسود الفريدة، مما يمنح تجربة استحمام غنية بالحس الفاخر والجاذبية.', 
  imageUrl: '/assets/images/misk/blackSavon/1.png' },
  { id: 4, name: 'جل استحمام كريمي برائحة المسك', description: 'جل الاستحمام الكريمي برائحة المسك هو تجربة حمام فاخرة تمزج بين نعومة الجل ورقة الكريم، مع رائحة المسك الساحرة. يمنحك هذا الجل تنظيفًا فعّالًا وفاخرًا لبشرتك، في حين يترك رائحة المسك الرائعة تحفز حواسك وتمنحك لحظات استرخاء لا مثيل لها. استمتع بتجربة الاستحمام الفاخرة مع هذا الجل الكريمي الذي يضفي لمسة من الفخامة إلى روتينك اليومي', imageUrl: '/assets/images/misk/geldoush/1.png' },
];

export const _productsCarousel = staticData.map((product) => ({
  id: product.id,
  title: product.name,
  caption: product.description,
  coverUrl: product.imageUrl,
  label: 'خصم 20% في حملة الافتتاح',
}));




export const _productsCompare = [
  'Apple iPhone 12 Pro',
  'Apple iPhone 13 Pro',
  'Apple iPhone 14 Pro',
].map((name, index) => ({
  id: _mock.id(index),
  name,
  price: _mock.number.price(index),
  coverUrl: _mock.image.product(4),
  ratingNumber: _mock.number.rating(index),
  details: (index === 0 && [
    'Super Retina XDR (OLED)',
    'Up to 29 hours video playback',
    'A14 Bionic',
    'True Tone',
    'IP68',
    '2017',
  ]) || ['Super Retina XDR (OLED)', '', 'A14 Bionic', '', 'IP68', '2017'],
}));

export const _products = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  stock: 100,
  name: NAME[index],
  description: DESCRIPTION,
  category: CATEGORIES[index],
  price: _mock.number.price(index),
  sold: _mock.number.nativeM(index),
  caption: _mock.description(index),
  coverUrl: _mock.image.product(index),
  ratingNumber: _mock.number.rating(index),
  totalReviews: _mock.number.nativeL(index),
  label: ['sale', 'new', 'sale', 'sale'][index] || '',
  priceSale:
    [
      _mock.number.price(1),
      _mock.number.price(2),
      _mock.number.price(3),
      _mock.number.price(4),
      _mock.number.price(5),
    ][index] || 0,
  images: [
    _mock.image.product(1),
    _mock.image.product(2),
    _mock.image.product(3),
    _mock.image.product(4),
    _mock.image.product(5),
    _mock.image.product(6),
    _mock.image.product(7),
    _mock.image.product(8),
  ],
}));
