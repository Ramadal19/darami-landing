import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("There was an error sending your message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <p className="contact__eyebrow">CONTACT</p>

          <h2 className="contact__title">
            Let’s build something impactful together
          </h2>

          <p className="contact__description">
            Interested in automation, AI, or digital transformation? Send us a
            message and let’s explore how technology can help drive your business
            forward.
          </p>
        </div>

        <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact__input"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact__input"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="contact__textarea"
              rows="6"
              required
            />

            <button
              type="submit"
              className="contact__button"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="contact__status">{status}</p>}
          </form>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Get in Touch</h3>

              <p className="contact__info-text">
                Prefer to talk directly? You can also reach us through the
                following contact channels.
              </p>

              <div className="contact__info-list">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@darami.tech" className="contact__link">
                    contact@darami.tech
                  </a>
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+13466704314" className="contact__link">
                    (346) 670-4314
                  </a>
                </p>

                <p>
                  <strong>Location:</strong> Katy, TX, USA
                </p>

                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/company/darami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                  >
                    linkedin.com/company/darami
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}