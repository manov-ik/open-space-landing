import thisImage from '../../assets/sec-2.png';

const SectionTwo = () => {
  return(
    <section id="sec-2" style={{
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      height: 'max-content',
      placeContent: "center",
    }} className='my-4 p-3'>
      <div className="sec-2-text flex justify-center items-center text-white">
        <p className="w-[70%] text-xl font-thin">
        Our mission is to kindle the passion of college students to unite, innovate, and make a real impact! We are dedicated to creating a buzzing space where collaboration sparks new ideas and contributions to open-source projects lead to game-changing solutions. This platform fuels creativity, encourage continuous learning, and support community-driven development. Let's join forces, push boundaries, and turn great ideas into incredible realities!
        </p>
      </div>
      <div className="sec-2-info flex justify-center items-center">
        <img src={thisImage} alt="Good Image!" className='w-[60%]' />
      </div>
    </section>
  )
};

export default SectionTwo;