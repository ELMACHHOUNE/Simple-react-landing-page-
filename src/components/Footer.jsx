import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const linkGroups = [
    { title: "Site", links: ["About", "Projects", "Contact"] },
    { title: "Tech", links: ["React", "TypeScript", "Tailwind"] },
  ];

  return (
    <footer
      className="border-t border-slate-800/70 bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 text-slate-300"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Brand + Social */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-xs font-semibold shadow-md ring-1 ring-slate-700/60">
                <span className="absolute inset-0 rounded-lg bg-white/10 mix-blend-overlay" />
                YN
              </span>
              <span className="text-sm font-semibold tracking-wide text-slate-100">
                YourName
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Frontend Engineer crafting fast, accessible interfaces.
            </p>
            <div className="flex gap-2" aria-label="Social links">
              {[
                {
                  href: "mailto:you@example.com",
                  label: "Email",
                  icon: <HiOutlineMail />,
                },
                {
                  href: "https://github.com/",
                  label: "GitHub",
                  icon: <FaGithub />,
                },
                {
                  href: "https://linkedin.com/",
                  label: "LinkedIn",
                  icon: <FaLinkedin />,
                },
                {
                  href: "https://x.com/",
                  label: "X (Twitter)",
                  icon: <FaXTwitter />,
                },
                {
                  href: "https://instagram.com/",
                  label: "Instagram",
                  icon: <FaInstagram />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative grid h-9 w-9 place-items-center rounded-md border border-slate-700/60 bg-slate-800/40 text-slate-300 text-sm transition
                             hover:text-white hover:border-slate-600 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  <span className="absolute inset-0 rounded-md opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 bg-gradient-to-br from-white/10 to-transparent" />
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            {linkGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={group.title}
                className="flex flex-col gap-3"
              >
                <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group.title}
                </h3>
                <ul className="space-y-1.5 text-xs">
                  {group.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="relative inline-block text-slate-300/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none
                                   after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-400 after:transition-[width]
                                   hover:after:w-full focus-visible:after:w-full"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-4 py-2
                             text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow-sm ring-1 ring-white/10 transition
                             hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-600/60 bg-slate-800/40 px-4 py-2
                             text-[0.65rem] font-semibold uppercase tracking-wide text-slate-200 transition hover:border-slate-500 hover:text-white
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Resume
              </a>
            </div>
            <p className="text-[0.6rem] text-slate-500">
              Available for remote roles & select freelance.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 flex flex-col gap-2 border-t border-slate-800/60 pt-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.6rem] tracking-wide text-slate-500">
            &copy; {new Date().getFullYear()} YourName. Built with React &
            Tailwind.
          </p>
          <ul className="flex flex-wrap gap-4 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {["Source", "License", "Accessibility"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative text-slate-400/70 transition hover:text-white focus-visible:text-white focus-visible:outline-none
                             after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-400 after:transition-[width]
                             hover:after:w-full focus-visible:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
