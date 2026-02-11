import Hero from "@/components/sections/hero/Hero";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import AboutBrief from "@/components/sections/home/AboutBrief";
import ProcessTimeline from "@/components/sections/home/ProcessTimeline";
import Testimonials from "@/components/sections/home/Testimonials";
import CaseStudiesPreview from "@/components/sections/home/CaseStudiesPreview";
import CTABanner from "@/components/sections/home/CTABanner";
import DisclosureBento from "@/components/sections/home/ServicesGrid";
import ServicesPage from "@/components/sections/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      {/* <ServicesGrid /> */}
      <DisclosureBento />
      <AboutBrief />
      <ServicesPage />
      {/* <ProcessTimeline /> */}
      {/* <Testimonials /> */}
      {/* <CaseStudiesPreview /> */}
      <CTABanner />
    </>
  );
}
