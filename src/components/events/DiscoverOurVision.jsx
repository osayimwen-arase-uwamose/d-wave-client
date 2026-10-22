import { Diamond, Infinity as InfinityIcon } from "lucide-react";
import { Link } from "react-router-dom";

const DiscoverOurVision = () => {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-100 blur-3xl"
      />

      <div className="relative z-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
          Who We Are
        </p>

        <h3 className="mb-4 text-xl font-bold text-slate-900">
          Discover Our Vision
        </h3>

        <p className="text-sm leading-7 text-slate-600">
          D-Wave Entertainment is more than a brand; it's a cultural movement,
          pioneering Afro culture and exclusive experiences. We curate
          immersive experiences that blend premium audio with stunning visuals,
          fostering a community united by sound.
        </p>

        <div className="mt-6 space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <Diamond size={21} aria-hidden="true" />
            </span>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Premium Management
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Elevating artist careers through strategic growth.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <InfinityIcon size={22} aria-hidden="true" />
            </span>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Infinite Experience
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Creating memories that last beyond the night.
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/about-us"
          className="mt-5 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Learn More About Us
        </Link>
      </div>
    </aside>
  );
};

export default DiscoverOurVision;
