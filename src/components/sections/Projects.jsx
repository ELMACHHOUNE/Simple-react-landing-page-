"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const projects = [
  {
    title: "Developer Portfolio",
    year: "2024",
    tags: ["React", "Tailwind", "Vite"],
    description:
      "Personal portfolio site with animated sections, dark mode, and responsive UI.",
    image: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      alt: "Developer portfolio screenshot",
    },
    links: {
      live: "https://your-portfolio.example.com",
      repo: "https://github.com/your-user/portfolio",
    },
  },
  {
    title: "E‑commerce Storefront",
    year: "2025",
    tags: ["React", "Stripe", "Zustand"],
    description:
      "Modern storefront with cart, checkout, and product filtering. Stripe integration for payments.",
    image: {
      src: "https://images.unsplash.com/photo-1519336555923-59661f41bb43?q=80&w=1200&auto=format&fit=crop",
      alt: "Ecommerce storefront UI",
    },
    links: {
      live: "https://your-store.example.com",
      repo: "https://github.com/your-user/storefront",
    },
  },
  {
    title: "Realtime Kanban Board",
    year: "2025",
    tags: ["React", "Supabase", "Drag&Drop"],
    description:
      "Collaborative kanban with realtime updates, comments, and activity logs.",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      alt: "Kanban board app",
    },
    links: {
      live: "https://kanban.example.com",
      repo: "https://github.com/your-user/kanban",
    },
  },
  {
    title: "AI Notes App",
    year: "2025",
    tags: ["React", "OpenAI", "SQLite"],
    description:
      "Notes with embeddings search, summarization, and topic clustering.",
    image: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      alt: "AI notes application UI",
    },
    links: {
      live: "https://notes.example.com",
      repo: "https://github.com/your-user/ai-notes",
    },
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll
        content={projects}
        // Optional: tweak preview sizing on desktop
        contentClassName="h-80 w-[28rem]"
        previewClassName=""
      />
    </div>
  );
}
