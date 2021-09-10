import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

/**
 * @name StrenghtMap
 * @param {Object} performance - get value performance data from specific area and render a radar chart
 * @returns {JSX}
 */
function StrenghtMap({ performance }) {
  // const data = [
  //   {
  //     subject: 'Intensité',
  //     A: 120,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Vitesse',
  //     A: 98,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Force',
  //     A: 86,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Endurance',
  //     A: 99,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Energie',
  //     A: 85,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Cardio',
  //     A: 65,
  //     fullMark: 150,
  //   },
  // ];

  // Get the max value of performance
  // const maxValue = Math.max(...performance.map((item) => item.value));

  const data = performance.map(({ value, kind }) => {
    let areaOfPerformance;
    // Get the area of performance according to the kind of performance
    switch (kind) {
      case 1:
        areaOfPerformance = 'Cardio';
        break;
      case 2:
        areaOfPerformance = 'Energy';
        break;
      case 3:
        areaOfPerformance = 'Endurance';
        break;
      case 4:
        areaOfPerformance = 'Strength';
        break;
      case 5:
        areaOfPerformance = 'Speed';
        break;
      case 6:
        areaOfPerformance = 'Intensity';
        break;

      default:
        break;
    }
    // Return value in order to be able to render the radar chart
    return {
      subject: areaOfPerformance,
      A: value,
      fullMark: 150,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          stroke="rgba(255, 255, 255)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 14, dy: 3 }}
          tickMargin={30}
        />
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default StrenghtMap;
