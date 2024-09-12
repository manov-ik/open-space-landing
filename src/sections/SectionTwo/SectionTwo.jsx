const SectionTwo = () => {
  return(
    <section id="sec-2" style={{
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      height: 'max-content',
      placeContent: "center",
    }}>
      <div className="sec-2-text flex justify-center items-center text-white">
        <p className="w-[70%] text-xl font-thin">
        Our mission is to kindle the passion of college students to unite, innovate, and make a real impact! We are dedicated to creating a buzzing space where collaboration sparks new ideas and contributions to open-source projects lead to game-changing solutions. This platform fuels creativity, encourage continuous learning, and support community-driven development. Let's join forces, push boundaries, and turn great ideas into incredible realities!
        </p>
      </div>
      <div className="sec-2-info">
        <svg width="647" height="647" viewBox="0 0 647 647" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M396.53 73.2737L583.646 315.695L410.912 568.565L117.04 482.427L108.151 176.32L396.53 73.2737Z" fill="#D9D9D9" fill-opacity="0.1"/>
          <path d="M380.98 123.375L530.673 317.312L392.486 519.608L157.388 450.698L150.277 205.812L380.98 123.375Z" fill="#D9D9D9" fill-opacity="0.1"/>
          <path d="M366.674 173.72L478.944 319.173L375.304 470.895L198.98 419.212L193.647 235.548L366.674 173.72Z" fill="#D9D9D9" fill-opacity="0.1"/>
          <path d="M352.368 224.066L427.215 321.034L358.121 422.182L240.572 387.727L237.017 265.284L352.368 224.066Z" fill="#D9D9D9" fill-opacity="0.1"/>
          <path d="M337.062 273.411L374.485 321.895L339.939 372.469L281.164 355.241L279.386 294.02L337.062 273.411Z" fill="#D9D9D9" fill-opacity="0.1"/>
        </svg>
      </div>
    </section>
  )
};

export default SectionTwo;