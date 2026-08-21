import aboutimage from "../assets/AboutImage.png";

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me.
            </span>
          </h2>

          <p className="mt-8 text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            I build things for the web, work with data, and enjoy turning
            ideas into simple, useful digital experiences.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[440px] group">

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

              <img
                src={aboutimage}
                alt="About Tejeshwaran"
                className="relative w-full rounded-3xl object-cover border border-white/10"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl">

            <p className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
               Hello! Tejesh here👋
            </p>

            <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">

              <p>
                I enjoy creating things, solving problems, and turning random ideas into projects that somehow end up working. 
                For me, development isn’t just about writing code — it’s about taking an idea and asking, “Okay... 
                how can I make this actually useful?”
              </p>
              <p>
                I’m naturally curious, which means I’m always learning something new. Some days I’m building, some days 
                I’m experimenting, and some days I’m just fighting with a bug that apparently has a personal problem with me.😂
              </p>
              <p>
                Outside of all the screens and keyboards, I’m also learning German 🇩🇪, exploring new ideas, and trying to become a little better than I was yesterday.
                I don’t have everything figured out yet — and honestly, I think that’s the fun part.
                Build. Learn. Break things. Fix them. Repeat. 🚀
              </p>
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="inline-flex items-center mt-10 px-7 py-3.5
              bg-white text-black rounded-full
              font-medium
              hover:bg-gray-200
              transition duration-300
              hover:scale-105"
            >
              Let's work together
              <span className="ml-2 text-lg">→</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;