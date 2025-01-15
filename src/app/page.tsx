import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Carousel from "@/components/Carousel";
// import Banner from "@/components/Banner";
// import MissionVision from "@/components/MissionVision";
// import Testimonials from "@/components/Testimonials";
// import Blog from "@/components/Blog";
// import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import JoinBanner from "@/components/JoinBanner";
import SpecialtiesGrid from "@/components/SpecialtiesGrid"; 
import HeroSection from "@/components/HeroSection"; 


export default function Home() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
      <SpecialtiesGrid />
      <JoinBanner />
      </main>
      <Footer />
    </>
  );
}
