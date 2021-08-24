import StatCard from './StatCard';

function StatsCards() {
  return (
    <div className="right-wrapper flex flex-col justify-between">
      <StatCard
        icon="calorie"
        title="Calories"
        unit="Kcal"
        value="1943"
        color="red-card"
      />
      <StatCard
        icon="chicken"
        title="Proteines"
        unit="g"
        value="155"
        color="blue-card"
      />
      <StatCard
        icon="apple"
        title="Glucides"
        unit="g"
        value="290"
        color="yellow-card"
      />
      <StatCard
        icon="burger"
        title="Lipides"
        unit="g"
        value="50"
        color="pink-card"
      />
    </div>
  );
}

export default StatsCards;
