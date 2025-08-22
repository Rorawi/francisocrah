"use client";

import { FiCamera, FiMapPin, FiPlay, FiStar, FiTrendingUp } from "react-icons/fi";

function BentoGrid({ children }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-10">
      {children}
    </div>
  );
}

function BentoCard({ item }) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all hover:shadow-lg hover:shadow-black/10 " +
        (item.className ?? "")
      }
    >
      {item.imgSrc && (
        <div className="relative h-56 w-full md:h-full md:max-h-[400px] overflow-hidden">
          <img
            src={item.imgSrc}
            alt={item.imgAlt || item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 md:p-5">
       
        {item.footer && (
          <div className="pointer-events-auto mt-3 flex flex-wrap gap-2 text-white">
            {item.footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BentoGridDemo() {
  const items = [
    {
      id: "hero",
      title: "Explore Ghana's Coasts",
      description: "Sunrise sessions and quiet shores along the Gulf of Guinea.",
      imgSrc: "/images/prophet.jpeg",
      className: "md:col-span-4",
      badge: (
        <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <FiMapPin className="text-base" /> Featured
        </span>
      ),
    },
    {
      id: "video",
      title: "Short Reels",
      description: "60‑second travel stories from locals.",
      imgSrc: "/images/flyer4.png",
      className: "md:col-span-2",
      badge: <FiPlay className="text-2xl" />,
    },
    {
      id: "editorial",
      title: "Hidden Waterfalls",
      description: "A photo essay through the eastern highlands.",
      imgSrc: "/images/theme1.jpeg",
      className: "md:col-span-4",
      badge: <FiCamera className="text-2xl" />,
    },
    {
      id: "ratings",
      title: "Top‑Rated Guides",
      description: "Handpicked experts for your next adventure.",
      imgSrc: "/images/kwesibelllogo.jpg",
      className: "md:col-span-2",
      badge: <FiStar className="text-2xl" />,
    },
    {
      id: "ratings",
      title: "Top‑Rated Guides",
      description: "Handpicked experts for your next adventure.",
      imgSrc: "/images/70days.png",
      className: "md:col-span-5",
      badge: <FiStar className="text-2xl" />,
    },
    {
      id: "ratings",
      title: "Top‑Rated Guides",
      description: "Handpicked experts for your next adventure.",
      imgSrc: "/images/lilian-logo.jpg",
      className: "md:col-span-3",
      badge: <FiStar className="text-2xl" />,
    }
  ];

  return (
    <section className="px-4 py-10">
      {/* <header className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Bento</h2>
          <p className="text-sm text-white/60">
            Image-forward grid with optional react-icons.
          </p>
        </div>
      </header> */}
      <BentoGrid>
        {items.map((item) => (
          <BentoCard key={item.id} item={item} />
        ))}
      </BentoGrid>
    </section>
  );
}
