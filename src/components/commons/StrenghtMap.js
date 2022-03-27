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
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performance}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          stroke="rgba(255, 255, 255)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, dy: 3 }}
          tickMargin={30}
        />
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default StrenghtMap;
