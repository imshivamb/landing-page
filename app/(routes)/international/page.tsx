import FeaturesSlide from "../../components/features/FeaturesSlide";
import Footer from "../../components/footer/Footer";
import MobileFooter from "../../components/footer/MobileFooter";
import HeroVideo from "../../components/hero/HeroVideo";
import Navbar from "../../components/navbar/Navbar";
import ProductDisplay from "../../components/product section/ProductDisplay";
import Seo from "../../components/seo/Seo";
import Services from "../../components/services section/Services";
import StoreSectionOne from "../../components/store-section/StoreSectionOne";
import StoreSectionThree from "../../components/store-section/StoreSectionThree";
import Subscribe from "../../components/subscribe/Subscribe";
import Testimonial from "../../components/testimonials/Testimonial";
import ThemesSection from "../../components/themes section/ThemesSection";

export default function International() {
  return (
    <div className=" mx-auto">
      <Navbar />
      <HeroVideo />
      <Seo />
      <ProductDisplay />
      <FeaturesSlide />
      <ThemesSection />
      <StoreSectionOne />
      {/* <StoreSectionTwo /> */}
      <StoreSectionThree />
      <Testimonial />
      <Services />
      <Subscribe />
      <div className="hidden md:block">
        <Footer />
      </div>

      <MobileFooter />
    </div>
  );
}
