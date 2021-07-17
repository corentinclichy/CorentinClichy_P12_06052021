import Calorie from '../../assets/img/calorie.svg';

function StatCard() {
  return (
    <div className="statCard-container flex items-center bg-gray-50 p-8 rounded-md pr-14">
      <div className="statCard-icon bg-red-100 flex items-center justify-center w-14 h-14 rounded-md">
        <img src={Calorie} alt="" />
      </div>
      <div className="statCard-infos ml-4">
        <h3 className="font-bold">1930KCal</h3>
        <p>Calories</p>
      </div>
    </div>
  );
}

export default StatCard;
