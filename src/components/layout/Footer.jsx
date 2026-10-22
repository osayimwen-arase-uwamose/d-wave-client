import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faWhatsapp,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

import Container from "../layout/Container.jsx";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl =
    `https://wa.me/447888642492?text=${
      encodeURIComponent(
        "Hello, I would like to get in touch with D-Wave Entertainment",
      )
    }`;


  return (
    <footer className="dw-footer">

      <Container>

        <div className="dw-footer__grid">

          {/* Brand */}
          <div className="dw-footer__column">

            <Link
              to="/"
              aria-label="D-Wave Entertainment Home"
              className="dw-footer__brand"
            >
              D-WAVE
              <span>ENTERTAINMENT</span>
            </Link>

            <p className="dw-footer__description">
              Premier entertainment brand and artist
              management agency creating unforgettable
              experiences through entertainment,
              culture, and community.
            </p>

          </div>


          {/* Explore */}
          <div className="dw-footer__column">

            <h2 className="dw-footer__heading">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="dw-footer__links"
            >
              <Link to="/events">
                Events Calendar
              </Link>

              <Link to="/about-us">
                About Us
              </Link>

              <Link to="/contact">
                Get in Touch
              </Link>
            </nav>

          </div>


          {/* Services */}
          <div className="dw-footer__column">

            <h2 className="dw-footer__heading">
              Services
            </h2>

            <ul className="dw-footer__links">
              <li>Artist Management</li>
              <li>Event Production</li>
              <li>Brand Partnerships</li>
              <li>Booking Inquiries</li>
            </ul>

          </div>


          {/* Contact */}
          <div className="dw-footer__column">

            <h2 className="dw-footer__heading">
              Contact
            </h2>

            <address className="dw-footer__contact">

              <p>
                D-Wave Entertainment
                <br />
                Coventry, UK
              </p>

              <a href="mailto:info@dwaveentertainment.co.uk">
                info@dwaveentertainment.co.uk
              </a>

              <a href="tel:+447888642492">
                +44 7888 642492
              </a>

            </address>


            <div
              className="dw-footer__socials"
              aria-label="Social media"
            >

              <a
                href="https://www.instagram.com/d_waveentertainment/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="https://www.threads.com/@d_waveentertainment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <FontAwesomeIcon icon={faThreads} />
              </a>

            </div>

          </div>

        </div>


        {/* Copyright */}
        <div className="dw-footer__bottom">

          <p>
            &copy; {currentYear} D-Wave Entertainment.
            All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
};


export default Footer;
