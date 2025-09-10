import { useState } from "react";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "History", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((o) => !o);
  const toggleUser = () => setUserOpen((o) => !o);
  const closeAll = () => {
    setMobileOpen(false);
    setUserOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
          >
            <span className="sr-only">Home</span>
            <svg
              className="h-8 w-8"
              viewBox="0 0 28 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" />
            </svg>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 transition hover:text-gray-900 focus:outline-none focus:text-teal-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* User menu (desktop) */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={toggleUser}
              aria-haspopup="menu"
              aria-expanded={userOpen}
              className="flex items-center rounded-full border border-gray-300 bg-white shadow-inner transition hover:shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <span className="sr-only">Open user menu</span>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop"
                alt="User avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
            </button>

            {userOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg animate-in fade-in zoom-in"
              >
                <div className="p-2">
                  <MenuItem label="My profile" />
                  <MenuItem label="Billing summary" />
                  <MenuItem label="Team settings" />
                </div>
                <div className="p-2 border-t border-gray-100">
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    onClick={() => {
                      // logout handler
                      closeAll();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 pt-3 shadow-inner">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeAll}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-200">
              <div className="flex items-center gap-3 px-1">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128&auto=format&fit=crop"
                  alt="User avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">Jane Doe</p>
                  <p className="text-xs text-gray-500">jane@example.com</p>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <MobileMenuItem label="My profile" onClick={closeAll} />
                <MobileMenuItem label="Billing summary" onClick={closeAll} />
                <MobileMenuItem label="Team settings" onClick={closeAll} />
                <button
                  onClick={closeAll}
                  className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function MenuItem({ label }) {
  return (
    <button
      type="button"
      className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      onClick={() => {}}
      role="menuitem"
    >
      {label}
    </button>
  );
}

function MobileMenuItem({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
    >
      {label}
    </button>
  );
}
