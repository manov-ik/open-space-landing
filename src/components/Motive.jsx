import PolygonGraph from "../components/hex/hex";
import motive from "../assets_c/motive.png";
const Motive = () => {
  return (
    <>
      <div
        id="sec-2"
        className="w-[80%] flex flex-row max-mobile:flex-col items-center m-auto 
         mt-40 mb-32 justify-between max-mobile:mt-14 max-mobile:mb-20
         max-laptop:flex-col-reverse max-laptop:mt-20"
      >
        <div className="w-[50%] max-mobile:w-[100%] max-laptop:w-[100%] ">
          <p className="text-left text-xl max-mobile:text-sm max-mobile:text-center max-laptop:text-center max-laptop:text-base max-laptop:mt-5  text-white font-light">
            Our mission is to kindle the passion of college students to unite,
            innovate, and make a real impact! We are dedicated to creating a
            buzzing space where collaboration sparks new ideas and contributions
            to open-source projects lead to game-changing solutions. This
            platform fuels creativity, encourage continuous learning, and
            support community-driven development. Let's join forces, push
            boundaries, and turn great ideas into incredible realities!
          </p>
        </div>
        <div>
          <img
            className=" h-96 max-mobile:h-56 max-mobile:mb-8"
            src={motive}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Motive;
