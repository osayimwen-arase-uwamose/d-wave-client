import { forwardRef, useState } from "react";
import { Mail, BellRing } from "lucide-react";
import { toast } from "sonner";

import Container from "../layout/Container.jsx";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Newsletter = forwardRef(
  function Newsletter(_props, ref) {
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      const normalizedEmail = email.trim();

      if (!EMAIL_REGEX.test(normalizedEmail)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      if (!consent) {
        toast.error("Please agree to receive email updates.");
        return;
      }

      toast.info(
        "Newsletter sign-ups are coming soon. Please check back later.",
      );
    };

    return (
      <section
        ref={ref}
        className="dw-section dw-newsletter"
        aria-labelledby="newsletter-heading"
      >
        <Container className="text-center">
          <div className="mx-auto max-w-4xl">
            <div className="dw-newsletter__icon mb-6">
              <Mail size={28} aria-hidden="true" />
            </div>

            <h2
              id="newsletter-heading"
              className="mb-4 text-3xl font-black text-slate-900 md:text-5xl"
            >
              Be the First to Know
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Join our guest list for event announcements,
              ticket updates, artist news, and special offers.
            </p>

            <form
              onSubmit={handleSubmit}
              className="dw-newsletter__form"
            >
              <label
                className="sr-only"
                htmlFor="newsletter-email"
              >
                Email address
              </label>

              <input
                id="newsletter-email"
                className="dw-newsletter__input"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label className="dw-newsletter__consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  required
                />

                <span>
                  I agree to receive news and updates by email.
                </span>
              </label>

              <button
                className="dw-button dw-button--primary dw-button--full"
                type="submit"
              >
                <BellRing size={18} aria-hidden="true" />
                Join the Guest List
              </button>
            </form>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </Container>
      </section>
    );
  },
);

export default Newsletter;
