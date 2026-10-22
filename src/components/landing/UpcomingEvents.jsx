import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import EventCard from "./EventCard.jsx";
import useEvents from "../../hooks/useEvents.js";

const UpcomingEvents = forwardRef(
  function UpcomingEvents(
    { onScrollToNewsLetter },
    ref,
  ) {
    const {
      futureEvents = [],
      pastEvents = [],
      todaysEvents = [],
      loading,
      error,
    } = useEvents();

    const hasTodaysEvents = todaysEvents.length > 0;
    const hasFutureEvents = futureEvents.length > 0;

    const displayedEvents = loading || error
      ? []
      : hasTodaysEvents
        ? todaysEvents.slice(0, 3)
        : hasFutureEvents
          ? futureEvents.slice(0, 3)
          : pastEvents.slice(0, 3);

    const heading = loading
      ? "Loading Events..."
      : error
        ? "Events"
        : hasTodaysEvents
          ? "Happening Today"
          : hasFutureEvents
            ? "Upcoming Events"
            : "Previous Events";

    const subtitle = loading
      ? "Please wait while we fetch the latest events."
      : error
        ? "Unable to load events at the moment."
        : hasTodaysEvents
          ? "It's happening today. Be part of the energy."
          : hasFutureEvents
            ? "Don't miss out on our upcoming experiences."
            : "All events have concluded for now.";

    return (
      <section
        ref={ref}
        id="events"
        className="dw-section dw-events"
        aria-labelledby="events-heading"
      >
        <div className="dw-container">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="events-heading"
                className="mb-2 text-4xl font-bold tracking-tight text-slate-900"
              >
                {heading}
              </h2>

              <p className="text-slate-600">
                {subtitle}
              </p>
            </div>

            <Link
              className="inline-flex items-center gap-2 font-bold text-sky-700 transition-colors hover:text-sky-500"
              to="/events"
            >
              View All Events

              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {loading && (
            <p role="status" className="py-8 text-slate-600">
              Loading events...
            </p>
          )}

          {error && (
            <p role="alert" className="py-8 text-red-600">
              We couldn't retrieve events. Please try again later.
            </p>
          )}

          {!loading && !error && displayedEvents.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
              <p className="mb-4 text-slate-600">
                No events are currently listed.
              </p>

              <button
                type="button"
                className="font-bold text-sky-700 hover:text-sky-500"
                onClick={() => onScrollToNewsLetter?.()}
              >
                Subscribe for updates
              </button>
            </div>
          )}

          {!loading && !error && displayedEvents.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                />
              ))}
            </div>
          )}

          {!loading && !error && !hasTodaysEvents && !hasFutureEvents && (
            <p className="mt-6 text-center text-sm text-slate-500">
              Subscribe to hear when new dates are announced.
            </p>
          )}
        </div>
      </section>
    );
  },
);

export default UpcomingEvents;
