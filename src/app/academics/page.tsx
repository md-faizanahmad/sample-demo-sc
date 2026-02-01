import Image from "next/image";
import {
  Book,
  Microscope,
  Laptop,
  Music,
  Trophy,
  Palette,
  Users,
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-slate-100 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            A Curriculum for <br />
            <span className="italic text-blue-600 font-medium">
              Holistic Mastery.
            </span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            At ABC Public School, our academic framework is built on the CBSE
            foundation, enhanced by modern pedagogical techniques and
            inquiry-based learning.
          </p>
        </div>
      </section>

      {/* 2. ACADEMIC WINGS (The Journey) */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {/* Primary Wing */}
          <WingSection
            title="The Foundation Wing"
            subtitle="Nursery to Grade V"
            description="Our primary curriculum focuses on the joy of discovery. We emphasize literacy, numeracy, and social-emotional skills through play-way and activity-based learning."
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
            tags={["Activity Based", "Phonics", "Environmental Studies"]}
          />

          {/* Middle & Secondary Wing */}
          <WingSection
            reverse
            title="The Excellence Wing"
            subtitle="Grade VI to Grade X"
            description="A transition toward deeper conceptual understanding and analytical thinking. We prepare students for the rigors of board examinations while fostering critical inquiry."
            image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800"
            tags={["Integrated Science", "Advanced Math", "Language Mastery"]}
          />
        </div>
      </section>

      {/* 3. SUBJECT STREAMS & LABS (Grid) */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-4">
            World-Class Facilities
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto" />
        </div>

        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          <FacilityCard
            icon={<Microscope className="text-blue-400" size={32} />}
            title="Science Laboratories"
            text="Fully equipped Physics, Chemistry, and Biology labs that encourage hands-on experimentation."
          />
          <FacilityCard
            icon={<Laptop className="text-blue-400" size={32} />}
            title="Digital Learning Lab"
            text="State-of-the-art computer centers with high-speed internet and latest educational software."
          />
          <FacilityCard
            icon={<Book className="text-blue-400" size={32} />}
            title="Knowledge Resource Center"
            text="A massive library with thousands of volumes, digital journals, and a quiet reading zone."
          />
        </div>
      </section>

      {/* 4. CO-CURRICULAR INTEGRATION */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-serif text-slate-900">
            Beyond the Books
          </h2>
          <p className="text-slate-500 mt-4 font-medium italic">
            Developing the whole child through passion and practice.
          </p>
        </div>

        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <ActivityItem icon={<Music size={24} />} label="Vocal & Instrument" />
          <ActivityItem icon={<Trophy size={24} />} label="Field Sports" />
          <ActivityItem icon={<Palette size={24} />} label="Fine Arts" />
          <ActivityItem icon={<Users size={24} />} label="Debate & Drama" />
        </div>
      </section>
    </main>
  );
}

// COMPONENT: Wing Section
function WingSection({
  title,
  subtitle,
  description,
  image,
  tags,
  reverse = false,
}: any) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            {subtitle}
          </h3>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-tighter rounded-full border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full relative aspect-video rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

// COMPONENT: Facility Card
function FacilityCard({ icon, title, text }: any) {
  return (
    <div className="p-10 bg-slate-800/50 border border-slate-700 rounded-[2.5rem] hover:border-blue-500/50 transition-all text-center">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

// COMPONENT: Activity Item
function ActivityItem({ icon, label }: any) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors">
      <div className="text-blue-600">{icon}</div>
      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
