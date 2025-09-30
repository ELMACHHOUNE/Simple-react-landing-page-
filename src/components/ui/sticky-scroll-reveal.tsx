"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

type ProjectItem = {
  title: string;
  description: string;
  content?: React.ReactNode; // keeps backward compatibility
  image?: {
    src: string;
    alt?: string;
    objectFit?: "cover" | "contain";
    className?: string;
  };
  links?: {
    live?: string;
    repo?: string;
  };
  tags?: string[];
  year?: string | number;
};

export const StickyScroll = ({
  content,
  contentClassName,
  previewClassName,
}: {
  content: ProjectItem[];
  contentClassName?: string;
  previewClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // target: ref, // uncomment and remove container: ref to drive from page scroll instead
    container: ref as any,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) return index;
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];
  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const active = content[activeCard];

  const Tag = ({ text }: { text: string }) => (
    <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white backdrop-blur">
      {text}
    </span>
  );

  const PreviewCard = ({ item }: { item: ProjectItem }) => {
    if (item.content) return <>{item.content}</>;
    if (item.image) {
      return (
        <div className="relative h-full w-full">
          <img
            src={item.image.src}
            alt={item.image.alt ?? item.title}
            className={cn(
              "h-full w-full object-cover",
              item.image.objectFit === "contain"
                ? "object-contain bg-black"
                : "object-cover",
              item.image.className
            )}
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-white">
            <div className="text-sm font-semibold">{item.title}</div>
            {item.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-1">
                {item.tags.map((t) => (
                  <Tag key={t} text={t} />
                ))}
              </div>
            ) : null}
            {item.links?.live || item.links?.repo ? (
              <div className="mt-3 flex gap-2">
                {item.links?.live && (
                  <a
                    href={item.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded bg-white/90 px-2 py-1 text-xs font-medium text-black hover:bg-white"
                  >
                    Live
                  </a>
                )}
                {item.links?.repo && (
                  <a
                    href={item.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-white/50 px-2 py-1 text-xs font-medium text-white hover:bg-white/10"
                  >
                    Code
                  </a>
                )}
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[36rem] justify-center gap-10 overflow-y-auto rounded-md p-6 sm:p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-2 sm:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 sm:my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="text-xl font-bold text-slate-100 sm:text-2xl"
              >
                {item.title}
              </motion.h2>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                {item.year ? (
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white">
                    {item.year}
                  </span>
                ) : null}
                {item.tags?.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded bg-white/10 px-2 py-0.5 text-xs text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base"
              >
                {item.description}
              </motion.p>

              {/* Mobile preview (shows per item) */}
              <div className="mt-6 lg:hidden">
                <div
                  className={cn(
                    "h-56 w-full overflow-hidden rounded-md bg-white/5 sm:h-64",
                    previewClassName
                  )}
                >
                  <PreviewCard item={item} />
                </div>
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Desktop sticky preview */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-72 w-96 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
          previewClassName
        )}
      >
        <PreviewCard item={active} />
      </div>
    </motion.div>
  );
};
