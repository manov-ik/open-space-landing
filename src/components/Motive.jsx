import PolygonGraph from "../components/hex/hex";
const Motive = () => {
  return (
    <>
      <div id="sec-2" className="w-[80%] flex flex-row items-center m-auto">
        <div className="w-[50%]">
          <p className="text-left text-xl text-white font-light">
            Our mission is to kindle the passion of college students to unite,
            innovate, and make a real impact! We are dedicated to creating a
            buzzing space where collaboration sparks new ideas and contributions
            to open-source projects lead to game-changing solutions. This
            platform fuels creativity, encourage continuous learning, and
            support community-driven development. Let's join forces, push
            boundaries, and turn great ideas into incredible realities!
          </p>
        </div>
        <div className=" w-[50%] ">
          <PolygonGraph />
        </div>
      </div>
    </>
  );
};

export default Motive;
