import {
  CalendarDays,
  Handshake,
  Headphones,
  Mic2,
  Music,
  Radio,
  Settings,
  Users,
} from "lucide-react";

const ICONS = {
  calendar: CalendarDays,
  handshake: Handshake,
  headphones: Headphones,
  mic: Mic2,
  music: Music,
  radio: Radio,
  settings: Settings,
  users: Users,
};

const ServicesCard = ({
  icon = "music",
  title,
  description,
}) => {
  const Icon = ICONS[icon] ?? Music;

  return (
    <article className="dw-service-card">
      <div className="dw-service-card__icon">
        <Icon size={22} aria-hidden="true" />
      </div>

      <div>
        <h3 className="dw-service-card__title">
          {title}
        </h3>

        <p className="dw-service-card__description">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServicesCard;
