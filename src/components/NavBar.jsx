const Navbar = () => {
  return (
    <header className=" flex justify-center py-5  fixed w-[100%] z-10">
      <div className="w-[80%] flex justify-between items-center max">
        <div>
          <h1 className="text-2xl font-semibold text-white">/open-space</h1>
        </div>
        <div className="flex text-sm">
          <div className=" max-laptop:mx-5 mx-16 ">
            <a
              href="#home"
              className="font-medium hover:cursor-pointer text-white hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              Home
            </a>
          </div>
          <div className=" max-laptop:mx-5 mx-16 ">
            <a
              href="#sec-2"
              className="font-medium hover:cursor-pointer text-white hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              Motive
            </a>
          </div>
          <div className=" max-laptop:ml-5 ml-16 ">
            <a
              href="#"
              className="font-medium hover:cursor-pointer text-white hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
