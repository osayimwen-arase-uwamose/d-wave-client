import { ChevronDown } from "lucide-react";

import Container from "../layout/Container.jsx";
import Section from "../layout/Section.jsx";

const FAQ_ITEMS = [
  {
    question: "How far in advance should I book an artist?",
    answer:
    "We recommend getting in touch as early as possible. Availability depends on the artist, event date, location, and type of engagement. Contact our team with your plans so we can discuss the options.",
  },
  {
    question: "Do you handle event production logistics?",
    answer:
    "Production and logistical requirements depend on the event and the services agreed upon. Tell us about your event, venue, audience, and requirements so we can establish how we can help.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
    "Cancellation terms depend on the services booked and the terms agreed upon for the engagement. Please review your booking agreement or contact our team for clarification before making changes to a booking.",
  },
  {
    question: "Can I submit a demo for artist management?",
    answer:
    "Yes. Contact us with a brief introduction, links to your music or performances, and information about your artistic goals. Please use links to your work rather than attaching large files to the contact form.",
  },
];

const FAQSection = () => {
return ( 
<Section className="bg-background-light py-16 sm:py-20"> 
  <Container className="w-full"> 
    <div className="mx-auto flex max-w-4xl flex-col gap-10"> 
      <div className="flex flex-col gap-3 text-center"> 

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Need some answers? 
        </p>

        <h2 className="font-display text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
          A few things you may want to know before getting in touch.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-border bg-surface"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-text marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-6">
              <span>{item.question}</span>

              <ChevronDown
                aria-hidden="true"
                size={20}
                className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
              />
            </summary>

            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="text-sm leading-7 text-text-muted sm:text-base">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </Container>
</Section>
);
};

export default FAQSection;
