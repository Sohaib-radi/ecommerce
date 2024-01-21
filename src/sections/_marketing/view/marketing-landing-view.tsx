'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
  _brandsColor,
  _coursesByCategories,
  _courses,
} from 'src/_mock';

import MarketingTeam from '../team/marketing-team';
import MarketingNewsletter from '../marketing-newsletter';
import MarketingOurClients from '../marketing-our-clients';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingLandingServices from '../landing/marketing-landing-services';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingLandingCaseStudies from '../landing/marketing-landing-case-studies';
import ElearningOurClients from 'src/sections/_elearning/elearning-our-clients';
import ElearningLandingCategories from 'src/sections/_elearning/landing/elearning-landing-categories';
import ElearningLandingFeaturedCourses from 'src/sections/_elearning/landing/elearning-landing-featured-courses';
import BaseOptions from 'src/components/settings/drawer/base-options';

import { useSettingsContext } from 'src/components/settings/context';
// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  const settings = useSettingsContext();
  const renderDirection = (
    <BaseOptions
      title="Direction"
      selected={settings.themeDirection === 'rtl'}
      onClick={() =>
        settings.onUpdate('themeDirection', settings.themeDirection === 'rtl' ? 'ltr' : 'rtl')
      }
      icons={['carbon:align-horizontal-right', 'carbon:align-horizontal-left']}
    />
  );

  return (
    <>
      <MarketingLandingHero />

      {renderDirection}
      <ElearningOurClients brands={_brandsColor} />
      <MarketingLandingAbout />
      <ElearningLandingCategories categories={_coursesByCategories} />
      <MarketingLandingServices />
      <ElearningLandingFeaturedCourses courses={_courses} />
      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />

      <MarketingTeam members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
