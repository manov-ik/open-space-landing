const Navbar = () => {
  return (
    <header
      className=" flex justify-center py-5  fixed w-[100%] z-10   
        backdrop-blur-[10px] bg-[#ffffff06] border-b border-b-[#ffffff30] "
    >
      <div className="w-[80%] max-mobile:w-[90%] flex justify-between items-center max">
        <div>
          <h1 className="text-2xl max-mobile:text-base  font-semibold text-white">
            /open-space
          </h1>
        </div>
        <div className="flex text-sm max-mobile:text-xs items-center">
          <div className=" max-laptop:mx-3 mx-16 ">
            <a
              href="#home"
              className="font-medium hover:cursor-pointer text-white hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              Home
            </a>
          </div>
          <div className=" max-laptop:mx-3 mx-16 ">
            <a
              href="#sec-2"
              className="font-medium hover:cursor-pointer text-white hover:[text-shadow:_0_0_12px_#fff] duration-100"
            >
              Motive
            </a>
          </div>
          <div className=" max-laptop:ml-3 ml-16 ">
            <a
              href="#abt-us"
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
