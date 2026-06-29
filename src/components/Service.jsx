function Service() {
  return (
    <section
      id="service"
      className="bg-black text-white py-20 md:py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-4">
              Frontend Development
            </h3>

            <p className="text-gray-300 text-sm md:text-base">
              Build modern and responsive websites using React.js, Tailwind CSS,
              and JavaScript.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-4">
              Data Analysis
            </h3>

            <p className="text-gray-300 text-sm md:text-base">
              Analyze and visualize data using SQL, Python, Tableau, Excel, and
              Power BI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-4">
              Video Editing
            </h3>

            <p className="text-gray-300 text-sm md:text-base">
              I create engaging video content, thumbnails, and edits for social
              media, gaming, and digital platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;