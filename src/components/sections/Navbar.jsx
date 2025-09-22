import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "sticky top-2 inset-x-0 max-w-2xl mx-auto z-50 mb-4 py-2",
        className
      )}
    >
      <Menu setActive={setActive}>
        {/* Home */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About Me</HoveredLink>
            <HoveredLink href="#resume">Resume</HoveredLink>
            <HoveredLink href="#technologies">Technologies</HoveredLink>
            <HoveredLink href="#skills-soft">Soft Skills</HoveredLink>
            <HoveredLink href="#skills-hard">Hard Skills</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        {/* Projects */}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Portfolio Site"
              href="/projects/portfolio"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="This website. Built with React + Tailwind."
            />
            <ProductItem
              title="API Dashboard"
              href="/projects/api-dashboard"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Analytics dashboard consuming REST/GraphQL APIs."
            />
            <ProductItem
              title="Auth System"
              href="/projects/auth-system"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="JWT / OAuth2 authentication module."
            />
            <ProductItem
              title="UI Component Lib"
              href="/projects/ui-library"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Reusable accessible React components."
            />
          </div>
        </MenuItem>
        {/* Certificates */}
        <MenuItem setActive={setActive} active={active} item="Certificates">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/certificates/frontend">
              Frontend Certification
            </HoveredLink>
            <HoveredLink href="/certificates/javascript">
              Advanced JavaScript
            </HoveredLink>
            <HoveredLink href="/certificates/react">
              React Professional
            </HoveredLink>
            <HoveredLink href="/certificates/cloud">
              Cloud Fundamentals
            </HoveredLink>
            <HoveredLink href="/certificates/security">
              App Security Essentials
            </HoveredLink>
            <HoveredLink href="/certificates/frontend">
              Jadara Certification
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
