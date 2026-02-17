// // src/components/sections/Hero.tsx
// import { HeroBackgroundSlider } from "./HeroBackgroundSlider";
// import AdmissionButton from "@/components/ui/AdmissionButton";

import AdmissionButton from "@/components/ui/AdmissionButton";
import { HeroBackgroundSlider } from "./HeroBackgroundSlider";

interface HeroProps {
  images: string[];
  titleTop: string;
  titleAccent: string;
  description: string;
}

// export default function HeroImg({
//   images,
//   titleTop,
//   titleAccent,
//   description,
// }: HeroProps) {
//   return (
//     <section className="relative mt-8  h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
//       {/* 1. Client-Side Image Engine */}
//       <HeroBackgroundSlider images={images} />

//       {/* 2. Content Overlay */}
//       <div className="container relative z-10 mx-auto px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
//             {titleTop} <br />
//             <span className="text-accent">{titleAccent}</span>
//           </h1>

//           <p className="mt-8 text-lg md:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
//             {description}
//           </p>

//           <div className="mt-12">
//             <AdmissionButton
//               px="px-10"
//               py="py-5"
//               fontSize="text-md"
//               width="w-full md:w-fit"
//               isPulse={true} // High attention
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

////////////////////////////// New Design
export default function HeroImg({
  images,
  titleTop,
  titleAccent,
  description,
}: HeroProps) {
  return (
    // Canvas: Added pt-24 to prevent header overlap on mobile, min-h-[600px] to ensure content fits
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-linear-to-br from-primary via-color-brand-accent to-accent/50 py-8 md:py-12 px-4 md:px-10 mt-16 md:mt-20">
      {/* THE FRAME: Height is dynamic (h-[70vh] on mobile, h-[85vh] on desktop) */}
      <div className="relative w-full max-w-7xl h-[70vh] sm:h-[75vh] md:h-[85vh] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-2 border-accent/60">
        {/* 1. Slider restricted to the Frame */}
        <HeroBackgroundSlider images={images} />

        {/* 2. Content Overlay: Center-aligned content with mobile-first text sizes */}
        <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4 md:px-6">
          <div className="max-w-4xl">
            {/* Title: 4xl on small phones, scaling up to 7xl on desktop */}
            <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] md:leading-[0.85]">
              {titleTop} <br />
              <span className="text-accent drop-shadow-sm">{titleAccent}</span>
            </h1>

            {/* Description: Hidden or smaller on very small screens to save space, visible on md */}
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white font-medium max-w-xl mx-auto leading-snug md:leading-relaxed drop-shadow-md opacity-95">
              {description}
            </p>

            {/* CTA: Full width on mobile for easy thumb tapping */}
            <div className="mt-8 md:mt-10">
              <AdmissionButton
                // Mobile: Smaller horizontal padding to avoid overflow
                // Desktop: Back to generous padding
                px="px-6 md:px-10"
                // Mobile: Tall enough for thumbs (py-4)
                // Desktop: Slightly larger for hero prominence
                py="py-4 md:py-5"
                // Mobile: text-sm is highly legible
                // Desktop: md:text-base (Note: md is not a standard Tailwind size, use base or lg)
                fontSize="text-sm md:text-base"
                // Mobile: full width but with a little 'breathing room' via the parent's px-4
                // Desktop: snaps to content width
                width="w-full md:w-fit"
                isPulse={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
