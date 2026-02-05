import { EntryPoster } from "@/components/EntryPoster";
import AboutSection from "@/components/home/AboutSection/AboutSection.server";
import AcademicJourney from "@/components/home/AcademicJourney/AcademicJourney.server";
import Facilities from "@/components/home/Facilities/Facilities.server";
import FeaturesSection from "@/components/home/featureSection/FeaturesSection.server";
import HolisticDevelopment from "@/components/home/holisticDevelopment/HolisticDevelopment.server";
import LifeAtSchool from "@/components/home/lifeAtSchool/LifeAtSchool.server";
import Mentors from "@/components/home/Management/Mentors.server";
import PrincipalMessage from "@/components/home/PrincipalMessage/PrincipalMessage.server";
import SecuritySection from "@/components/home/SecuritySection/SecuritySection.server";
import TestimonialsGlow from "@/components/home/Testimonials/TestimonialsGlow";
import HeroImg from "@/components/layout/carouselHero/HeroImg";
import NoticeAside from "@/components/NoticeBoard";
import ResultsAchievements from "@/components/ResultsAchievements";
// import Hero from "@/components/layout/Hero";
import SchoolStats from "@/components/SchoolStats/SchoolStats";
import { SCHOOL_CONFIG } from "@/config/school";
import EnrollmentCTA from "@/shared/EnrollmentCTA";
import QuickLinks from "@/shared/QuickLink/QuickLink";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(SCHOOL_CONFIG.website),

  title: {
    default: `CBSE School in ${SCHOOL_CONFIG.city} | ${SCHOOL_CONFIG.name}`,
    template: `%s | ${SCHOOL_CONFIG.name}`,
  },

  description: `${SCHOOL_CONFIG.name} is a CBSE-affiliated school in ${SCHOOL_CONFIG.city}, ${SCHOOL_CONFIG.state}, offering quality education from Nursery to Class 10. Admissions are open for the current academic session.`,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SCHOOL_CONFIG.website,
    title: `CBSE School in ${SCHOOL_CONFIG.city} | ${SCHOOL_CONFIG.name}`,
    description: `${SCHOOL_CONFIG.name} is a trusted CBSE school in ${SCHOOL_CONFIG.city}, providing quality education and a safe learning environment.`,
    siteName: SCHOOL_CONFIG.name,
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Home() {
  const campusImages = [
    "https://images.unsplash.com/photo-1592066575517-58df903152f2?",
    "https://images.unsplash.com/photo-1709290749293-c6152a187b14?q=80&w=2069&auto",

    // "/images/hero/robotics-lab.jpg",
    // "/images/hero/sports-ground.jpg",
  ];
  return (
    <>
      <EntryPoster />
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
          titleTop="A Leading CBSE School in"
          titleAccent="Gaya, Bihar"
          description="Hansraj Public School is a trusted CBSE-affiliated school in Gaya offering quality education from Nursery to Class 10. Admissions are open for the 2026–27 academic session."
        />

        <QuickLinks />
        <SchoolStats />
        <AboutSection />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start p-8">
          {/* Results Take 2/3 of space on desktop */}
          <div className="lg:col-span-2">
            <ResultsAchievements />
          </div>

          {/* Notice Board Takes 1/3 and matches the height of the card */}
          <div className="lg:col-span-1 h-70">
            <NoticeAside height="h-[250px] md:h-[250px]" />
          </div>
        </div>

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
    </>
  );
}
