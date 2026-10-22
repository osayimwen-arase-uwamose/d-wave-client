import { forwardRef } from "react";

import Container from "../../layout/Container.jsx";
import ServicesCard from "./ServicesCard.jsx";

const Services = forwardRef(
  function Services({ data }, ref) {
    const serviceImages = data?.serviceImages ?? [];

    const gallery = [
      {
        image: serviceImages[0]?.url,
        alt: "Sound mixing console",
        height: "h-64",
      },
      {
        image: serviceImages[1]?.url,
        alt: "Audio equipment at an event",
        height: "h-48",
      },
      {
        image: serviceImages[2]?.url,
        alt: "Backstage equipment",
        height: "h-48",
      },
      {
        image: serviceImages[3]?.url,
        alt: "Audience enjoying a live performance",
        height: "h-64",
      },
    ];

    const servicesRendered = [
      {
        serviceTitle: "Events & Live Experiences",
        serviceIcon: "calendar",
        serviceDescription:
          "From live performances and concerts to major entertainment events, we bring people together through experiences worth remembering. We handle the planning and coordination that turn ideas into moments people want to be part of.",
      },
      {
        serviceTitle: "Artist Management & Development",
        serviceIcon: "mic",
        serviceDescription:
          "We work closely with artists to develop their careers, shape their identity, and navigate the business behind their music. From strategic planning to brand partnerships, we help turn creative potential into lasting growth.",
      },
      {
        serviceTitle: "Brand Partnerships & Culture",
        serviceIcon: "handshake",
        serviceDescription:
          "We connect artists, brands, and communities through partnerships that feel authentic. By bringing entertainment and culture together, we create opportunities that build meaningful relationships and leave a lasting impression.",
      },
    ];

    return (
      <section
        ref={ref}
        id="services"
        className="dw-section dw-services"
        aria-labelledby="services-heading"
      >
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-sky-700">
                Management
              </span>

              <h2
                id="services-heading"
                className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl"
              >
                {data?.title ?? "Our Services"}
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                {data?.paragraph ?? "We bring people together through live entertainment, help artists build their careers, and create partnerships that connect brands with culture. From developing an artist's identity to producing memorable experiences, we bring the right people, ideas, and expertise together to make things happen."}
              </p>

              <div className="grid gap-6">
                {(data?.servicesRendered ?? servicesRendered).map(
                  (service) => (
                    <ServicesCard
                      key={service._id ?? service.serviceTitle}
                      icon={service.serviceIcon}
                      title={service.serviceTitle}
                      description={service.serviceDescription}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div
                className="absolute -inset-4 rounded-2xl bg-sky-500/15 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  {gallery.slice(0, 2).map((item, index) => (
                    <div
                      key={item.alt}
                      role={item.image ? "img" : undefined}
                      aria-label={item.image ? item.alt : undefined}
                      className={`dw-services__gallery-image ${item.height}`}
                      style={
                        item.image
                          ? {
                              backgroundImage: `url("${item.image}")`,
                            }
                          : undefined
                      }
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  {gallery.slice(2).map((item) => (
                    <div
                      key={item.alt}
                      role={item.image ? "img" : undefined}
                      aria-label={item.image ? item.alt : undefined}
                      className={`dw-services__gallery-image ${item.height}`}
                      style={
                        item.image
                          ? {
                              backgroundImage: `url("${item.image}")`,
                            }
                          : undefined
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  },
);

export default Services;
