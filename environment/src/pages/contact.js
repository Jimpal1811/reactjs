import React from 'react';
import Contacts from '../components/contact/contactHero';
import Map from '../components/contact/map';
import ContactMap from '../components/contact/location';

function Contact() {
  return (
    <div>
      <Contacts />
      <Map />
      <ContactMap />
    </div>
  );
}

export default Contact;