import aboutimage from "../assets/AboutImage.png";

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 md:py-24 px-6 relative overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-red-900 rounded-full right-6 md:right-24 bottom-32"></div>
      <div className="absolute w-28 h-28 md:w-42 md:h-42 bg-red-900 rounded-full left-4 md:left-10 top-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Side */}
          <div className="flex justify-center">
            <img
              src={aboutimage}
              alt="About Tejeshwaran"
              className="w-[260px] sm:w-[320px] md:w-full max-w-[420px] rounded-2xl"
            />
          </div>

          {/* Right Side */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hi, I'm Tejesh 👋
            </h3>

            <p className="text-gray-300 leading-8 mb-6 text-base md:text-lg">
              I am a passionate web developer with knowledge in React.js,
              Tailwind CSS, and modern frontend development. Apart from building
              websites, I also have skills in data analytics using Python,
              Tableau, Power BI, and Excel.
            </p>

            <p className="text-gray-300 leading-8 mb-6 text-base md:text-lg">
              I'm currently improving my German skills and continuing to build
              real-world projects.
            </p>

            <button className="bg-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-700">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;