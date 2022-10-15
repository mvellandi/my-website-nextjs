const Header = () => {
  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <header className="flex justify-center w-full bg-red">
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className="flex justify-between items-center w-full max-w-screen-lg px-5 py-1 lg:py-2">
        {/* LOGO */}
        <span className="inline text-3xl lg:text-4xl font-brand text-white drop-shadow">
          Vellandi
        </span>
        {/* NAV GROUP */}
        <nav className="text-white">
          {/* MOBILE NAV BTN */}
          <button className="btn btn-sm btn-primary btn-primary-bright sm:hidden">
            menu
          </button>
          {/* NAV LINKS  */}
          <ul className="hidden space-x-8 text-lg sm:flex md:space-x-12 lg:text-xl lg:pt-4">
            {/* <li>Projects</li> */}
            {/* <li>Writing</li> */}
            {/* <li>Play</li> */}
            {/* <li>About</li> */}
            <li>
              <a href="/contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
