import React, { useState } from "react";

export default function Main() {
  const IMAGES = [
    {
      src: "https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=1200&auto=format&fit=crop",
      alt: "Team collaborating around a table",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      alt: "Focused developer writing code",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      alt: "Creative workspace with laptop and notes",
    },
  ];

  const [activeImage, setActiveImage] = useState(IMAGES[0]);
  const [showMore, setShowMore] = useState(false);

  const FEATURES = [
    {
      title: "Fast Integration",
      desc: "Plug in with minimal configuration and start shipping faster.",
    },
    {
      title: "Scalable Architecture",
      desc: "Built to grow seamlessly as your user base expands.",
    },
    {
      title: "Security First",
      desc: "Best practices baked in: validation, sanitization, and audits.",
    },
    {
      title: "Actionable Insights",
      desc: "Analytics that help you make informed product decisions.",
    },
  ];
  const STATS = [
    { label: "Active Users", value: "24K+" },
    { label: "Uptime", value: "99.98%" },
    { label: "Avg. Integration Time", value: "3 hrs" },
    { label: "Countries", value: "42" },
  ];

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:items-start">
            <div className="md:col-span-1 space-y-4">
              <div className="max-w-prose md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus.
                </p>
                {showMore && (
                  <p className="mt-3 text-sm text-gray-600">
                    Additional context: expedita quos alias explicabo dolores
                    nihil asperiores officia quas laboriosam, architecto,
                    eligendi reiciendis. Aperiam, officiis.
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setShowMore((p) => !p)}
                  className="mt-4 inline-flex items-center gap-1 rounded border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-expanded={showMore}
                >
                  {showMore ? "Show less" : "Read more"}
                  <span
                    className={`transition-transform ${
                      showMore ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 uppercase">
                  Gallery
                </p>
                <ul className="flex gap-2">
                  {IMAGES.map((img) => {
                    const active = img.src === activeImage.src;
                    return (
                      <li key={img.src}>
                        <button
                          type="button"
                          onClick={() => setActiveImage(img)}
                          aria-label={`Show: ${img.alt}`}
                          aria-pressed={active}
                          className={`h-14 w-14 overflow-hidden rounded border transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            active
                              ? "ring-2 ring-indigo-500 border-indigo-500"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <img
                            src={img.src}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <figure className="group relative">
                <img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="rounded shadow-sm aspect-video w-full object-cover transition-opacity"
                />
                <figcaption className="mt-2 text-sm text-gray-500">
                  {activeImage.alt}
                </figcaption>
                <div className="pointer-events-none absolute inset-0 rounded opacity-0 ring-0 transition group-hover:opacity-100 group-hover:ring-2 group-hover:ring-indigo-400" />
              </figure>
            </div>
          </div>

          {/* New features section */}
          <div className="mt-20">
            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why teams choose us
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              A focused toolchain that accelerates product delivery without
              increasing maintenance overhead.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-indigo-400 hover:shadow"
                >
                  <h4 className="font-medium text-gray-900">{f.title}</h4>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 sm:p-8 text-white">
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {STATS.map((s) => (
                <li key={s.label} className="text-center sm:text-left">
                  <p className="text-2xl font-semibold sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-indigo-100">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col items-start gap-4 rounded-lg border border-dashed border-gray-300 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-lg font-medium text-gray-900">
                Ready to build faster?
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Start your free trial and deploy your first module in minutes.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Get Started
              </button>
              <button
                type="button"
                className="rounded border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
