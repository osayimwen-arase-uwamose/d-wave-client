import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const getValidTicketUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  try {
    const url = new URL(value.trim());

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
};

const isValidEvent = (event) => (
  Boolean(event?._id)
  && Boolean(event?.scheduledAt)
  && !Number.isNaN(new Date(event.scheduledAt).getTime())
);

const getSpotlightEvent = (events) => {
  const now = new Date();

  const validEvents = events
    .filter(isValidEvent)
    .sort(
      (first, second) =>
        new Date(first.scheduledAt).getTime()
        - new Date(second.scheduledAt).getTime(),
    );

  if (!validEvents.length) {
    return null;
  }

  const todaysEvents = validEvents.filter((event) => {
    const date = new Date(event.scheduledAt);

    return (
      date.getFullYear() === now.getFullYear()
      && date.getMonth() === now.getMonth()
      && date.getDate() === now.getDate()
    );
  });

  if (todaysEvents.length) {
    return {
      event: todaysEvents[0],
      status: "Happening Today",
    };
  }

  const upcomingEvent = validEvents.find(
    (event) => new Date(event.scheduledAt) > now,
  );

  if (upcomingEvent) {
    return {
      event: upcomingEvent,
      status: "Coming Up Next",
    };
  }

  return {
    event: validEvents[validEvents.length - 1],
    status: "Latest Event",
  };
};

const EventHeroSkeleton = () => (
  <section
    className="relative mt-3 overflow-hidden rounded-2xl md:mt-0"
    aria-label="Featured event loading"
  >
    <div className="min-h-[460px] animate-pulse bg-slate-200 md:min-h-[620px]">
      <div className="flex min-h-[460px] items-end p-5 md:min-h-[620px] md:p-10">
        <div className="w-full max-w-lg space-y-4 rounded-xl bg-white/70 p-6">
          <div className="h-4 w-32 rounded bg-slate-300" />
          <div className="h-8 w-4/5 rounded bg-slate-300" />
          <div className="h-4 w-3/5 rounded bg-slate-300" />
          <div className="h-10 w-36 rounded bg-slate-300" />
        </div>
      </div>
    </div>
  </section>
);

const EventsHero = ({ events = [], loading = false }) => {
  const spotlight = getSpotlightEvent(events);

  if (loading && !spotlight) {
    return <EventHeroSkeleton />;
  }

  if (!spotlight) {
    return (
      <section className="mt-3 overflow-hidden rounded-2xl bg-slate-100 md:mt-0">
        <div className="flex min-h-[360px] items-center justify-center px-6 py-16 text-center md:min-h-[440px]">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              D-Wave Entertainment
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Experiences Worth Looking Forward To
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              There are no events to feature right now. Check back soon for
              upcoming experiences.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { event, status } = spotlight;
  const scheduledAt = new Date(event.scheduledAt);
  const ticketUrl = getValidTicketUrl(event.ticketUrl);

  const formattedDate = scheduledAt.toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <section className="relative isolate mt-3 min-h-[500px] overflow-hidden rounded-2xl bg-slate-950 sm:min-h-[560px] md:mt-0 md:min-h-[680px]">
      {/* Soft, blurred backdrop gives the flyer depth without replacing it. */}
      {event.flyerUrl && (
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-50 blur-2xl"
          style={{ backgroundImage: `url("${event.flyerUrl}")` }}
          aria-hidden="true"
        />
      )}

      {/* Keep the original flyer visible, including portrait-format flyers. */}
      <div className="absolute inset-0 flex items-center justify-center">
        {event.flyerUrl ? (
          <img
            src={event.flyerUrl}
            alt={`${event.title} event flyer`}
            className="h-full w-full object-contain"
            fetchPriority="high"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900 px-6 text-center">
            <p className="text-3xl font-bold text-white md:text-5xl">
              D-Wave Entertainment
            </p>
          </div>
        )}
      </div>

      {/* Protect text contrast while keeping the flyer visible. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/10"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[500px] items-end p-4 sm:min-h-[560px] sm:p-6 md:min-h-[680px] md:p-10">
        <div className="w-full max-w-xl rounded-xl border border-white/20 bg-primary p-5 shadow-2xl sm:p-7 md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
              {status}
            </span>

            {event.category && (
              <span className="text-xs font-semibold text-white/90">
                {event.category}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            {event.title}
          </h1>

          {event.description && (
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              {event.description.length > 180
                ? `${event.description.slice(0, 177).trimEnd()}...`
                : event.description}
            </p>
          )}

          <div className="mt-5 space-y-3 text-sm font-medium text-white">
            <div className="flex items-start gap-3">
              <CalendarDays
                size={18}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />

              <span>{formattedDate}</span>
            </div>

            {event.venue && (
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />

                <span>{event.venue}</span>
              </div>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={`/event-info/${event._id}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Event Details
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            {ticketUrl && (
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-transparent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Get Tickets
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
