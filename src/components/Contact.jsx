import { ExternalLink , Mail, MapPin } from "lucide-react";
// Update these if anything changes.
const CONTACT = {
  email: "tejeshmanoharan@gmail.com",
  linkedinHref: "https://www.linkedin.com/in/tejeshwaran-manoharan-4076b7201",
  linkedinLabel: "linkedin.com/in/tejeshwaran-manoharan",
  location: "Berlin, Germany",
};

const ITEMS = [
  {
    key: "linkedin",
    icon: ExternalLink,
    label: "LinkedIn",
    value: CONTACT.linkedinLabel,
    href: CONTACT.linkedinHref,
    external: true,
  },
  {
    key: "email",
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    key: "location",
    icon: MapPin,
    label: "Location",
    value: CONTACT.location,
    href: null,
    external: false,
  },
];

function Contact() {
  return (
    <section id="Contact" className="bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-red-600">Me</span>
        </h2>

        <p className="text-gray-400 mb-16">
          Feel free to reach out for job opportunities, projects, or collaboration.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex flex-col items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-red-600 transition-all duration-300 group-hover:bg-red-600">
                  <Icon
                    className="h-6 w-6 text-red-600 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-xl font-bold text-red-600">{item.label}</h3>
                <p className="mt-1 break-words text-gray-300">
                  {item.value}
                  {item.external && <span className="sr-only"> (opens in new tab)</span>}
                </p>
              </div>
            );

            return item.href ? (
              <a
                key={item.key}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group rounded-2xl p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {content}
              </a>
            ) : (
              <div key={item.key} className="group rounded-2xl p-4">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
