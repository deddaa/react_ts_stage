function Header() {
    return (
      <header className="bg-purple-500 h-20 shadow-2xs">
        <div className="flex items-center justify-between h-full px-8">
          <h1 className="text-white text-3xl font-bold">Result</h1>
          <input className="bg-white border border-gray-500 rounded-xl m-0.5 p-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:translate-y-0.5 transition-all" type="text" name="search" id="" placeholder="Rechercher..." />
          <h1 className="cursor-pointer text-white hover:underline hover:text-gray-800">connexion</h1>
        </div>
      </header>
    );
}

export default Header