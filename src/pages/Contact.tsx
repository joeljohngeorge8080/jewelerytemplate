/**
 * @file Contact.tsx
 * @description Contact page with a client-side-validated form (UI only —
 * no backend wired up yet) plus contact details from siteContent.ts.
 * If arrived via a product's "Enquire" link (?product=Name), the message
 * field is pre-filled.
 */
import React, { memo, useState, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "@/data/siteContent";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = memo(() => {
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: productName ? `I'm interested in the ${productName}.` : "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // NOTE: no backend wired up yet — wire this up to your email/API
      // provider of choice when you're ready to go live.
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-20" id="contact-page">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            GET IN TOUCH
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
            Contact Us
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="luxury-card p-8">
            {submitted ? (
              <div className="text-center py-8">
                <h2 className="font-serif text-2xl font-semibold text-primary mb-3">
                  Thank you!
                </h2>
                <p className="text-muted-foreground">
                  Your message has been received. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none elegant-transition"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none elegant-transition"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none elegant-transition"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none elegant-transition resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn-gold w-full text-base font-medium">
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <address className="not-italic space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-muted-foreground">
                {contactInfo.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
              <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-accent">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-accent">
                {contactInfo.email}
              </a>
            </div>
          </address>
        </div>
      </div>
    </main>
  );
});

Contact.displayName = "ContactPage";

export default Contact;
