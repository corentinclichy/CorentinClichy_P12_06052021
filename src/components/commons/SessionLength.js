// Specific import for recharts components
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from 'recharts';

/**
 * @name SessionLength
 * @param {Object} sessionsLength - get all the sessions length by date for a specific user
 * @returns {JSX}
 */
function SessionLength({ sessionsLength }) {
  console.log(sessionsLength);
  // GET THE MAX AND MIN TO SET THE Y AXIS RANGE
  const max = Math.max(...sessionsLength.map(({ minute }) => minute));
  const min = Math.min(...sessionsLength.map(({ minute }) => minute));

  // Specific styles for recharts components tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 flex flex-col justify-around">
          <p className="text-xs text-black text-center">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width="100%" height="100%" data={sessionsLength}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="1%" stopColor="#cccccc" stopOpacity={0.3} />
            <stop offset="60%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.5)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis hide domain={[min - 10, max + 50]} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: 'rgba(0, 0, 0, 0.1)',
            strokeWidth: 30,
            fill: 'blue',
          }}
        />
        <Line
          type="monotone"
          margin={{ top: 100, right: 0, left: 0, bottom: 0 }}
          dataKey="minute"
          stroke="url(#colorUv)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255, 253, 253, 0.1)',
            fill: 'white',
            strokeWidth: 10,
            r: 5,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SessionLength;
