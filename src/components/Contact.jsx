import { ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/languageContext";

const email = "tejeshmanoharan@gmail.com";
const linkedIn = "https://www.linkedin.com/in/tejeshwaran-manoharan-4076b7201/";

function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-layout" data-reveal>
          <div>
            <p className="section-kicker"><span>06</span> / {t.contact.kicker}</p>
            <h2 id="contact-title">{t.contact.title}<span>{t.contact.titleAccent}</span></h2>
          </div>
          <div className="contact-copy">
            <p>{t.contact.intro}</p>
            <a className="contact-email" href={"mailto:" + email}>
              {email}<ArrowUpRight size={26} aria-hidden="true" />
            </a>
            <div className="contact-links">
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn<ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">{t.contact.newTab}</span>
              </a>
              <span><MapPin size={16} aria-hidden="true" />{t.contact.location}</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-layout">
          <a className="footer-brand" href="#home">Tejeshwaran<span>.</span></a>
          <p>{t.contact.footer}</p>
          <a href="#home">{t.contact.backToTop}<ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
