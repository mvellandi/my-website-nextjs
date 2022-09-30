const Header = () => {
  return (
    <header className="flex justify-center w-full px-5 py-1 bg-red md:px-7 md:py-5">
      <div className="flex flex-row items-center justify-between w-full max-w-screen-lg text-white">
        <h1 className="inline text-4xl font-brand drop-shadow">Vellandi</h1>
        <nav>
          {/* Mobile Nav Button */}
          <button className="mb-1 btn-sm purple purple-bright-border hover:purple-hover active:purple-active sm:hidden">
            menu
          </button>
          {/* Nav links  */}
          <ul className="hidden space-x-8 text-lg md:space-x-12 sm:flex sm:text-lg md:text-xl sm:pt-2">
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
