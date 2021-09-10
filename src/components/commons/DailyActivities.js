// Recharts specific import
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

/**
 * @name DailyActivities
 * @param {Object} Sessions - get all the sessions by date for a specific user
 * @returns {JSX}
 */
function DailyActivities({ sessions }) {
  // Map sessions to data
  const data = sessions.map((session, index) => {
    return {
      day: index + 1,
      weight: session.kilogram,
      caloriesBurnt: session.calories,
    };
  });

  // DETERMINE THE MAX AND MIN IN ORDER TO SET CORRECT DOMAIN FOR THE GRAPH
  // Find the min weight in data
  const minWeight = Math.min(...data.map((item) => item.weight));
  // Find the max weight in data
  const maxWeight = Math.max(...data.map((item) => item.weight));

  // const Mockdata = [
  //   {
  //     day: 1,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 2,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 3,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 4,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 5,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 6,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 7,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 8,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 9,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  //   {
  //     day: 10,
  //     weight: 86,
  //     caloriesBurnt: 240,
  //   },
  // ];

  // Specific name and color for the bar chart legent
  const legendName = [
    { name: 'Poids (kg)', color: 'bg-red-600' },
    { name: 'Calories brûlées (kCal)', color: 'bg-black' },
  ];

  // Specific tooltips for the graph (recharts documentation for more info)
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-red-600 p-1 h-16 flex flex-col justify-around">
          <p className="text-xs text-white text-center">{`${payload[0].value}kg`}</p>
          <p className="text-xs text-white text-center">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="chartInfo flex justify-between items-center">
        <h3 className="font-bold ">Activité quotidienne</h3>
        <div className="legendContainer flex gap-4">
          {legendName.map((legend) => (
            <div key={legend.color} className="legend flex items-center gap-2">
              <div className={`legendcolor h-2 w-2 ${legend.color} rounded`} />
              <span className="legendName text-gray-400 text-sm">
                {legend.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          title="Activité quotidienne"
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          barGap={8}>
          <YAxis yAxisId="calories" domain={[0, 'auto']} hide tickCount={3} />
          <YAxis
            yAxisId="weight"
            orientation="right"
            domain={[minWeight - 1, maxWeight + 1]}
            tickCount={3}
            axisLine={false}
            tickLine={false}
            stroke="#9B9EAC"
            tick={{ fontSize: 14 }}
            tickMargin={25}
          />
          <CartesianGrid
            vertical={false}
            stroke="#DEDEDE"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={15}
            stroke="#9B9EAC"
            padding={{ left: -30, right: -30 }}
          />

          <Tooltip
            cursor={{ fill: '#C4C4C480' }}
            content={<CustomTooltip />}
            wrapperStyle={{ top: 0, left: 10 }}
            position={{ y: -20 }}
          />

          <Bar
            yAxisId="weight"
            barSize={7}
            dataKey="weight"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            name="Poids (kg)"
          />
          <Bar
            yAxisId="calories"
            barSize={7}
            radius={[10, 10, 0, 0]}
            dataKey="caloriesBurnt"
            fill="#E60000"
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivities;
