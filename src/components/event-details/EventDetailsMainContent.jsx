import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Ticket,
} from "lucide-react";

const formatEventDate = (value) => {
  if (!value) return "To be announced";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "To be announced";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

function EventDetailsMainContent({ event, eventIsPast = false }) {
  const ticketUrl = event?.ticketUrl.trim(); 

  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-sky-600" />

            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-700">
              Event overview
            </p>
          </div>

          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            About this experience
          </h2>

          <div className="mt-6 max-w-3xl">
            {event.description ? (
              <p className="whitespace-pre-line text-base leading-8 text-slate-600 sm:text-lg">
                {event.description}
              </p>
            ) : (
              <p className="text-base leading-8 text-slate-500">
                More information about this event will be available soon.
              </p>
            )}
          </div>

          {event.category && (
            <div className="mt-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Category: {event.category}
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-700">
              Make your plans
            </p>

            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
              Event information
            </h3>

            <div className="mt-7 space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <CalendarDays size={20} aria-hidden="true" />
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Date
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {formatEventDate(event.scheduledAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <MapPin size={20} aria-hidden="true" />
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Venue
                  </p>

                  <p className="mt-1 break-words font-semibold leading-6 text-slate-900">
                    {event.venue || "To be announced"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              {eventIsPast ? (
                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="font-bold text-slate-800">
                    This event has ended
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Ticket sales may no longer be available for this event.
                  </p>
                </div>
              ) : ticketUrl ? (
                <a
                  href={ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  <Ticket size={18} aria-hidden="true" />
                  Get tickets
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <div className="rounded-xl bg-sky-50 p-4">
                  <p className="font-bold text-sky-900">
                    Tickets coming soon
                  </p>

                  <p className="mt-1 text-sm leading-6 text-sky-800">
                    Ticket information has not been provided for this event.
                  </p>
                </div>
              )}

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Ticket availability, pricing, and checkout are handled by the
                external ticket provider.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default EventDetailsMainContent;
