import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Container from "../layout/Container.jsx";
import Section from "../layout/Section.jsx";
import ContactForm from "./ContactForm.jsx";

const CONTACT_DETAILS = [
  {
    label: "Email",
    icon: Mail,
    links: [
      {
        label: "[info@dwaveentertainment.co.uk](mailto:info@dwaveentertainment.co.uk)",
        href: "mailto:info@dwaveentertainment.co.uk",
      },
    ],
  },
  {
    label: "Phone",
    icon: Phone,
    links: [
      {
        label: "+44 7888 642492",
        href: "tel:+447888642492",
      },
    ],
    note: "Contact us for enquiries and availability.",
  },
  {
    label: "Headquarters",
    icon: MapPin,
    text: "Coventry, UK",
  },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/d_waveentertainment/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/447888642492",
  },
];

const ContactMainContent = () => {
  return ( 
    <Section
      id="contact-content"
      className="scroll-mt-24 py-16 sm:py-20"
    > 
      <Container className="w-full"> 
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16"> 
          <ContactForm />
            <aside className="flex min-w-0 flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  Contact Information
                </h2>

                <p className="text-sm leading-6 text-text-muted">
                  Need a more direct way to reach us? Use the contact details
                  below.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {CONTACT_DETAILS.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon aria-hidden="true" size={21} />
                      </div>

                      <div className="flex min-w-0 flex-col gap-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                          {detail.label}
                        </h3>

                        {detail.links?.map((link) => (
                          <a
                            key={link.href}
                            className="break-words text-sm font-semibold text-text transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            href={link.href}
                          >
                            {link.label}
                          </a>
                        ))}

                        {detail.text && (
                          <p className="text-sm font-semibold text-text">
                            {detail.text}
                          </p>
                        )}

                        {detail.note && (
                          <p className="text-xs leading-5 text-text-muted">
                            {detail.note}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-text">
                    Follow D-Wave
                  </h3>

                  <p className="mt-1 text-sm text-text-muted">
                    Keep up with our activities and announcements.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3"> {SOCIAL_LINKS.map((social) => ( 
                  <a 
                  key={social.label} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" 
                  href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Open D-Wave Entertainment on ${social.label}`} > 
                    <span>
                      {social.label}
                    </span>
                  </a> 
                ))} 
                </div>
              </div>
            </aside>
        </div>
      </Container>
    </Section>
  );
};

export default ContactMainContent;
