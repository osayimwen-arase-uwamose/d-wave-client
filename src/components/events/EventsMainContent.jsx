import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

import DiscoverOurVision from "./DiscoverOurVision.jsx";

const DEFAULT_CATEGORIES = [
  "Club Night",
  "After Party",
  "Rooftop",
  "All White Party",
];

const formatEventDate = (value) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return {
      day: "--",
      month: "---",
      year: "",
      time: "Time unavailable",
    };
  }

  return {
    day: date.toLocaleString("en-US", { day: "2-digit" }),
    month: date.toLocaleString("en-US", { month: "short" }),
    year: date.getFullYear(),
    time: date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "2-digit",
    }),
  };
};

const getSortedEvents = (events) => {
  const now = Date.now();

  const validEvents = events.filter(
    (event) =>
      event?._id
      && event.scheduledAt
      && !Number.isNaN(new Date(event.scheduledAt).getTime()),
  );

  const upcoming = validEvents
    .filter((event) => new Date(event.scheduledAt).getTime() >= now)
    .sort(
      (a, b) =>
        new Date(a.scheduledAt).getTime()
        - new Date(b.scheduledAt).getTime(),
    );

  const past = validEvents
    .filter((event) => new Date(event.scheduledAt).getTime() < now)
    .sort(
      (a, b) =>
        new Date(b.scheduledAt).getTime()
        - new Date(a.scheduledAt).getTime(),
    );

  return [...upcoming, ...past];
};

const EventsMainContent = ({
  events = [],
  loading = false,
  error = null,
  onRetry,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const categories = useMemo(() => {
    const available = new Set([
      ...DEFAULT_CATEGORIES,
      ...events
        .map((event) => event.category?.trim())
        .filter(Boolean),
    ]);

    return [...available].sort((a, b) => a.localeCompare(b));
  }, [events]);

  const filteredEvents = useMemo(() => {
    const sorted = getSortedEvents(events);

    if (selectedCategory === "All Categories") {
      return sorted;
    }

    return sorted.filter(
      (event) => event.category === selectedCategory,
    );
  }, [events, selectedCategory]);

  const errorMessage =
    typeof error === "string"
      ? error
      : error?.message || "We couldn't load the events. Please try again.";

  return (
    <section className="bg-slate-50 py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section heading and category filter */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              D-Wave Entertainment
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              THE SCHEDULE
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Explore upcoming parties and exclusive events.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-60">
            <label
              htmlFor="event-category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Filter by category
            </label>

            <select
              id="event-category"
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
              className="block w-full cursor-pointer appearance-auto rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 md:min-w-60"
            >
              <option
                value="All Categories"
                className="bg-white text-slate-900"
              >
                All Categories
              </option>

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-white text-slate-900"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Schedule and vision sidebar */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            {loading && events.length === 0 ? (
              <div
                className="space-y-4"
                role="status"
                aria-label="Loading events"
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex animate-pulse gap-4 rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <div className="h-20 w-16 shrink-0 rounded-lg bg-slate-200" />

                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-4 w-1/3 rounded bg-slate-200" />
                      <div className="h-5 w-2/3 rounded bg-slate-200" />
                      <div className="h-4 w-1/2 rounded bg-slate-200" />
                    </div>
                  </div>
                ))}

                <span className="sr-only">Loading events...</span>
              </div>
            ) : error && events.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h3 className="font-semibold text-slate-900">
                  Unable to load events
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {errorMessage}
                </p>

                {onRetry && (
                  <button
                    type="button"
                    onClick={onRetry}
                    className="dw-button dw-button--primary mt-5"
                  >
                    Try Again
                  </button>
                )}
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
                <CalendarDays
                  size={34}
                  className="mx-auto text-sky-700"
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  No events found
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {selectedCategory === "All Categories"
                    ? "There are no events to display right now. Please check back soon."
                    : `There are no events in the ${selectedCategory} category.`}
                </p>

                {selectedCategory !== "All Categories" && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All Categories")}
                    className="mt-4 text-sm font-bold text-sky-700 transition hover:text-sky-900"
                  >
                    View all categories
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredEvents.map((event) => {
                  const date = formatEventDate(event.scheduledAt);
                  const isPast =
                    new Date(event.scheduledAt).getTime() < Date.now();

                  return (
                    <article
                      key={event._id}
                      className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md sm:p-5"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        {/* Date */}
                        <div className="flex shrink-0 items-center gap-3 border-b border-slate-100 pb-3 sm:w-[84px] sm:flex-col sm:justify-center sm:gap-1 sm:border-b-0 sm:border-r sm:border-slate-200 sm:pb-0 sm:pr-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                            {date.month}
                          </span>

                          <span className="text-3xl font-extrabold leading-none text-slate-900 sm:text-4xl">
                            {date.day}
                          </span>

                          <span className="text-xs text-slate-500">
                            {date.year}
                          </span>
                        </div>

                        {/* Flyer */}
                        {event.flyerUrl && (
                          <Link
                            to={`/event-info/${event._id}`}
                            className="hidden h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:block"
                            aria-label={`View ${event.title}`}
                            tabIndex={-1}
                          >
                            <img
                              src={event.flyerUrl}
                              alt=""
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </Link>
                        )}

                        {/* Event information */}
                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            {event.category && (
                              <span className="rounded-full bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-800">
                                {event.category}
                              </span>
                            )}

                            <span className="text-xs text-slate-500">
                              {isPast ? "Past Event" : "Upcoming"}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700 sm:text-xl">
                            <Link to={`/event-info/${event._id}`}>
                              {event.title}
                            </Link>
                          </h3>

                          <div className="mt-3 flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-4">
                            <span className="flex items-center gap-2">
                              <Clock3
                                size={14}
                                className="shrink-0 text-sky-700"
                                aria-hidden="true"
                              />
                              {date.time}
                            </span>

                            {event.venue && (
                              <span className="flex items-center gap-2">
                                <MapPin
                                  size={14}
                                  className="shrink-0 text-sky-700"
                                  aria-hidden="true"
                                />
                                {event.venue}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Detail navigation */}
                        <Link
                          to={`/event-info/${event._id}`}
                          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-sky-700 hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600/20 sm:self-center"
                        >
                          Event Info
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {error && events.length > 0 && (
              <p className="mt-4 text-sm text-amber-700" role="status">
                We couldn't refresh the event list. Previously loaded events
                are still displayed.
              </p>
            )}
          </div>

          <div className="min-w-0">
            <DiscoverOurVision />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsMainContent;
