const Header = () => {
  return (
    <header className="flex justify-center w-full px-5 py-1 bg-red lg:px-7 lg:py-5">
      <div className="flex flex-row items-center justify-between w-full max-w-screen-lg text-white">
        <h1 className="inline text-3xl lg:text-4xl font-brand drop-shadow">
          Vellandi
        </h1>
        <nav>
          {/* Mobile Nav Button */}
          <button className="btn btn-sm btn-primary btn-primary-bright sm:hidden">
            menu
          </button>
          {/* Nav links  */}
          <ul className="hidden space-x-8 text-lg md:space-x-12 sm:flex lg:text-xl lg:pt-4">
            <li>Projects</li>
            <li>Writing</li>
            <li>Play</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
