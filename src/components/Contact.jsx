import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v56hjlq",
        "template_5u96atw",
        form.current,
        "pA2K3rxlvtwtiv0lX"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("EmailJS error:", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-red-600">Me</span>
        </h2>

        <p className="text-gray-400 mb-12">
          Feel free to contact me for job opportunities, projects, or collaboration.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-red-600">Email</h3>
              <p className="text-gray-300">tejeshmanoharan@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-600">Location</h3>
              <p className="text-gray-300">Berlin, Germany</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-600">LinkedIn</h3>
              <p className="text-gray-300 break-words">
                https://www.linkedin.com/in/tejeshwaran-manoharan-4076b7201
              </p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 outline-none focus:border-red-600"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 outline-none focus:border-red-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 outline-none focus:border-red-600"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold transition"
            >
              Send Message
            </button>

            {status && <p className="text-gray-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;