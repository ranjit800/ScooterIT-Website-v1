import HeroSection from "@/components/HomeComponents/HeroSection";
import AboutUs from "@/components/HomeComponents/AboutUs";
import WhyChooseUs from "@/components/HomeComponents/WhyChooseUs";
import OurServices from "@/components/HomeComponents/OurServices";
import OurPartners from "@/components/HomeComponents/OurPartners";
import OurCustomer from "@/components/HomeComponents/OurCustomer";
import QuestionsAndAnswers from "@/components/HomeComponents/QuestionsAndAnswers";
import ContactUs from "@/components/HomeComponents/ContactUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs /> 
      <WhyChooseUs />
      <OurServices />
      <OurPartners />
      <OurCustomer /> 
      <QuestionsAndAnswers />
      <ContactUs />
    </>
  );
}