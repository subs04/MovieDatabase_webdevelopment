function Navbar() {
  return (
    <nav className="flex justify-between items-center">

      <h1 className="text-3xl font-bold text-yellow-400">
        CINEMA
      </h1>

      <ul className="flex gap-8 text-gray-300">

        <li className="hover:text-yellow-400 cursor-pointer">
          Browse
        </li>

        <li className="hover:text-yellow-400 cursor-pointer">
          Watchlist
        </li>

        <li className="hover:text-yellow-400 cursor-pointer">
          Add Movie
        </li>

      </ul>

      <div className="text-3xl">
        👤
      </div>

    </nav>
  );
}

export default Navbar;