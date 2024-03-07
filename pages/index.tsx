import React from "react";
import HeaderMegaMenu from "@/components/navbar";
import FooterLinks from "@/components/footer component/footer";
import HeroBullets from "@/components/Hero/Hero";
import ContactUs from "@/components/Contact Form/contactUs";
import Card from "@/components/Card/card";
import Services from "@/components/Services/service";
const index = () => {
  return (
    <div>
      <HeaderMegaMenu />
      <HeroBullets />
      <Services />
      <Card />
      <ContactUs />
      <FooterLinks />
    </div>
  );
};

export default index;
