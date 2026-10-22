import {
Music2,
Users,
} from "lucide-react";

import theExperience from "../../assets/the-experience.webp";
import theTalent from "../../assets/the-talent.webp";

import Container from "../layout/Container.jsx";

const missionCards = [
  {
    title: "The Gist",
    image: theTalent,
    imageAlt: "Visual representing live entertainment and artist talent",
    Icon: Music2,
    description:
    "Immersive event production, venue partnerships, and unforgettable nights. Comprehensive artist management, booking representation, and career growth strategies. We handle the business so artists can handle the music, and we create the moments that people talk about for years.",
  },
  {
    title: "Community & Sports",
    image: theExperience,
    imageAlt: "Visual representing entertainment production and creative experiences",
    Icon: Users,
    description:
    "Empowering local athletes and community initiatives through high-performance events and mentorship programs.",
  },
];

const AboutUsMission = () => {
  return ( 
    <section
      className="relative overflow-hidden bg-white py-20 md:py-28"
      aria-labelledby="about-mission-heading"
    > 
      <div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em] text-sky-700">
              <span
                className="h-0.5 w-8 bg-sky-600"
                aria-hidden="true"
              />
              Our Mission
            </p>

            <h2
              id="about-mission-heading"
              className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Two Worlds,{" "}
              <span className="text-sky-600">
                One Vision
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              We are the nexus where chaotic creativity
              meets structured success. From throwing the
              wildest underground parties to guiding the
              careers of top-tier talent, we do it all with
              passion and precision.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {missionCards.map(
              ({
                title,
                image,
                imageAlt,
                Icon,
                description,
              }) => (
                <article
                  key={title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100 sm:h-72">
                    <img
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                        <Icon
                          size={20}
                          aria-hidden="true"
                        />
                      </span>

                      <h3 className="text-xl font-extrabold text-slate-950">
                        {title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-slate-600 md:text-base">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsMission;
