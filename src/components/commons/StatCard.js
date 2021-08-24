import Calorie from '../../assets/img/calorie.svg';
import Chicken from '../../assets/img/chicken.svg';
import Apple from '../../assets/img/apple.svg';
import Burger from '../../assets/img/cheeseburger.svg';

function StatCard({ icon, title, value, unit, color }) {
  // Adding specifc class based on the value of color
  const className = `statCard-icon flex items-center justify-center w-14 h-14 rounded-md ${color}`;

  const iconObj = {
    calorie: Calorie,
    chicken: Chicken,
    apple: Apple,
    burger: Burger,
  };

  return (
    <div className="statCard-container flex items-center bg-gray-50 p-8 rounded-md pr-14">
      <div className={className}>
        <img src={iconObj[icon]} alt="" />
      </div>
      <div className="statCard-infos ml-4">
        <h3 className="font-bold">
          {value}
          {unit}
        </h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default StatCard;
