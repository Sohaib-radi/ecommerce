import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [
  {
    id: '1',
    name: 'أحمد العلي',
    role: 'عميل',
    avatarUrl: 'avatar1.jpg',
    createdAt: _mock.time(3),
    ratingNumber: 4,
    review: 'تجربة رائعة، الخدمة كانت سريعة والجودة ممتازة. أنصح بها بشدة!',
  },
  {
    id: '2',
    name: 'فاطمة المصري',
    role: 'زبونة',
    avatarUrl: 'avatar2.jpg',
    createdAt: _mock.time(3),
    ratingNumber: 5,
    review: 'تجربة مدهشة، المنتجات فائقة الجودة والتعامل كان محترفًا جداً. أنا سعيدة جداً!',
  },
  {
    id: '3',
    name: 'علي الكويتي',
    role: 'زبون',
    avatarUrl: 'avatar3.jpg',
    createdAt: _mock.time(3),
    ratingNumber: 5,
    review: 'خدمة ممتازة وتوصيل سريع. المنتجات تعكس الجودة العالية. شكراً للفريق!',
  },
  {
    id: '4',
    name: 'نور الحسن',
    role: 'مستهلكة',
    avatarUrl: 'avatar4.jpg',
    createdAt: _mock.time(9),
    ratingNumber: 4,
    review: 'أنا راضية جداً عن الخدمة. المنتجات تأتي بتغليف جيد وفعالية. سأعود للشراء مرة أخرى!',
  },
  {
    id: '5',
    name: 'محمد الغربي',
    role: 'عميل مميز',
    avatarUrl: 'avatar5.jpg',
    createdAt: _mock.time(8),
    ratingNumber: 5,
    review: 'تجربة مميزة جداً. المنتجات تفوق التوقعات، والخدمة العملاء رائعة. شكراً لكم!',
  },
  {
    id: '6',
    name: 'سارة العراقية',
    role: 'زبونة دائمة',
    avatarUrl: 'avatar6.jpg',
    createdAt: _mock.time(5),
    ratingNumber: 4,
    review: 'خدمة رائعة، والمنتجات دائماً تصل في الوقت المحدد. أحب تنوع المنتجات أيضاً!',
  },
  {
    id: '7',
    name: 'أمين الجزائري',
    role: 'مراجع',
    avatarUrl: 'avatar7.jpg',
    createdAt: _mock.time(3),
    ratingNumber: 5,
    review: 'تجربة رائعة وممتازة. أنصح بها للجميع. المنتجات تعبر عن جودة العلامة التجارية.',
  },
  {
    id: '8',
    name: 'ليلى المغربية',
    role: 'زبونة سعيدة',
    avatarUrl: 'avatar8.jpg',
    createdAt: _mock.time(4),
    ratingNumber: 4,
    review: 'شكرًا للخدمة الرائعة والتوصيل السريع. المنتجات تستحق كل قرش. سأوصي لأصدقائي!',
  },
  {
    id: '9',
    name: 'يوسف اليمني',
    role: 'متسوق',
    avatarUrl: 'avatar9.jpg',
    createdAt: _mock.time(9),
    ratingNumber: 5,
    review: 'تجربة تسوق ممتازة. أنا راضي جداً عن جودة المنتجات والخدمة السريعة. شكراً لكم!',
  },
  {
    id: '10',
    name: 'فاطمة السعودية',
    role: 'عميلة دائمة',
    avatarUrl: 'avatar10.jpg',
    createdAt: _mock.time(10),
    ratingNumber: 4,
    review: 'أنا منبهرة بالتشكيلة الواسعة والجودة الرائعة. سأظل زبونة دائمة بالتأكيد!',
  },
];

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
  },

];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  'Sed augue ipsum, egestas nec, vestibulum et',
  'alesuada adipiscing, dui vestibulum suscipit nulla quis orci.',
  'Ut varius tincidunt libero',
  'In ut quam vitae odio lacinia tincidunt.',
  'Fusce vel dui Morbi nec metus.',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
