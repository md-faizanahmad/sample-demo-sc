import { resultsData } from "@/data/results";

export default function ResultsTimeline() {
  return (
    <section className="py-20 bg-white mt-15">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Results & Achievements
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A year-wise record of board results and student achievements that
            reflect our academic standards and consistency.
          </p>
        </header>

        {/* Timeline */}
        <div className="space-y-12">
          {resultsData.map((result) => (
            <article
              key={result.year}
              className="relative border border-gray-200 rounded-2xl p-8 md:p-10 bg-gray-50 hover:bg-white transition-colors duration-300"
            >
              {/* Year badge */}
              <div className="absolute -top-4 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                {result.year}
              </div>

              {/* Board + Result */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    {result.board}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                    Academic Performance
                  </h2>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-sm text-gray-600">
                    Overall Pass Percentage
                  </p>
                  <p className="text-4xl font-extrabold text-green-600">
                    {result.passPercentage}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Toppers */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    School Toppers
                  </h3>
                  <ul className="space-y-3">
                    {result.toppers.map((topper) => (
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Achievements
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {result.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
