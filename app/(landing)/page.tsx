import Awards from "../components/awards section/Awards";
import FeaturesSection from "../components/features/FeaturesSection";
import FeaturesSection2 from "../components/features/FeaturesSection2";
import FeaturesSlide from "../components/features/FeaturesSlide";
import Footer from "../components/footer/Footer";
import MobileFooter from "../components/footer/MobileFooter";
import Hero from "../components/hero/Hero";
import ImageScroll from "../components/infinite-scroll/Image-scroll";
import Integrations from "../components/infinite-scroll/integrations";
import TextScroll from "../components/infinite-scroll/text-scroll";
import Navbar from "../components/navbar/Navbar";
import ProductDisplay from "../components/product section/ProductDisplay";
import ProductDisplayTabs from "../components/product section/ProductDisplayTabs";
import Seo from "../components/seo/Seo";
import Services from "../components/services section/Services";
import StoreSectionOne from "../components/store-section/StoreSectionOne";
import StoreSectionThree from "../components/store-section/StoreSectionThree";
import StoreSectionTwo from "../components/store-section/StoreSectionTwo";
import Subscribe from "../components/subscribe/Subscribe";
import Subscribe2 from "../components/subscribe/Subscribe2";
import Testimonial from "../components/testimonials/Testimonial";
import Testimonial2 from "../components/testimonials/Testimonial2";
import Testimonial3 from "../components/testimonials/Testimonial3";
import ThemesSection from "../components/themes section/ThemesSection";

export default function Home() {
  return (
    <div className=" mx-auto antialiased">
      <Navbar />
      <Hero />
      <Awards />
      <Seo />
      <ImageScroll />

      <ProductDisplayTabs />
      <FeaturesSection2 />
      <FeaturesSlide />
      <Integrations />
      <ThemesSection />
      <StoreSectionOne />
      {/* <StoreSectionTwo /> */}
      <StoreSectionThree />

      <Testimonial3 />
      <Services />
      <Subscribe2 />
      <TextScroll />
      <div className="hidden md:block">
        <Footer />
      </div>

      <MobileFooter />
    </div>
  );
}
