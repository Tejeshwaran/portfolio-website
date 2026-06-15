function Service() {
  return (
    <section
      id="service"
      className="bg-black text-white py-24 px-6 relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">

        <h2 className="text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Frontend Development
            </h3>

            <p className="text-gray-300">
              Build modern and responsive websites using
              React JS, Tailwind CSS and JavaScript.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Data Analysis
            </h3>

            <p className="text-gray-300">
              Analyze and visualize data using
              SQL, Python, Tableau, Excel and Power BI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Video Editing
            </h3>

            <p className="text-gray-300">
              I create engaging video content, thumbnails, and edits for social media, gaming, and digital platforms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Service;