import Container from "../layout/Container.jsx";

const FOUNDER_IMAGE =
"https://res.cloudinary.com/dslzm3lo6/image/upload/v1774120945/the-visionary_xyfaac.jpg";

const AboutUsVisionary = () => {
  return ( 
    <section
      className="overflow-hidden border-y border-slate-200 bg-slate-50 py-20 md:py-28"
      aria-labelledby="about-visionary-heading"
    > 
    <Container> 
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"> 
          <div className="order-2 lg:order-1"> 
            <p className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em] text-sky-700"> 
              <span
                className="h-0.5 w-8 bg-sky-600"
                aria-hidden="true"
              />
              The Visionary 
            </p>
            
            <h2
              id="about-visionary-heading"
              className="text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl"
            >
              Oduwaiye E. Uwamose
            </h2>

            <p className="mt-3 text-lg font-semibold text-sky-700">
              Founder &amp; CEO
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 md:text-lg">
              <p>
                Based in the heart of Coventry, Oduwaiye E.
                Uwamose founded D-Wave Entertainment with a
                passion for community building and a sharp
                eye for the evolving entertainment
                landscape. His vision was to create a brand
                that doesn't just host events, but
                cultivates a lifestyle.
              </p>

              <p>
                With extensive experience in event curation
                and a deep understanding of youth culture,
                Oduwaiye has positioned D-Wave as a pivotal
                bridge between intentional high-quality
                production and raw community energy.
              </p>

              <blockquote className="border-l-4 border-sky-500 py-1 pl-5 font-semibold italic text-slate-800">
                "We don't just manage artists; we amplify
                their souls. We don't just host parties; we
                curate memories."
              </blockquote>
            </div>
        </div>

          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-sky-200/60 blur-2xl" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl">
              <img
                src={FOUNDER_IMAGE}
                alt="Oduwaiye E. Uwamose, founder and CEO of D-Wave Entertainment"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div
              className="absolute -bottom-5 -left-5 -z-0 hidden h-28 w-28 rounded-2xl border-2 border-sky-500 md:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsVisionary;
