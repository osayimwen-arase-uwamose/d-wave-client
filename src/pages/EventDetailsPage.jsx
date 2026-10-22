import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout.jsx";
import PageContainer from "../components/layout/PageContainer.jsx";

import EventDetailsHero from "../components/event-details/EventDetailsHero.jsx";
import EventDetailsMainContent from "../components/event-details/EventDetailsMainContent.jsx";
import Gallery from "../components/event-details/Gallery.jsx";

import useEvents from "../hooks/useEvents.js";

function EventDetailsPage() {
  const { eventId } = useParams();

  const {
    events = [],
    loading,
    error,
    pastEvents = [],
  } = useEvents();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (loading) return;

    if (!Array.isArray(events) || !eventId) {
      setEvent(null);
      return;
    }

    const foundEvent = events.find(
      (item) => String(item._id) === String(eventId)
    );

    setEvent(foundEvent ?? null);
  }, [eventId, events, loading]);

  const eventIsPast =
    Boolean(event) &&
    pastEvents.some(
      (pastEvent) => String(pastEvent._id) === String(event._id)
    );

  return (
      <MainLayout>
        <PageContainer>
          {loading ? 
          (
            <section
              className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6"
              aria-live="polite"
            >
              <div className="text-center">
                <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600" />

                <p className="font-medium text-slate-600">
                  Loading event details...
                </p>
              </div>
            </section>
          ) 
          : error ? 
          (
            <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-6 py-20">
              <div className="w-full rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  We couldn’t load this event
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Something went wrong while retrieving the event information.
                  Please try again later.
                </p>

                <Link
                  to="/events"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  Browse events
                </Link>
              </div>
            </section>
          ) 
          : !event ? 
          (
            <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-6 py-20">
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
                  Event not found
                </p>

                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                  This event may no longer be available.
                </h1>

                <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
                  The event link may be incorrect, or the event may have been
                  removed.
                </p>

                <Link
                  to="/events"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  Explore all events
                </Link>
              </div>
            </section>
          ) 
          : 
          (
            <>
              <EventDetailsHero event={event} />

              <EventDetailsMainContent
                event={event}
                eventIsPast={eventIsPast}
              />

              <Gallery event={event} />
            </>
          )}
        </PageContainer>
      </MainLayout>
  );
}

export default EventDetailsPage;
