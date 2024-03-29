'use client';

import { _testimonials } from 'src/_mock';

import EcommerceLandingHero from '../landing/ecommerce-landing-hero';
import EcommerceTestimonial from '../testimonial/ecommerce-testimonial';
import EcommerceLandingCategories from '../landing/ecommerce-landing-categories';
import EcommerceLandingTopProducts from '../landing/ecommerce-landing-top-products';
import EcommerceLandingSpecialOffer from '../landing/ecommerce-landing-special-offer';
import EcommerceLandingHotDealToday from '../landing/ecommerce-landing-hot-deal-today';
import EcommerceLandingFeaturedBrands from '../landing/ecommerce-landing-featured-brands';
import EcommerceLandingPopularProducts from '../landing/ecommerce-landing-popular-products';
import EcommerceLandingFeaturedProducts from '../landing/ecommerce-landing-featured-products';

// ----------------------------------------------------------------------

export default function EcommerceLandingView() {
  return (
    <>
      <EcommerceLandingHero />

      <EcommerceLandingFeaturedProducts />

      <EcommerceLandingSpecialOffer />

      <EcommerceTestimonial testimonials={_testimonials} />
    </>
  );
}
