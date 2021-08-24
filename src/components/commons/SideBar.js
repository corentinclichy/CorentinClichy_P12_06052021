import ButtonIcon from './ButtonIcon';

// Images
import Yoga from '../../assets/img/yoga.svg';
import Swim from '../../assets/img/swimm.svg';
import Workout from '../../assets/img/workout.svg';
import Bike from '../../assets/img/bike.svg';

function SideBar() {
  const typeOfSports = [Yoga, Swim, Workout, Bike];
  return (
    <aside className="flex flex-col pr-4 pl-4 bg-black h-screen justify-center max-h-full items-center">
      <div className="sportsContainer flex-1 flex flex-col gap-5 justify-center items-center">
        {typeOfSports.map((sport) => (
          <ButtonIcon icon={sport} alt={`Icon ${sport}`} key={sport} />
        ))}
      </div>
      <p className="text-white vertical transform rotate-180 text-xs mb-10">
        Copiryght, SportSee 2020
      </p>
    </aside>
  );
}

export default SideBar;
