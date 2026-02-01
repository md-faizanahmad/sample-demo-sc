import AboutSection from "@/components/home/AboutSection/AboutSection";
import AcademicJourney from "@/components/home/AcademicJourney";
import Facilities from "@/components/home/Facilities";
import FeaturesSection from "@/components/home/FeaturesSection";
import HolisticDevelopment from "@/components/home/HolisticDevelopment";
import LifeAtSchool from "@/components/home/LifeAtSchool";
import Mentors from "@/components/home/Mentors";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import SecuritySection from "@/components/home/SecuritySection";
import TestimonialsGlow from "@/components/home/Testimonials/TestimonialsGlow";
import HeroImg from "@/components/layout/carouselHero/HeroImg";
// import Hero from "@/components/layout/Hero";
import SchoolStats from "@/components/SchoolStats/SchoolStats";
import EnrollmentCTA from "@/shared/EnrollmentCTA";
import QuickLinks from "@/shared/QuickLink/QuickLink";

export default function Home() {
  const campusImages = [
    "https://images.unsplash.com/photo-1592066575517-58df903152f2?",
    "https://images.unsplash.com/photo-1709290749293-c6152a187b14?q=80&w=2069&auto",

    // "/images/hero/robotics-lab.jpg",
    // "/images/hero/sports-ground.jpg",
  ];
  return (
    <main className="relative bg-background">
      {/* SCENE 1: The Vision */}
      {/* <Hero
        videoSrc="School_Children_Using_Technology_Video.mp4"
        titleTop="Today's Kids,"
        titleAccent="World's Future Bright"
        description="An immersive learning environment where technology meets empathy to shape the leaders of tomorrow."
        primaryBtnText="Explore Campus"
        secondaryBtnText="Watch Our Story"
      /> */}

      <HeroImg
        images={campusImages}
        titleTop="Enlightening Minds in"
        titleAccent="Historic Gaya"
        description="Join the premier institution of Bihar where heritage meets 21st-century technology. Enrollment for 2026 is now open."
      />
      <QuickLinks />
      <SchoolStats />
      <AboutSection />
      <FeaturesSection />
      <PrincipalMessage />
      <SecuritySection />
      <AcademicJourney />
      <HolisticDevelopment />
      <LifeAtSchool />
      <Facilities />
      <Mentors />
      <TestimonialsGlow />
      <EnrollmentCTA />
    </main>
  );
}
