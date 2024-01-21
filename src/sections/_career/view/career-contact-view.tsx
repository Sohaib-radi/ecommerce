'use client';

import { _offices } from 'src/_mock';



import CareerNewsletter from '../career-newsletter';
import CareerContactForm from '../contact/career-contact-form';
import CareerContactInfo from '../contact/career-contact-info';

// ----------------------------------------------------------------------

export default function CareerContactView() {
  return (
    <>
      <CareerContactInfo />


      <CareerContactForm />

    
    </>
  );
}
