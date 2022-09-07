const Header = () => {
  return (
    <header className="flex justify-center bg-red w-full px-5 py-1 md:px-7 md:py-5">
      <div className="w-full max-w-screen-lg flex flex-row justify-between items-baseline text-white">
        <h1 className="vellandi text-3xl inline">Vellandi</h1>
        <nav>
          <ul className="text-lg sm:text-xl flex flex-row space-x-12">
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
