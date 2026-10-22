import {
  NavLink,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  Menu,
  X,
} from "lucide-react";

import Logo from "./Logo.jsx";

const NavBar = ({
  onGoToEvents,
  onGoToServices,
  scrollTop,
}) => {
  const [mobileNavOpen, setMobileNavOpen] =
    useState(false);


  useEffect(() => {
    setMobileNavOpen(false);
  }, [scrollTop]);


  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleServicesClick = () => {
    closeMobileNav();
    onGoToServices?.();
  };


  const navLinkClass = ({ isActive }) =>
    [
      "relative text-sm font-semibold",
      "tracking-wide transition-colors duration-200",
      "hover:text-sky-400",
      isActive
        ? "text-sky-400"
        : "text-white/85",
    ].join(" ");


  const mobileLinkClass = ({ isActive }) =>
    [
      "block w-full rounded-lg px-4 py-3",
      "text-sm font-semibold transition-colors",
      "hover:bg-slate-800 hover:text-sky-400",
      isActive
        ? "bg-slate-800 text-sky-400"
        : "text-white/90",
    ].join(" ");


  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg backdrop-blur-xl">

      <div className="dw-navbar__inner">

        {/* Brand */}
        <div
          className="flex shrink-0 items-center"
          onClick={closeMobileNav}
        >
          <Logo />
        </div>


        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex lg:gap-10"
        >
          <NavLink
           to="/events"
           className={navLinkClass}
          >
            Events
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About Us
          </NavLink>

          <button
            type="button"
            onClick={handleServicesClick}
            className="text-sm font-semibold tracking-wide text-white/85 transition-colors duration-200 hover:text-sky-400"
          >
            Services
          </button>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </nav>


        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={
            mobileNavOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileNavOpen((previous) => !previous);
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 hover:text-sky-400 md:hidden"
        >
          {mobileNavOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>


      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileNavOpen}
        className={[
          "grid overflow-hidden md:hidden",
          "border-t border-white/10",
          "bg-slate-950/98",
          "transition-[grid-template-rows,opacity]",
          "duration-300 ease-in-out",
          mobileNavOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <nav
          aria-label="Mobile navigation"
          className="min-h-0 overflow-hidden"
        >
          <ul className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-5 py-3 sm:px-8">

            <li>
              <NavLink
                to="/"
                onClick={closeMobileNav}
                className={mobileLinkClass}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
               to="/events"
               onClick={closeMobileNav}
               className={mobileLinkClass}
              >
                Events
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMobileNav}
                className={mobileLinkClass}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <button
                type="button"
                onClick={handleServicesClick}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-white/90 transition-colors hover:bg-slate-800 hover:text-sky-400"
              >
                Services
              </button>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMobileNav}
                className={mobileLinkClass}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>

    </header>
  );
};


export default NavBar;