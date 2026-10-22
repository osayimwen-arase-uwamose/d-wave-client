import Container from "../layout/Container.jsx";

const HERO_IMAGE =
"https://res.cloudinary.com/dslzm3lo6/image/upload/v1774264291/image_xpufb6.jpg";

const AboutUsHero = () => {
  return ( 
    <section
      className="dw-hero"
      aria-labelledby="about-hero-heading"
    >
    <div
      className="dw-hero__background"
      style={{
      backgroundImage: `url("${HERO_IMAGE}")`,
      }}
      aria-hidden="true"
    />
      <Container className="dw-hero__container">
        <div className="dw-hero__content">
          <span className="dw-hero__eyebrow">
            About D-Wave Entertainment
          </span>

          <h1
            id="about-hero-heading"
            className="dw-hero__title"
          >
            <span className="dw-hero__title-primary">
              Curating Chaos,
            </span>

            <span className="dw-hero__title-accent">
              Managing Talent.
            </span>
          </h1>

          <p className="dw-hero__description">
            We bridge the gap between high-energy nightlife
            and professional artist management. From
            underground raves to sold-out arenas, we define
            the rhythm.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHero;
