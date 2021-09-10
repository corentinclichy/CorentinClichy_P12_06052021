import StatCard from './StatCard';

function StatsCards({
  caloriecalorieCount,
  carbohydrateCount,
  lipidCount,
  proteinCount,
}) {
  return (
    <div className="right-wrapper flex flex-col justify-between">
      <StatCard
        icon="calorie"
        title="Calories"
        unit="Kcal"
        value={caloriecalorieCount}
        color="red-card"
      />
      <StatCard
        icon="chicken"
        title="Proteines"
        unit="g"
        value={proteinCount}
        color="blue-card"
      />
      <StatCard
        icon="apple"
        title="Glucides"
        unit="g"
        value={carbohydrateCount}
        color="yellow-card"
      />
      <StatCard
        icon="burger"
        title="Lipides"
        unit="g"
        value={lipidCount}
        color="pink-card"
      />
    </div>
  );
}

export default StatsCards;
