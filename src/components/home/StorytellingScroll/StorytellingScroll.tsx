import { StorytellingClientWrapper } from "./StorytellingClientWrapper";

export interface JourneyStep {
  id: string;
  time: string;
  title: string;
  content: string;
  image: string;
}

export default function StorytellingScroll() {
  const journey: JourneyStep[] = [
    {
      id: "morning",
      time: "08:00 AM",
      title: "Assembly & Discipline",
      content:
        "The day begins with the national anthem and moral values. We focus on building character and discipline from the very first hour.",
      image:
        "https://images.unsplash.com/photo-1577891913214-07d539999127?q=80&w=800",
    },
    {
      id: "midday",
      time: "11:30 AM",
      title: "Interactive Learning",
      content:
        "Traditional teaching meets smart technology. Our classrooms in Gaya provide the perfect environment for deep academic focus.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    },
    {
      id: "afternoon",
      time: "02:00 PM",
      title: "Holistic Development",
      content:
        "Education at Hansraj isn't just about books. We close our sessions with physical activities and collaborative group studies.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    },
  ];

  return (
    <section className="relative bg-white" id="storytelling-container">
      <div className="container mx-auto px-6 pt-24 pb-12 text-center md:text-left">
        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600/60">
          The Student Journey
        </h2>
        <p className="mt-4 text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
          A Day at <span className="text-blue-600 italic">Hansraj</span>
        </p>
      </div>

      {/* GSAP Client Wrapper handles the image animations */}
      <StorytellingClientWrapper journey={journey} />

      <div className="relative z-10">
        {journey.map((step, index) => (
          <article
            key={step.id}
            className="h-screen flex items-center justify-center snap-start px-6"
            id={`step-${index}`}
          >
            <div className="max-w-xl md:ml-auto md:mr-24 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg">
                  {step.time}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                {step.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {step.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
