import { useNavigate } from "react-router-dom";

import { CalendarDays, Mic2 } from "lucide-react";

import Container from "../layout/Container.jsx";


const Hero = ({
  onScrollToEvents,
  onScrollToServices,
  data,
}) => {
  const navigate = useNavigate();

  const backgroundImage =
    data?.backgroundImage ??
    "https://res.cloudinary.com/gbpvhers/image/upload/v1792434098/bg-2.jpg";


  const titlePartOne =
    data?.title?.partOne ??
    "D-WAVE ENTERTAINMENT";

  const titlePartTwo =
    data?.title?.partTwo ??
    "CULTURALLY RELEVANT EXPERIENCES";

  const highlight =
    data?.highlight ??
    "ENTERTAINMENT • CULTURE • COMMUNITY";

  const subtitle =
    data?.subTitle ??
    "Building community, culture, and opportunity through entertainment, football and structured experience.";


  const handleEventsClick = () => {
    if (onScrollToEvents) {
      onScrollToEvents();
      return;
    }

    navigate("/events");
  };


  const handleServicesClick = () => {
    onScrollToServices?.();
  };


  return (
    <section
      className="dw-hero"
      aria-labelledby="hero-title"
    >

      {/* Background image and overlay */}
      <div
        className="dw-hero__background"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
        aria-hidden="true"
      />


      {/* Hero content */}
      <Container className="dw-hero__container">

        <div className="dw-hero__content">

          <span className="dw-hero__eyebrow">
            {highlight}
          </span>


          <h1
            id="hero-title"
            className="dw-hero__title"
          >
            <span className="dw-hero__title-primary">
              {titlePartOne}
            </span>

            <span className="dw-hero__title-accent">
              {titlePartTwo}
            </span>
          </h1>


          <p className="dw-hero__description">
            {subtitle}
          </p>


          <div className="dw-hero__actions">

            <button
              type="button"
              className="dw-button dw-button--outline"
              onClick={handleEventsClick}
            >
              <CalendarDays size={18} aria-hidden="true" />

              Upcoming Events
            </button>


            <button
              type="button"
              className="dw-button dw-button--glass"
              onClick={handleServicesClick}
            >
              <Mic2 size={18} aria-hidden="true" />

              Artist Services
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;
