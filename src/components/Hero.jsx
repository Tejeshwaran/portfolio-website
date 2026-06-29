import Navbar from "./Navbar";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      {/* Background Circles */}
      <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-red-600 rounded-full right-10 md:right-32 top-64"></div>
      <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-red-900 rounded-full right-6 md:right-24 top-32"></div>
      <div className="absolute w-40 h-40 md:w-52 md:h-52 bg-red-900 rounded-full -left-20 bottom-0"></div>

      <div className="max-w-6xl mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 pt-28 md:pt-24 relative z-10">

        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="italic">Tejeshwaran</span>
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 mb-6">
            A Web Developer and A Data Analyst
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8">
            A passionate web developer and data analyst who loves building
            modern websites and business dashboards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/tejeshwaran-manoharan-4076b7201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-700 w-full sm:w-auto">
                LinkedIn
              </button>
            </a>

            <a
              href="/Lebenslauf_Tejeshwaran_Manoharan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-700 w-full sm:w-auto">
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative mb-10 md:mb-0">
          <div className="w-[280px] h-[280px] md:w-[430px] md:h-[430px] bg-red-600 rounded-full"></div>

          <img
            src={heroImage}
            alt="Tejeshwaran"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] md:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;