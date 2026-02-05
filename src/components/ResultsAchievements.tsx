import Link from "next/link";
import { resultsData } from "@/data/results";

export default function ResultsAchievements() {
  const latest = resultsData[0];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Results & Achievements
          </h2>
          <p className="mt-3 text-gray-600">
            A record of consistent academic performance and student success.
          </p>
        </header>

        {/* Big Card */}
        <article className="relative  rounded-2xl border border-accent p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-accent">
                {latest.board}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                Academic Year {latest.year}
              </h3>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-gray-600">Overall Pass Percentage</p>
              <p className="text-5xl font-extrabold text-green-600 tracking-tight">
                {latest.passPercentage}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-200" />

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Toppers */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                School Toppers
              </h4>
              <ul className="space-y-3">
                {latest.toppers.map((topper) => (
                  <li
                    key={topper.name}
                    className="flex justify-between text-gray-700"
                  >
                    <span>{topper.name}</span>
                    <span className="font-medium">{topper.score}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                {latest.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/results"
              className="inline-flex items-center rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              View All Results →
            </Link>
          </div>

          {/* Accent */}
        </article>
      </div>
    </section>
  );
}
