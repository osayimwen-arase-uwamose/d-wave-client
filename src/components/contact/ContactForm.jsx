import { useState } from "react";
import { Send } from "lucide-react";

import { submitContactMessage } from "../../services/contact.service.js";

const INITIAL_FORM = {
name: "",
email: "",
phoneNumber: "",
title: "",
message: "",
website: "",
};

const INITIAL_STATUS = {
type: "",
message: "",
};

const MAX_LENGTHS = {
name: 100,
email: 254,
phoneNumber: 30,
message: 5000,
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const [status, setStatus] = useState(INITIAL_STATUS);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.message) {
      setStatus(INITIAL_STATUS);
    };
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phoneNumber = formData.phoneNumber.trim();
    const message = formData.message.trim();

    if (!name || !email || !formData.title || !message) {
      return "Please complete all required fields.";
    }

    if (name.length > MAX_LENGTHS.name) {
      return "Your name must be 100 characters or fewer.";
    }

    if (email.length > MAX_LENGTHS.email) {
      return "Please enter a valid email address.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    if (phoneNumber.length > MAX_LENGTHS.phoneNumber) {
      return "Please enter a shorter phone number.";
    }

    if (
      phoneNumber &&
      !/^\+?[0-9\s().-]{7,30}$/.test(phoneNumber)
    ) {
      return "Please enter a valid phone number.";
    }

    if (message.length > MAX_LENGTHS.message) {
      return "Your message must be 5,000 characters or fewer.";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus(INITIAL_STATUS);

    const validationError = validateForm();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });

      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        title: formData.title,
        message: formData.message.trim(),

        // Server-side spam controls must inspect this field.
        // It is not a substitute for server-side validation.
        website: formData.website,
      });

      setFormData(INITIAL_FORM);

      setStatus({
        type: "success",
        message:
          "Your message has been received. Thank you for contacting D-Wave Entertainment.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.message ||
          "We couldn't submit your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return ( 
    <div className="flex min-w-0 flex-1 flex-col gap-6"> 
      <div className="flex flex-col gap-2"> 
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
          Send us a message 
        </h2>

        <p className="text-sm leading-6 text-text-muted sm:text-base">
          Tell us a little about your enquiry. Our team will get back to you
          as soon as possible.
        </p>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Honeypot: hide from people, but leave it available to the server. */}
        <div
          aria-hidden="true"
          className="absolute -left-[10000px] h-px w-px overflow-hidden"
        >
          <label htmlFor="contact-website">
            Leave this field empty
          </label>

          <input
            id="contact-website"
            name="website"
            type="text"
            value={formData.website}
            onChange={updateField}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex min-w-0 flex-col gap-2">
            <span className="text-sm font-semibold text-text">
              Name <span aria-hidden="true">*</span>
            </span>

            <input
              className="min-h-12 w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={updateField}
              maxLength={MAX_LENGTHS.name}
              required
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2">
            <span className="text-sm font-semibold text-text">
              Email <span aria-hidden="true">*</span>
            </span>

            <input
              className="min-h-12 w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={updateField}
              maxLength={MAX_LENGTHS.email}
              required
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex min-w-0 flex-col gap-2">
            <span className="text-sm font-semibold text-text">
              Phone <span className="font-normal text-text-muted">(optional)</span>
            </span>

            <input
              className="min-h-12 w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              placeholder="+44 7888 642492"
              value={formData.phoneNumber}
              onChange={updateField}
              maxLength={MAX_LENGTHS.phoneNumber}
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2">
            <span className="text-sm font-semibold text-text">
              Inquiry type <span aria-hidden="true">*</span>
            </span>

            <select
              className="min-h-12 w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              name="title"
              value={formData.title}
              onChange={updateField}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="artist">Artist Management</option>
              <option value="events">Private Events</option>
              <option value="general">General Inquiry</option>
              <option value="press">Press &amp; Media</option>
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-text">
            Message <span aria-hidden="true">*</span>
          </span>

          <textarea
            className="min-h-40 w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition placeholder:text-text-muted/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
            name="message"
            placeholder="Tell us about your event or enquiry..."
            value={formData.message}
            onChange={updateField}
            maxLength={MAX_LENGTHS.message}
            required
          />

          <span className="text-right text-xs text-text-muted">
            {formData.message.length}/{MAX_LENGTHS.message}
          </span>
        </label>

        {status.message && (
          <p
            className={`text-sm font-medium ${
              status.type === "success"
                ? "text-green-700"
                : "text-red-700"
            }`}
            role={status.type === "error" ? "alert" : "status"}
            aria-live={status.type === "error" ? "assertive" : "polite"}
          >
            {status.message}
          </p>
        )}

        <button
          className="dw-button dw-button--primary inline-flex min-h-12 w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
          type="submit"
          disabled={isSubmitting}
        >
          <span>
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>

          {!isSubmitting && (
            <Send aria-hidden="true" size={17} />
          )}
        </button>

        <p className="text-xs leading-5 text-text-muted">
          Please don't include passwords, payment details, or other sensitive
          personal information in your message.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
