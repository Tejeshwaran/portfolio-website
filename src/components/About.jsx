import aboutimage from "../assets/AboutImage.png"

function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 relative overflow-hidden">

      {/* Background Circles */}
  
    <div className="absolute w-32 h-32 bg-red-900 rounded-full right-24 bottom-32"></div>
    <div className="absolute w-42 h-42 bg-red-900 rounded-full left-10 top-32"></div>
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <img
              src= {aboutimage}
   
            />
          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold mb-4">
              Hi, I'm Tejesh 👋
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I am a skilled developer with great knowledge in
              React JS, Tailwind CSS, React Js.
              Apart from developing websites I also have great
              skills and experience in Data analytics using 
              PYTHON, TABLEAU, POWER BI, and Excel
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              I'm currently working on improving my German skills
            </p>

            <button className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700">
              Contact Me
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;