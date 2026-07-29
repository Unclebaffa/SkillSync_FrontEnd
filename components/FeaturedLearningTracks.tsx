import React from "react";
import Link from "next/link";

export interface FeaturedTrackItem {
  title: string;
  description: string;
  icon?: string;
  label?: string;
  category?: string;
  imageSrc?: string;
  lessons?: number;
  duration?: string;
  href?: string;
}

export const defaultFeaturedTracks: FeaturedTrackItem[] = [
  {
    title: "Frontend Development",
    description: "Master HTML, CSS, JavaScript and modern frameworks.",
    icon: "🖥️",
    label: "Computer screen",
  },
  {
    title: "Data Science",
    description: "Explore data analysis, ML, and statistical modeling.",
    icon: "📊",
    label: "Bar chart",
  },
  {
    title: "Product Management",
    description: "Learn to build and ship products users love.",
    icon: "🚀",
    label: "Rocket launch",
  },
];

export interface FeaturedLearningTracksProps {
  tracks?: FeaturedTrackItem[];
}

export default function FeaturedLearningTracks({
  tracks = defaultFeaturedTracks,
}: FeaturedLearningTracksProps) {
  const displayTracks = tracks.slice(0, 3);
  return (
    <section
      className="bg-gray-50 dark:bg-gray-800/40 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-150 dark:border-gray-850 transition-colors"
      aria-labelledby="featured-tracks-heading"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2
            id="featured-tracks-heading"
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Featured Learning Tracks
          </h2>
          <Link
            href="/resources/tracks"
            className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors focus:outline-none focus:underline shrink-0"
          >
            View All Tracks &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayTracks.map((track) => (
            <article
              key={track.title}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-start"
            >
              {track.icon && (
                <span
                  className="text-3xl mb-4 p-3 bg-slate-50 dark:bg-gray-750 rounded-xl"
                  role="img"
                  aria-label={track.label || track.title}
                >
                  {track.icon}
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {track.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {track.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
