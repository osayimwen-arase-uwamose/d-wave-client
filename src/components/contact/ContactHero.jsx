import { ArrowDown } from "lucide-react";

import Container from "../layout/Container.jsx";
import Section from "../layout/Section.jsx";

const CONTACT_HERO_IMAGE =
"https://res.cloudinary.com/dslzm3lo6/image/upload/v1774264291/image_xpufb6.jpg";

const ContactHero = () => {
  return ( 
    <Section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-dwave-dark py-24 text-white sm:min-h-[460px]">
      <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{
      backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.62), rgba(10, 15, 30, 0.84)), url("${CONTACT_HERO_IMAGE}")`,
      }}
      />
        <Container className="w-full">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              D-Wave Entertainment
            </p>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Get in touch.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Ready to elevate your event? Whether it&apos;s artist management,
              private parties, or general enquiries, we&apos;re here to make it
              happen.
            </p>

            <a
              href="#contact-content"
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold transition-colors hover:border-primary-light hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light"
            >
              Contact our team
              <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
        </Container>
    </Section>
  );
};

export default ContactHero;
