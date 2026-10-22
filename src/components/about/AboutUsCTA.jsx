import {
ArrowRight,
CalendarDays,
MessageCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Container from "../layout/Container.jsx";

const AboutUsCTA = ({
  onGoToServices,
}) => {
  const navigate = useNavigate();

  return ( 
    <section
      className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28"
      aria-labelledby="about-cta-heading"
    > 
      <div
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
          aria-hidden="true"
        />
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-sky-300">
            <MessageCircle
              size={28}
              aria-hidden="true"
            />
          </span>

          <h2
            id="about-cta-heading"
            className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Ready to amplify your sound?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Whether you're an artist looking for management
            or a brand looking to host an unforgettable
            event, we'd love to hear from you.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="dw-button dw-button--primary w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => navigate("/events")}
              className="dw-button dw-button--outline w-full sm:w-auto"
            >
              <CalendarDays
                size={18}
                aria-hidden="true"
              />
              See Upcoming Events
            </button>
          </div>

          {onGoToServices && (
            <button
              type="button"
              onClick={onGoToServices}
              className="mt-6 text-sm font-semibold text-sky-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Explore our services
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AboutUsCTA;
