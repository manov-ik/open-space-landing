import jeyanth from '../../assets/jeyanth.webp';
import harish from '../../assets/harish.webp';
import manovikram from '../../assets/manovikram.webp';
import rithesh from '../../assets/rithesh.webp';
import swayam from '../../assets/swayam.webp';
import vaideeshswaren from '../../assets/vaideeshswaren.webp';

const TeamCard = ({name, image}) => {
  return(
    <div className="team-card-wrapper w-56 bg-black border border-white p-2 rounded-md">
      <div className="team-image-container">
        <img src={image} alt={name} className='w-[90%] h-48 mx-auto rounded-sm object-cover' />
      </div>
      <div className="team-name-container flex justify-center items-center">
        <p className='text-xl text-white font-semibold text-center'>{name}</p>
      </div>
    </div>
  )
}

const Team = () => {
  return(
    <section id="team" className="mt-28">
      <h1 className="text-white text-center text-2xl">Meet the Team behind!</h1>

      <div className="team-wrapper w-[90%] mx-auto p-2">
        {/* Don't ask me why i named it like this */}
        <div className="team-team-wrapper">
          <h3 className="text-center text-xl font-bold text-white">&lt;Initiators/&gt;</h3>
          <div className='flex items-center justify-evenly flex-wrap p-3'>
            <TeamCard name={'Jeyanth'} image={jeyanth} />
            <TeamCard name={'Harish'} image={harish} />
            <TeamCard name={'Mano Vikram'} image={manovikram} />
          </div>
        </div>
        <div className="team-team-wrapper">
          <h3 className="text-center text-xl font-bold text-white">&lt;Club Coordinators/&gt;</h3>
          <div className='flex items-center justify-evenly flex-wrap p-3'>
            <TeamCard name={'Jeyanth'} image={jeyanth} />
          </div>
        </div>
        <div className="team-team-wrapper">
          <h3 className="text-center text-xl font-bold text-white">&lt;Developers/&gt;</h3>
          <div className='flex items-center justify-evenly flex-wrap p-3'>
            <TeamCard name={'Jeyanth'} image={jeyanth} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Team;