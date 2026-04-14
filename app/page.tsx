import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ClassesSection from "@/components/sections/ClassesSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import InstructorsSection from "@/components/sections/InstructorsSection";
import PricingSection from "@/components/sections/PricingSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BookingSection from "@/components/sections/BookingSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import ChatWidget from "@/components/widgets/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ClassesSection />
        <ScheduleSection />
        <InstructorsSection />
        <PricingSection />
        <WhyUsSection />
        <GallerySection />
        <ReviewsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  );
}
