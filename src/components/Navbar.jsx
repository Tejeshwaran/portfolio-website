function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">
          Tejesh<span className="text-red-600">Dev</span>
        </h1>

        <ul className="flex gap-10 font-bold">
          <li><a href="/" className="hover:text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#service" className="hover:text-red-500">Service</a></li>
          <li><a href="#projects" className="hover:text-red-500">Projects</a></li>
        </ul>

        <button className="bg-red-600 px-8 py-2 rounded-lg font-bold hover:bg-red-700">
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;