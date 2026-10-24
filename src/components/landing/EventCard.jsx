import { CalendarDays, ExternalLink, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  const scheduledAt = new Date(event.scheduledAt);

  const month = scheduledAt.toLocaleString("en-US", {
    month: "short",
  });

  const date = scheduledAt.toLocaleString("en-US", {
    day: "2-digit",
  });

  const ticketUrl = event.ticketUrl;

  const handleGetTickets = () => {
    if (!ticketUrl) {
      return;
    }

    window.open(
      ticketUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <article className="dw-event-card">
      <div className="dw-event-card__image">
        <img
          src={event.flyerUrl}
          alt={`${event.title} event flyer`}
          loading="lazy"
        />

        <div className="dw-event-card__date">
          <span className="dw-event-card__month">
            {month}
          </span>

          <span className="dw-event-card__day">
            {date}
          </span>
        </div>
      </div>

      <div className="dw-event-card__body">
        <div className="dw-event-card__meta">
          <span className="dw-event-card__category">
            {event.category}
          </span>

          <span className="dw-event-card__venue">
            <MapPin size={15} aria-hidden="true" />
            {event.venue}
          </span>
        </div>

        <h3 className="dw-event-card__title">
          {event.title}
        </h3>

        <p className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={16} aria-hidden="true" />

          {scheduledAt.toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>

        <button
          type="button"
          className="dw-button dw-button--primary dw-button--full dw-event-card__ticket"
          onClick={handleGetTickets}
        >
          Get Tickets

          <ExternalLink size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default EventCard;
