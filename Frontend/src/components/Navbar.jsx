function Navbar({ search, setSearch }) {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-yellow-400">
        CINEMA
      </h1>

      {/* Navigation */}
      <ul className="flex gap-8 text-gray-300 font-medium">

        <li className="hover:text-yellow-400 cursor-pointer transition">
          Browse
        </li>

        <li className="hover:text-yellow-400 cursor-pointer transition">
          Watchlist
        </li>

        <li className="hover:text-yellow-400 cursor-pointer transition">
          Add Movie
        </li>

      </ul>

      {/* Search + Profile */}
      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white px-4 py-2 rounded-full border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-60"
        />

        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl cursor-pointer">
          👤
        </div>

      </div>

    </nav>
  );
}

export default Navbar;