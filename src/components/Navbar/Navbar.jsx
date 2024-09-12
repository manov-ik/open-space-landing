import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-bar w-full flex flex-row justify-evenly items-center p-3 text-white h-[80px] fixed z-10">
      <div className="logo-container">
        <h1 className="text-2xl font-semibold">/open-space</h1>
      </div>
      <div className="menu-item-wrapper w-[40%] p-1 flex justify-evenly">
        <a href="#home" className="menu-item text-sm font-semibold">
          Home
        </a>
        <a href="#sec-2" className="menu-item text-sm font-semibold">
          Motive
        </a>
        <a href="#" className="menu-item text-sm font-semibold">
          About Us
        </a>
      </div>
    </header>
  );
};

export default Navbar;
