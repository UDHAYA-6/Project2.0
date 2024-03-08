import React from "react";
import HeaderMegaMenu from "@/components/navbar";
import FooterLinks from "@/components/footer component/footer";
import HeroBullets from "@/components/Hero/Hero";
import ContactUs from "@/components/Contact Form/contactUs";
import Card from "@/components/Card/card";
import Services from "@/components/Services/service";
import FAQ from "@/components/FAQ component/Faq";
import Projects from "@/components/Project section/Project";
const index = () => {
  return (
    <div>
      <HeaderMegaMenu />
      <HeroBullets />
      <Card />
      <Services />
      <Projects />
      <FAQ />
      <ContactUs />
      <FooterLinks />
    </div>
  );
};

export default index;
