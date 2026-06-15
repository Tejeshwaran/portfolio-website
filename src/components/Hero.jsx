import Navbar from "./Navbar";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
    {/* Circles */}
      <div className="absolute w-72 h-72 bg-red-600 rounded-full right-32 top-64"></div>
      <div className="absolute w-32 h-32 bg-red-900 rounded-full right-24 top-32"></div>
      <div className="absolute w-52 h-52 bg-red-900 rounded-full -left-20 bottom-0"></div>

      <div className="max-w-6xl mx-auto min-h-screen flex items-center justify-between px-6 pt-24 relative z-10">

        {/* left side */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="italic">Tejeshwaran</span>
          </h2>

          <h1 className="text-6xl font-extrabold text-red-600 mb-6">
           A Web Developer and A Data Analyst
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            A passionate web developer and a data analyst who loves building modern websites and Business dashboards.
          </p>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/tejeshwaran-manoharan-4076b7201/">
            <button className="bg-red-600 px-10 py-3 rounded-lg font-bold hover:bg-red-700">
              LinkedIn
            </button>
            </a>

            <a href="/Lebenslauf_Tejeshwaran_Manoharan.pdf"></a>
            <button className="bg-red-600 px-10 py-3 rounded-lg font-bold hover:bg-red-700">
              Resume
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="relative">
          <div className="w-[430px] h-[430px] bg-red-600 rounded-full"></div>

          <img
            src={heroImage}
            alt="Hero"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;