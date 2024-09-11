import React from "react";

function NavBar() {
  return (
    <>
      <div className="flex justify-between p-10 m-auto w-[80%] ">
        <div>
          <p className="text-white text-3xl bg-purple">/open-space.</p>
        </div>
        <div className="flex flex-row right-0">
          <p className="m-auto mx-5 text-white drop-shadow-2xl hover:shadow-white">
            home
          </p>
          <p className="m-auto mx-5 text-white drop-shadow-2xl hover:shadow-white">
            motive
          </p>
          <p className="m-auto mx-5 text-white drop-shadow-2xl hover:shadow-white">
            abt us
          </p>
          <p className="m-auto mx-5 text-white drop-shadow-2xl hover:shadow-white">
            log in
          </p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
