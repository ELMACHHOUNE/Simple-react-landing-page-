import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { CardSpotlight } from "../ui/card-spotlight";
import { Handshake, Wrench, Palette, Laptop, Sparkles } from "lucide-react";
import BackgroundBoxes from "../BackgroundBoxes";

const groups = [
  {
    key: "development",
    title: "Development",
    subtitle: "Frameworks, languages & runtime",
    items: [
      {
        id: 1,
        name: "React",
        designation: "UI Library",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        designation: "CSS Framework",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        designation: "Language",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        designation: "Typed JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        id: 5,
        name: "Node.js",
        designation: "Backend Runtime",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        id: 6,
        name: "MongoDB",
        designation: "Database",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    key: "design",
    title: "Design",
    subtitle: "Design tools & systems",
    items: [
      {
        id: 101,
        name: "Figma",
        designation: "Design Tool",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    subtitle: "Version control & collaboration",
    items: [
      {
        id: 151,
        name: "Git",
        designation: "Version Control",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        id: 152,
        name: "GitHub",
        designation: "Code Hosting",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
  {
    key: "soft",
    title: "Soft Skills",
    subtitle: "Teamwork, communication & leadership",
    items: [
      { id: 201, name: "Communication", designation: "Soft Skill" },
      { id: 202, name: "Teamwork", designation: "Soft Skill" },
      { id: 203, name: "Problem Solving", designation: "Soft Skill" },
      { id: 204, name: "Leadership", designation: "Soft Skill" },
      { id: 205, name: "Time Management", designation: "Soft Skill" },
      { id: 206, name: "Adaptability", designation: "Soft Skill" },
    ],
  },
];

// accent gradients and icons per group
const groupOrder = ["soft", "tools", "design", "development"];
const accents = {
  soft: "from-rose-500/40 via-fuchsia-500/30 to-indigo-500/40",
  tools: "from-amber-400/40 via-emerald-400/30 to-cyan-400/40",
  design: "from-pink-500/40 via-violet-500/30 to-blue-500/40",
  development: "from-emerald-500/40 via-cyan-500/30 to-indigo-500/40",
};
// Replace emoji strings with Lucide icon components
const icons = {
  soft: Handshake,
  tools: Wrench,
  design: Palette,
  development: Laptop,
};

const orderedGroups = groupOrder
  .map((key) => groups.find((g) => g.key === key))
  .filter(Boolean)
  .map((g) => ({ ...g, accent: accents[g.key], icon: icons[g.key] }));

export default function SkillsWithTooltip() {
  return (
    <BackgroundBoxes fullscreen={false}>
      <section
        id="skills-tooltips"
        className="text-white py-12 md:py-16"
        aria-labelledby="skills-tooltips-title"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5">
              <Sparkles
                className="h-4 w-4 text-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-white/70">
                Skills & Tech Stack
              </span>
            </div>
            <h2
              id="skills-tooltips-title"
              className="mt-3 text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Skills & Tech Stack
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Hover over each icon to see details
            </p>
          </div>

          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {orderedGroups.map((group) => (
              <CardSpotlight key={group.key} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    {/* Render Lucide icon */}
                    {group.icon &&
                      React.createElement(group.icon, { className: "h-5 w-5" })}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-white/70">{group.subtitle}</p>
                <div className="mt-6 flex justify-center">
                  <AnimatedTooltip items={group.items} />
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>
    </BackgroundBoxes>
  );
}
