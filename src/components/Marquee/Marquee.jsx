import "./Marquee.css";

const Marquee = ({ variant }) => {
  const describeUsItems = [
    "COMMUNITY",
    "FREEDOM",
    "OPEN-SOURCE",
    "COLLABORATION",
    "TRANSPARENCY",
  ];

  return (
    <div className={`marquee-content ${variant === 0 ? "mt-56" : "mb"}`}>
      <div
        className={`marquee marquee-${variant} bg-white h-12 overflow-hidden flex items-center `}
      >
        <div
          className={`marquee-content ${
            variant === 1 ? "scroll-left" : "scroll-right"
          }`}
        >
          {describeUsItems.concat(describeUsItems).map((item, i) => (
            <span className="m-text text-xl font-bold mx-11" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
