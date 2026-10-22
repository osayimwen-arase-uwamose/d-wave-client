import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
} from "lucide-react";

import { Link } from "react-router-dom";

const formatEventDate = (value) => {
  if (!value) return "Date to be announced";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Date to be announced";
  }

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const formatEventTime = (value) => {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

function EventDetailsHero({ event }) {
  const flyerUrl = event?.flyerUrl;
  const eventDate = formatEventDate(event?.scheduledAt);
  const eventTime = formatEventTime(event?.scheduledAt);

  const ticketUrl =
    typeof event?.ticketUrl === "string" &&
    /^https?:\/\//i.test(event.ticketUrl.trim())
      ? event.ticketUrl.trim()
      : null;

  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {flyerUrl && (
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-40 blur-2xl"
          style={{ backgroundImage: `url("${flyerUrl}")` }}
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950"
      />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl sm:min-h-[420px] lg:col-span-7 lg:min-h-[520px]">
          {flyerUrl ? (
            <img
              src={flyerUrl}
              alt={`${event.title} event flyer`}
              className="relative z-10 max-h-[620px] w-full object-contain"
            />
          ) : (
            <div className="flex min-h-[320px] w-full flex-col items-center justify-center gap-4 text-center text-white/70">
              <CalendarDays
                size={48}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <p className="text-sm font-medium">
                Event artwork is not available.
              </p>
            </div>
          )}
        </div>

        <div className="relative z-10 lg:col-span-5">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-sky-200/30 bg-sky-400/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky-200">
              {event.category || "D-Wave Event"}
            </span>
          </div>

          <div className="rounded-2xl border border-sky-400/30 bg-sky-600 p-6 shadow-2xl shadow-sky-950/30 sm:p-8 lg:p-9">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-sky-100">
              The experience
            </p>

            <h1 className="break-words text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {event.title}
            </h1>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <CalendarDays
                  className="mt-0.5 shrink-0 text-sky-100"
                  size={21}
                  aria-hidden="true"
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-100">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-white sm:text-base">
                    {eventDate}
                  </p>
                </div>
              </div>

              {eventTime && (
                <div className="flex items-start gap-3">
                  <Clock3
                    className="mt-0.5 shrink-0 text-sky-100"
                    size={21}
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-100">
                      Event time
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                      {eventTime}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 shrink-0 text-sky-100"
                  size={21}
                  aria-hidden="true"
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-100">
                    Venue
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold leading-6 text-white sm:text-base">
                    {event.venue || "Venue to be announced"}
                  </p>
                </div>
              </div>
            </div>

            {ticketUrl ? (
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-sky-800 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600 sm:w-auto"
              >
                <Ticket size={18} aria-hidden="true" />
                Get tickets
              </a>
            ) : (
              <p className="mt-8 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium leading-6 text-white">
                Ticket information will be announced soon.
              </p>
            )}

            <Link
              to="/events"
              className="mt-5 inline-flex items-center text-sm font-semibold text-white/90 underline decoration-white/40 underline-offset-4 transition hover:text-white"
            >
              Explore other events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetailsHero;