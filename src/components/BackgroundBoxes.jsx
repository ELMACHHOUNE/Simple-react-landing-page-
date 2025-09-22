import { Boxes } from "./ui/background-boxes";

// Reworked to provide a full-app background and render children on top
export default function BackgroundBoxes({
  children,
  fullscreen = true,
  className = "",
}) {
  return (
    <div
      className={`relative w-full ${
        fullscreen ? "min-h-screen" : ""
      } ${className}`}
    >
      {/* Background layer (no negative z-index so hover works) */}
      <div
        className={`${
          fullscreen ? "fixed" : "absolute"
        } inset-0 overflow-hidden bg-slate-900`}
      >
        {/* Mask backdrop under the interactive grid so it doesn't block hover */}
        <div className="pointer-events-none absolute inset-0 bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="pointer-events-auto" />
      </div>
      {/* Foreground content above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
